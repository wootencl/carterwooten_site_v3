#!/bin/bash

cd /var/www/html/cw/dist/
forever start -s server.js
httpd service restart