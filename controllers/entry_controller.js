const EntryModel = require("./../database/models/entry_model");
const weatherCall = require("./../services/api_call");

//DO
//GET /entries - COMPLETE (TESTED)
const index = async (req, res) => {
  const entries = await EntryModel.find();
  res.json(entries);
};

//DO
//GET /entries/new - NOT WORKING
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

//DO
//POST /entries - COMPLETE (TESTED)
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
    notes
    //speed and deg temporarily changed to not-required as API call sorted - 22/1 12PM
    //speed
    //deg
  })
  .then(() => res.send("success"))
  .catch((err) => console.log(err));
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
