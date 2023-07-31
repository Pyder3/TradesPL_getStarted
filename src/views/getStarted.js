// export async function getStarted() {
//       const response = await fetch('http://192.168.1.35:8000/getStarted')
//       const data = await response.json();
//       const result = data.result;
//       console.log(result);
// }

import "./getStarted.css"
import { Helmet } from 'react-helmet'
import React, { useState } from 'react'


const getStarted = (props) => {
      const[email, setEmail] = useState('');
      const[isValid, setIsValid] = useState(false);
      const[selectedOption, setSelectedOption] = useState('');
      const[textBoxValue, setTextBoxValue] = useState('');
      const[loading, setLoading] = useState(false);
      const[message, setMessage] = useState('');
      const[submitMessage, setSubmitMessage] = useState('');
      const[submitLoading, setSubmitLoading] = useState(false);
      const[submitButtonText, setSubmitButtonText] = useState('Submit');
      

      const handleEmailChange = (event) => {
            setEmail(event.target.value);
            setIsValid(event.target.checkValidity());
      };

      const handleRadioChange = (event) => {
            setSelectedOption(event.target.value)
            const newOption = event.target.value;

            if (newOption === "Stocks, Bonds") {
                  setTextBoxValue("#10007309698 BOT +50 TSLA @248.80BID=248.78 ASK=248.83 MARK=248.80 IMPL VOL=63.26% DELTA=null NEWS=null , ACCOUNT 88***82");
            } else if (newOption === "Future, Commodities") {
                  setTextBoxValue("SELL -1 /CLU23:XNYM @81.07 LMT");
            } else if (newOption === "Naked Calls and Puts") {
                  setTextBoxValue("#10053828461 SOLD -10 UNH 100 (Weeklys) 14 JUL 23 465 PUT @.06 NYSEBID=478.13 ASK=478.30 MARK=478.215 IMPL VOL=20.87% DELTA=null NEWS=null , ACCOUNT 88***82");
            } else if (newOption === "Long and Short Verticals") {
                  setTextBoxValue("#10050965207 BOT +2 VERTICAL GOOGL 100 21 JUL 23 129/145 CALL @.55BID=124.26 ASK=124.27 MARK=124.26 IMPL VOL=33.82% DELTA=null NEWS=null , ACCOUNT 88***82");
            } else if (newOption === "Balanced Butterfly") {
                  setTextBoxValue("#10050945977 SOLD -1 BUTTERFLY ENPH 100 21 JUL 23 185/190/195 CALL @.57 CBOEBID=181.62 ASK=181.72 MARK=181.65 IMPL VOL=66.50% DELTA=null NEWS=null , ACCOUNT 88***82");
            } else if (newOption === "Unbalanced Butterfly") {
                  setTextBoxValue("#10049040127 BOT +1 1/3/2 ~BUTTERFLY GOOGL 100 21 JUL 23 123/129/145 CALL @.83 CBOEBID=124.14 ASK=124.15 MARK=124.1401 IMPL VOL=34.47% DELTA=null NEWS=null , ACCOUNT 88***82");
            } else if (newOption === "~Butterfly") {
                  setTextBoxValue("#10049040127 BOT +1 1/3/2 ~BUTTERFLY GOOGL 100 21 JUL 23 123/129/145 CALL @.83 CBOEBID=124.14 ASK=124.15 MARK=124.1401 IMPL VOL=34.47% DELTA=null NEWS=null , ACCOUNT 88***82");
            } else if (newOption === "Ratio Spreads") {
                  setTextBoxValue("SELL -1 1/2 BACKRATIO NFLX 100 (Weeklys) 11 AUG 23 465/485 CALL @-.71 LMT");
            } else if (newOption === "Iron Condors") {
                  setTextBoxValue("BUY +1 IRON CONDOR NFLX 100 (Weeklys) 4 AUG 23 422.5/425/420/417.5 CALL/PUT @2.30 LMT");
            }else if (newOption === "Straddles") {
                  setTextBoxValue("BUY +1 STRADDLE NFLX 100 (Weeklys) 4 AUG 23 435 CALL/PUT @12.68 LMT");
            }

      }

      const validateEmail = async() => {
            let data = {myemail: email};
            setLoading(true);

            const response = await fetch("/api/verify", {method: 'POST', headers: 
            {'Content-Type': 'application/json'}, body: JSON.stringify(data)});

            if (!response.ok) {     
                  throw new Error('Network response was not ok');
            }

            const returnData = await response.json();
            setLoading(false);
            if (returnData === 'Verification link sent succefully!') {
                  console.log('Verification link sent');
                  setMessage('Verification link sent successfully!');
            } else if (returnData === "Email couldn't be sent"){
                  console.log("Unable to send verification link!");
                  setMessage('Failed to send verification link.');
            } else if (returnData === "Email is already registered!"){
                  setMessage("Email already exists!!");
            }
      }

      const submitEmail = async() => {
            if (message != "Verification link sent successfully!") {
                  setSubmitMessage("Please validate Email first!");
                  return null;
            }
            let data = {myemail: email, message: textBoxValue};
            
            setSubmitLoading(true);
            setSubmitButtonText("Loading...");
            const response = await fetch("/api/submitEmail", {method: 'POST', headers:{'Content-Type': 'application/json'}, body: JSON.stringify(data)});

            if (!response.ok) {     
                  throw new Error('Network response was not ok');
            }

            const returnData = await response.json();
            setSubmitLoading(false);
            setSubmitButtonText("Submit");
            if (returnData === "message sent successfully") {
                  setSubmitMessage("Request processed successfully");
            } else if (returnData === "error") {
                  setSubmitMessage("Some Error occured");
            } else if (returnData === "Email not verified") {
                  setSubmitMessage("Email has been not verified");
            }
      }

      return (
      <div className='home-container'> 
      <Helmet>
            <title>TradesPL Email-based Trade Journaling!</title>
            <meta property="og:title" content="TradesPL Email-based Trade Journaling!</" />
      </Helmet>
      <div className="home-navbar navbar-container">
      <div className="home-max-width max-width">
	<a href="/">
        <div className="home-logo">
          <img
            alt="image"
            src="/playground_assets/group%202.svg"
            className="home-image"
          />
          <span>
            <span className="home-text001">
              TradesPL, Email-based Trade Journaling System
            </span>
            <br></br>
          </span>
        </div>
	</a>
        <div className="home-burger-menu navbar-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
          </svg>
        </div>
      </div>
    </div>
    <div class="container">
    <div className="container1_parent">
      <div className="container1">
        <li><input type="radio" name="tradeOption" id="option1" value="Stocks, Bonds" onChange={handleRadioChange}/><label htmlFor="option1">Stocks, Bonds</label></li>
        <li><input type="radio" name="tradeOption" id="option2" value="Future, Commodities" onChange={handleRadioChange}/><label htmlFor="option2">Future, Commodities</label></li>
        <li><input type="radio" name="tradeOption" id="option3" value="Naked Calls and Puts" onChange={handleRadioChange}/><label htmlFor="option3">Naked Calls and Puts</label></li>
        <li><input type="radio" name="tradeOption" id="option4" value="Long and Short Verticals" onChange={handleRadioChange}/><label htmlFor="option4">Long and Short Verticals</label></li>
        <li><input type="radio" name="tradeOption" id="option5" value="Balanced Butterfly" onChange={handleRadioChange}/><label htmlFor="option5">Balanced Butterfly</label></li>
        <li><input type="radio" name="tradeOption" id="option6" value="Unbalanced Butterfly" onChange={handleRadioChange}/><label htmlFor="option6">Unbalanced Butterfly</label></li>
        <li><input type="radio" name="tradeOption" id="option7" value="~Butterfly" onChange={handleRadioChange}/><label htmlFor="option7">~Butterfly</label></li>
        <li><input type="radio" name="tradeOption" id="option8" value="Ratio Spreads" onChange={handleRadioChange}/><label htmlFor="option8">Ratio Spreads</label></li>
        <li><input type="radio" name="tradeOption" id="option9" value="Iron Condors" onChange={handleRadioChange}/><label htmlFor="option9">Iron Condors</label></li>
        <li><input type="radio" name="tradeOption" id="option10" value="Straddles" onChange={handleRadioChange}/><label htmlFor="option10">Straddles</label></li>
        </div>
</div>

      <div className="container2_3_parent">
      <div class="container2">
    <form id="emailForm">
        <input
            type='email'
            id='email'
            name='email'
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required>
        </input>
        <button type='button' id='validateButton' disabled={!isValid || loading} onClick={validateEmail}>
            {loading ? "Loading..." : "Validate"}
        </button>
    </form>
    <p style={{ color: message.includes('successfully') ? 'green' : 'red', textAlign: 'center', marginTop: "10px"}}>{message}</p>
    </div>
    <div className="container3">
            <label className="myLabel" htmlFor="yourTextBox">Example code that will be sent to services@tradespl.com :</label>
            <textarea id="yourTextBox"
            type="text"
            placeholder="Please select one of the trade types from the options on the left!"
            value={textBoxValue}
            readOnly></textarea>
    </div>
    <button type='button' id='submitButton' onClick={submitEmail} disabled={submitLoading || textBoxValue == "" || textBoxValue == "NYS" || !isValid}>
            {submitButtonText}
      </button>
      <p style={{ color: submitMessage.includes('successfully') ? 'green' : 'red', textAlign: 'center', marginTop: "10px"}}>{submitMessage}</p>
    </div>
    </div>
    </div>)
}

export default getStarted;
