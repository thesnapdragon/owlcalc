#!/bin/bash

# build
grunt build

# delete unused javascripts
rm -rfv ../dist/bower_components/angular-* ../dist/bower_components/bootstrap-* ../dist/bower_components/es5-shim/ ../dist/bower_components/json3/
rm -rfv ../dist/bower_components/angular/angular.js ../dist/bower_components/angular/bower.json
rm -rfv ../dist/bower_components/jquery/bower* ../dist/bower_components/jquery/compo* ../dist/bower_components/jquery/jquery.js ../dist/bower_components/jquery/jquery-migrate.* ../dist/bower_components/jquery/jquery.min.map ../dist/bower_components/jquery/package.json ../dist/bower_components/jquery/README.md ../dist/bower_components/jquery/.gitignore
rm -rfv ../dist/bower_components/mathjs/

# add manifest
cp -v manifest.webapp ../dist/
sed -i 's/OwlCalcTest/OwlCalc/' ../dist/manifest.webapp

# add used Firefox fonts
cp -v styles/FeuraSans-Medium.otf styles/FeuraSans-Medium.ttf styles/FeuraSans-Medium.eot styles/FeuraSans-Medium.svg styles/FeuraSans-Medium.woff ../dist/styles/

# add used Firefox CSS templates
mkdir -pv ../dist/styles/shared/style/
cp -rv styles/shared/style/headers.css styles/shared/style/status.css styles/shared/style/input_areas.css ../dist/styles/shared/style/

# add used Firefox CSS images
cp -rv images/headers images/status images/input_areas/ ../dist/images/

# repair broken image names
cd ../dist/images
mv -v *.logo16.png logo16.png
mv -v *.logo32.png logo32.png
mv -v *.logo48.png logo48.png
mv -v *.logo60.png logo60.png
mv -v *.logo64.png logo64.png
mv -v *.logo128.png logo128.png
cd -

# change to min version by angular and jquery
sed -i 's/angular.js/angular.min.js/' ../dist/index.html
sed -i 's/jquery.js/jquery.min.js/' ../dist/index.html

# some fixes
# broken img tag
# sed -i 's/<img\(.*\)>/<img\1\/>/' ../dist/views/main.html
# broken angular + jquery dependency
# sed -i 's/\/\/ajax.googleapis.com\/ajax\/libs\/.*\/\(.*\)\.min\.js/bower_components\/\1\/\1\.min\.js/' ../dist/index.html

exit 0
