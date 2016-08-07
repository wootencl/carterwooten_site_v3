#!/bin/bash

cd /var/www/html/cw/dist
forever start server.js
httpd service restart