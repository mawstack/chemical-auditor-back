const axios = require("axios");

const weatherCall = async () => {
  const weatherKey = process.env.WEATHER_API_KEY;
  const openWeather = await axios.get(
    ` api.openweathermap.org/data/2.5/weather?lat=-24.848560&lon=152.300955&APPID=${weatherKey}`
  );
  return openWeather;
};

/* 
  Set google map coords
  coords: -24.848560, 152.300955
*/

module.exports = weatherCall;
