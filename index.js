const express = require('express')
const axios = require('axios');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/amrendra', (req, res) => {
    res.send('amrendra!')
})

app.get('/get-weather', (req, res) => {
    const accepted_city = req.query.city;
    axios.get(`https://api.weatherapi.com/v1/current.json?q=${accepted_city}&key=d33e4dbecda048df845180906242701`)
  .then(function (response) {
    // handle success
    let city = response.data.location.name;
    let temp = response.data.current.temp_c;
    res.send(`The temprature of your city ${city} is ${temp}`);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    res.send("error")
  })


});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})