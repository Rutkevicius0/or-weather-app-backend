const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const currentWeatherSchema = new Schema(
  {
    weatherData: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true },
);

const CurrentWeather = mongoose.model('currentWeather', currentWeatherSchema);

module.exports = CurrentWeather;
