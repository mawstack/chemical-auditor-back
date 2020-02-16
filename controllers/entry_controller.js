const EntryModel = require("./../database/models/entry_model");
const weatherCall = require("./../services/api_call");

const dashboard = (req, res) => {
  try {
    res.json(req.session.user);
  } catch (err) {
    res.send(err);
  }
};
//GET /entries
const index = async (req, res) => {
  try {
    const entries = await EntryModel.find();
    res.json(entries);
  } catch (err) {
    res.send(err);
  }
};

//GET /entries/new
const newEntry = async (req, res) => {
  try {
    const data = await weatherCall();
    res.json(data);
  } catch (err) {
    res.send(err);
  }
};

//POST /entries/create
const create = async (req, res) => {
  const {
    startTime,
    finishTime,
    cropRow,
    chemicalUsed,
    whp,
    ehd,
    rateApplied,
    quantityApplied,
    image,
    equipmentMethodUsed,
    notes,
    speed,
    deg,
    date,
    user
  } = req.body;
  await EntryModel.create({
    startTime,
    finishTime,
    cropRow,
    chemicalUsed,
    whp,
    ehd,
    rateApplied,
    quantityApplied,
    image,
    equipmentMethodUsed,
    notes,
    speed,
    deg,
    date,
    user
  })
    .then(() => res.send("Entry creation success"))
    .catch(err => res.send(err));
};

//GET /entries/:id
const show = async (req, res) => {
  try {
    const entry = await EntryModel.findById(req.params.id);
    res.json(entry);
  } catch (err) {
    res.send(err);
  }
};

//DELETE /entries/:id
const deleteEntry = async (req, res) => {
  try {
    await EntryModel.findByIdAndRemove(req.params.id);
    res.send("Entry removal successful");
  } catch (err) {
    res.send(err);
  }
};

//GET /entries/:id/edit
const edit = async (req, res) => {
  try {
    const entry = await EntryModel.findById(req.params.id);
    res.send(entry);
  } catch (err) {
    res.send(err);
  }
};

//NO DATA = DEFAULT TO NULL (INSTEAD OF PREVIOUS VALUE) > FINE AS LONG AS VALUES PREFILLED VIEW-SIDE
//PUT /entries/:id
const update = async (req, res) => {
  const {
    startTime,
    finishTime,
    // currentLat,
    // currentLong,
    cropRow,
    chemicalUsed,
    whp,
    ehd,
    rateApplied,
    quantityApplied,
    image,
    equipmentMethodUsed,
    notes,
    speed,
    deg,
    date,
    user
  } = req.body;

  try {
    await EntryModel.findByIdAndUpdate(
      { _id: req.params.id },
      {
        startTime,
        finishTime,
        // currentLat,
        // currentLong,
        cropRow,
        chemicalUsed,
        whp,
        ehd,
        rateApplied,
        quantityApplied,
        image,
        equipmentMethodUsed,
        notes,
        speed,
        deg,
        date,
        user
      }
    );

    res.send("Entry edit successful");
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  dashboard,
  index,
  newEntry,
  create,
  show,
  deleteEntry,
  edit,
  update
};
