# weather-app

>> Clone repository
>> open folder in command prompt
>> run command "npm install"
>> once above command complete dependency as node module
>> run the server by "npm run server" command



__________________________________________________________________________
for creating new project we need below

Note -common components in server file (js file)-

***-----app.js------------------------*****
const express = require("express");
const { write } = require("fs");
const bodyParser = require("body-parser");


const app = express();
const https = require("https");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

