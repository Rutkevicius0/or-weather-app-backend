const express = require('express');

const router = express.Router();

const SearchKeywords = require('../models/searchKeywordsModel');

const CurrentWeather = require('../models/currentWeatherModel');

router.get('/log/searched-locations', async (req, res) => {
  try {
    const result = await SearchKeywords.find();
    res.json(result);
  } catch (err) {
    res.status(500).json('internal error');
  }
});

router.post('/log/searched-locations/new', (req, res) => {
  console.log(req.body);

  const newSearchedLocation = new SearchKeywords(req.body);

  newSearchedLocation
    .save()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

module.exports = router;
