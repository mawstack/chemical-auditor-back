const entries = [];
const weatherData = require("./../services/api_call");

const index = (req, res) => {
  return res.json(entries);
};

const newEntry = (req, res) => {
  return res.render("contact");
};

const create = async (req, res) => {
  const apiData = await weatherCall();

  const {
    startTime,
    finishTime,
    currentLat,
    currentLong,
    cropRow,
    chemicalUsed,
    WHP,
    EHD,
    rateApplied,
    quantityApplied,
    image,
    equipmentMethodUsed,
    notes
  } = req.body;

  const { speed, deg } = apiData.wind;

  const entry = {
    startTime,
    finishTime,
    currentLat,
    currentLong,
    cropRow,
    chemicalUsed,
    WHP,
    EHD,
    rateApplied,
    quantityApplied,
    image,
    equipmentMethodUsed,
    notes,
    speed,
    deg
  };
  entries.push(entry);
  return res.render("success");
};

module.exports = {
  index,
  newEntry,
  create
};
