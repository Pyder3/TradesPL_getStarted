# kill the previous serve and theen sleep for 5 seconds
ps aux | grep -m 1 serve | awk '{print $2}' | xargs sudo kill
sleep 5
npm run build
nohup sudo serve --ssl-cert ./fullchain.pem --ssl-key ./privkey.pem -s build -l 443 &
