const entries = [];
const weatherData = require("./../services/api_call");

//GET /entries
const index = (req, res) => {
  return res.json(entries);
};

//GET /entries/new
const newEntry = (req, res) => {
  return res.render("contact");
};

//POST /entries
const create = async (req, res) => {
  const apiData = await weatherCall();
  //
  // API DATA ABOVE MUST BE MOVED TO THE NEWENTRY PAGE
  //
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

//GET /entries:id
const show = async (req, res) => {

}

//DELETE /entries:id
const deleteEntry = async (req, res) => {

}

//GET /entries/id:/edit
const edit = async (req, res) => {

}

//PUT+PATCH /entries/:id
const update = async (req, res) => {

}

module.exports = {
  index,
  newEntry,
  create,
  show,
  deleteEntry,
  edit,
  update
};
