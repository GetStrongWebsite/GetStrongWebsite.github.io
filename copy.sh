#!/bin/bash

wget localhost:5000
mv index.html.1 index.html
cp ../NewGetStrongWebsite/NewGetStrongWebsite/wwwroot/css/* css/
cp ../NewGetStrongWebsite/NewGetStrongWebsite/wwwroot/js/* js/
cp -r ../NewGetStrongWebsite/NewGetStrongWebsite/wwwroot/lib/* lib/

