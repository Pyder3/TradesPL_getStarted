npm run build
nohup sudo serve --ssl-cert ./fullchain.pem --ssl-key ./privkey.pem -s build -l 443 &
