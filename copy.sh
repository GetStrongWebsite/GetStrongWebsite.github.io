#!/bin/bash

echo "Downloading index page"
wget -q localhost:5000 -O index.html --no-cookies --header "Cookie: .AspNet.Consent=yes"

pages=( "Datenschutz" "Impressum" "Termine" "News" "News/Test2" "News/Testartikel" "Teams" "Team/Würzburg" "Team/Regensburg" "Logo" )

for page in "${pages[@]}"
do
	echo "Downloading ${page}"
	mkdir -p ${page}
	wget -q localhost:5000/${page} -O ${page}/index.html --no-cookies --header "Cookie: .AspNet.Consent=yes"
done

echo "Copying static files"
cp -r ../NewGetStrongWebsite/NewGetStrongWebsite/wwwroot/* ./

