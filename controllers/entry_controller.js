const EntryModel = require("./../database/models/entry_model");
const weatherCall = require("./../services/api_call");

const dashboard = (req, res) => {
  res.json(req.session.user);
  // We need to pass all recent entry data here
}
//GET /entries
const index = async (req, res) => {
  const entries = await EntryModel.find();
  res.json(entries);
}

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

//GET /entries/:id
const show = async (req, res) => {
  const entry = await EntryModel.findById(req.params.id);
  res.json(entry);
};

//DELETE /entries/:id
const deleteEntry = async (req, res) => {
  await EntryModel.findByIdAndRemove(req.params.id);
  res.send("Entry removal successful");
}

//GET /entries/:id/edit
const edit = async (req, res) => {
  const entry = await EntryModel.findById(req.params.id);
  res.json(entry);
}

//NO DATA = DEFAULT TO NULL (INSTEAD OF PREVIOUS VALUE) > FINE AS LONG AS VALUES PREFILLED VIEW-SIDE
//PUT /entries/:id
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
