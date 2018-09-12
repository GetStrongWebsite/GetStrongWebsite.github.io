#!/bin/bash

wget localhost:5000
mv index.html.1 index.html
cp -r ../NewGetStrongWebsite/NewGetStrongWebsite/wwwroot/* ./

