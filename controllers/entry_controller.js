const entries = [];

function index(req, res) {
  return res.json(entries);
}

function newEntry(req, res) {
  return res.render("contact");
}

function create(req, res) {
  let { date, 
    location, 
    chemical_name, 
    whd_ehd,
    rate_of_application,
    windspeed
} = req.body;

  let entry = { 
    date,location, 
    chemical_name, 
    whd_ehd, 
    rate_of_application,
    windspeed };
  entries.push(entry);
  return res.render("success");
}

module.exports = {
  index,
  newEntry,
  create
};
