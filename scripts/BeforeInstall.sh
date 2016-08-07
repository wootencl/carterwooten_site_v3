#!/bin/bash
 
# Stop the node application if it hasn't already been stopped
forever stop /var/www/html/cw/dist/server.js || true

tar -vczf /home/ec2-user/backups/cw_backup.$(date +%F_%R).tar.gz /var/www/html/cw
rm -rf /var/www/html/cw/*
