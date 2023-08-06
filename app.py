from flask import Flask, request, jsonify, url_for
from flask_cors import CORS
import json, os;
from flask_mail import Mail, Message
from itsdangerous import URLSafeTimedSerializer
import csv
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app) # This will enable CORS for all routes


config = json.loads(os.getenv('mail_config'))
config = config["mxroute_smtp_send_email"]
app.config['MAIL_SERVER'] = config["server"]
app.config["MAIL_PORT"] = config["port"]
app.config["MAIL_USERNAME"] = config["user"]
app.config["MAIL_PASSWORD"] = config["password"]
app.config["MAIL_USE_TLS"] = True
app.config["SECRET_KEY"] = os.getenv("SECRET-KEY")
app.config.update(
    SERVER_NAME="tradespl.com",
    PREFERRED_URL_SCHEME='https'
)
serializer = URLSafeTimedSerializer(app.config["SECRET_KEY"])

mail = Mail(app)

@app.route("/api/verify", methods=['POST'])
def verify_email():
    print("requested")
    data = request.get_json()
    email = data.get('myemail')

    try:
        with open("user_database.csv", 'r') as f:
            reader = csv.reader(f)
            for row in reader:
                if email in row:
                    return jsonify("Email is already registered!")
    except:
        pass

    if(send_email(email)):
        return jsonify('Verification link sent succefully!')
    else:
        return jsonify("Email couldn't be sent")
    
@app.route("/api/submitEmail", methods=['POST'])
def verifyAndSubmitEmail():
    data = request.get_json()
    email = data.get('myemail')
    message = data.get('message')
    # message += " DEMO"
    isEmailVerified = False

    try:
        with open("user_database.csv", 'r') as f:
            reader = csv.reader(f)
            for row in reader:
                if email in row:
                    isEmailVerified = True
    except:
        return jsonify("Email not verified")
    
    if (isEmailVerified):
        messages = message.split("\n\n")
        try:
            for message in messages:
                message += "DEMO"
                msg = Message(message, sender=email, recipients=[app.config["MAIL_USERNAME"]])
                msg.body = message
                mail.send(msg)
            return jsonify("message sent successfully")
        except:
            return jsonify('error')
    else:
        return jsonify("Email not verified")

def send_email(email):
    token = serializer.dumps(email, salt="email-confirmation-salt")

    confirm_url = url_for("confirm_email", token=token, _external=True)

    msg = Message('Email Verification', sender=app.config["MAIL_USERNAME"], recipients=[email])
    msg.body = f'Please follow this link to verify your email : {confirm_url}'
    print(config)
    mail.send(msg)

    return True

@app.route('/confirm-email/<token>')
def confirm_email(token):
    try:
        email = serializer.loads(token, salt="email-confirmation-salt", max_age=3600)
    except:
        return 'The confirmation link is invalid or has expired.'
    

    with open("user_database.csv", 'a', newline='') as f:
        writer = csv.writer(f)
        writer.writerow([email])

    return 'Email Confirmed'



if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
