#!/bin/bash

# This script sets up a basic web app following CCV style guides and using typical packages
# It should be run from the parent directory you want you're app to live in
# e.g. if you want your app to be in ~/src/my_app, you should run this from ~/src

echo "What is your app name? (use naming convention <app>_frontend)"
read APP_NAME

echo "What is the organization and repo name for your project on GitHub (organization/repo_name)?"
read REPO_NAME

echo "Creating $APP_NAME"
git clone https://github.com/brown-ccv/react-app-starter.git

mv test $APP_NAME
cd $APP_NAME

git remote set-url origin https://github.com/${REPO_NAME}.git

echo "Installing packages"
npm install

echo "Running app - there will be warnings due to unused functions/variables"
npm start
