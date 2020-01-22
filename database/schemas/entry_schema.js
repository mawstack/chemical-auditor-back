const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
  startTime: {
    type: Number,
    required: true
  },
  finishTime: {
    type: Number,
    required: true
  },
  currentLat: {
    type: Number,
    required: true
  },
  currentLong: {
    type: Number,
    required: true
  },
  cropRow: {
    type: Number,
    required: true
  },
  chemicalUsed: {
    type: String,
    required: true
  },
  WHP: {
    type: Number,
    required: true
  },
  EHD: {
    type: String,
    required: true
  },
  rateApplied: {
    type: Number,
    required: true
  },
  quantityApplied: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  equipmentMethodUsed: {
    type: String,
    required: true
  },
  speed: {
    type: Number,
    required: true
  },
  deg: {
    type: Number,
    required: true
  },
  notes: {
    type: String,
    required: false
  }
});

module.exports = EntrySchema;
