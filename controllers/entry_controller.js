const EntryModel = require("./../database/models/entry_model");
const weatherCall = require("./../services/api_call");

//GET /entries
const index = (req, res) => {
  res.json(entries);
};

//GET /entries/new
const newEntry = async (req, res) => {
  const data = await weatherCall();
  res.json(data);
};

//POST /entries
const create = async (req, res) => {
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
    notes
    // speed,
    // deg
  };
  // Replace this with mongoDB
  // entries.push(entry);
  return res.render("success");
};

//GET /entries/:id
const show = async (req, res) => {
  const entryId = req.params._id;
  const entry = await EntryModel.find(entryId);
  res.json(entry);
};

//DELETE /entries/:id
const deleteEntry = async (req, res) => {};

//GET /entries/:id/edit
const edit = async (req, res) => {};

//PUT+PATCH /entries/:id
const update = async (req, res) => {};

module.exports = {
  index,
  newEntry,
  create,
  show,
  deleteEntry,
  edit,
  update
};
