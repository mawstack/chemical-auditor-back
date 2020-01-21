const mongoose = require("mongoose");
const EntrySchema = require("./../schemas/entry_schema");

const EntryModel = mongoose.model("entry", EntrySchema);

module.exports = EntryModel;