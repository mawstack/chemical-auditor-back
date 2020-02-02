const axios = require("axios");

const weatherCall = async () => {
  try {
    const weatherKey = process.env.WEATHER_API_KEY;
    const openWeather = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=-24.848560&lon=152.300955&APPID=${weatherKey}`
    );
    const { speed, deg } = openWeather.data.wind;
    return { speed, deg };
  } catch(err) {
    const speed = "Unable to reach server, please try again";
    const deg = null;
    return { speed, deg };
  }
};

/* 
  Set google map coords
  coords: -24.848560, 152.300955
*/

module.exports = weatherCall;
