#!/bin/bash

# MailGun Pass
export MAILGUN_PASSWORD=$(aws ssm get-parameters --region us-east-1 --names MAILGUN_PASSWORD --with-decryption --query Parameters[0].Value)

cd /var/www/html/cw/dist/
forever start -s server.js
service httpd restart