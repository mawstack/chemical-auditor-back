const entries = [];
const weatherData = require("./../services/api_call");

function index(req, res) {
  return res.json(entries);
}

function newEntry(req, res) {
  return res.render("contact");
}

function create(req, res) {

  const apiData = await weatherCall();

  let {
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
  } = req.body;

  let { speed, deg } = apiData.wind

  let entry = {
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
}

module.exports = {
  index,
  newEntry,
  create
};
