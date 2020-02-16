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
  // currentLat: {
  //   type: Number,
  //   required: true
  // },
  // currentLong: {
  //   type: Number,
  //   required: true
  // },
  cropRow: {
    type: Number,
    required: true
  },
  chemicalUsed: {
    type: String,
    required: true,
    trim: true
  },
  whp: {
    type: Number,
    required: true
  },
  ehd: {
    type: String,
    required: true,
    trim: true
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
    required: false,
    trim: true
  },
  equipmentMethodUsed: {
    type: String,
    required: true,
    trim: true
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
    required: false,
    trim: true
  },
  date: {
    type: Date,
    required: true,
  },
  user: {
    type: String,
    required: true,
    trim: true
  }
});

module.exports = EntrySchema;
