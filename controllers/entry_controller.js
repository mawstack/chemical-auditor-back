const EntryModel = require("./../database/models/entry_model");
const weatherCall = require("./../services/api_call");

//COMPLETE/TESTED
//GET /entries
const index = async (req, res) => {
  const entries = await EntryModel.find();
  res.json(entries);
};

//NOT WORKING
//GET /entries/new
const newEntry = async (req, res) => {
  await weatherCall()
  .then(data => {
    console.log("call successful");
    res.send(data);
  })
  .catch(err => {
    console.log("call fail");
    res.send(err);
  });
};

//COMPLETE/TESTED
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

  await EntryModel.create({
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
  })
  .then(() => res.send("Entry creation success"))
  .catch(err => res.send(err));
};

//COMPLETED/TESTED
//GET /entries/:id
const show = async (req, res) => {
  const entry = await EntryModel.findById(req.params.id);
  res.json(entry);
}

//COMPLETED/TESTED
//DELETE /entries/:id
const deleteEntry = async (req, res) => {
  await EntryModel.findByIdAndRemove(req.params.id);
  res.send("Entry removal successful");
}

//COMPLETED/TESTED
//GET /entries/:id/edit
const edit = async (req, res) => {
  const entry = await EntryModel.findById(req.params.id);
  res.json(entry);
}

//COMPLETED/TESTED BUT NO DATA = DEFAULT TO NULL (INSTEAD OF PREVIOUS VALUE)
//FINE AS LONG AS VALUES PREFILLED VIEW-SIDE
//PUT+PATCH /entries/:id
const update = async (req, res) => {
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
    notes,
    speed,
    deg
  } = req.body;

  await EntryModel.findByIdAndUpdate({ _id: req.params.id }, {
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
  });

  res.send("Entry edit successful");
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
