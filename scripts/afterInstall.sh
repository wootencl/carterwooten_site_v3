#!/bin/bash

cd /var/www/html/cw
npm install -s --only=production

# MailGun Pass
export MAILGUN_PASSWORD=$(aws ssm get-parameters --region us-east-1 --names MAILGUN_PASSWORD --with-decryption --query Parameters[0].Value)
