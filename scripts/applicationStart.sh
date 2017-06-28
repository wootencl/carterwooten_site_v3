#!/bin/bash

cd /var/www/html/cw/dist/
MAILGUN_PASSWORD=$(aws ssm get-parameters --region us-east-1 --names MAILGUN_PASSWORD --with-decryption --query Parameters[0].Value) forever start server.js
service httpd restart