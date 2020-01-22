const EntryModel = require("./../database/models/entry_model");
const entries = [];
const weatherData = require("./../services/api_call");

//DO
//GET /entries
const index = (req, res) => {
  return res.json(entries);
};

//DO
//GET /entries/new
const newEntry = (req, res) => {
  return res.render("contact");
};

//DO
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

//DO
//GET /entries/:id
const show = async (req, res) => {
  const entryId = req.params._id;
  const entry = await EntryModel.find(entryId);
  res.json(entry);
}

//DO
//DELETE /entries/:id
const deleteEntry = async (req, res) => {

}

//DO
//GET /entries/:id/edit
const edit = async (req, res) => {

}

//DO
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
