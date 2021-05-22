const express = require("express");
const { write } = require("fs");
const bodyParser = require("body-parser");


const app = express();
const https = require("https");

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});




app.post("/", function(req, res) {
    const cityname = req.body.cityname;
    const apiKey = "abb0979cfc5870631efc03d2332fd3ec";
    const units = "metric";

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&units=" + units + "&appid=" + apiKey;
    https.get(url, function(response) {
        console.log(response.statusCode);
        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            const temp = weatherData.main.temp;
            console.log(temp);
            const desc = weatherData.weather[0].description;
            console.log(desc);

            const icon = weatherData.weather[0].icon;

            const imgUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.write("<h1 > Teamprature of " + cityname + ": " + temp + "* Celcius </h1>");
            res.write("<h2>Description: " + desc + "</h2>");
            res.write("<div><img src= " + imgUrl + " > </div>");
            res.end();
        })
    })
});

app.listen(3000, function() {
    console.log("server is running on port 3000")
});