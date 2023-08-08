const List = require("../models/list");
const home = (req, res) => {
  res.render("home");
};

const newList = (req, res) => {
  res.render("new");
};
const createList = async (req, res) => {
  const newlist = new List(req.body.list);
  await newlist.save();
  res.redirect("/lists");
};

const listAll = async (req, res) => {
  const lists = await List.find({});

  res.render("index", { lists });
};

const editList = async (req, res) => {
  const { id } = req.params;

  const list = await List.findById(id);
  console.log(list);
  res.render("edit", { list });
};

module.exports = { home, newList, createList, listAll, editList };
