const express = require("express");
const {
  home,
  newList,
  createList,
  listAll,
  editList,
} = require("./controllers/controller");
const router = express.Router();
const List = require("./models/list");

router.get("/", home);
router.get("/lists", listAll);
router.get("/lists/new", newList);
router.post("/lists", createList);
router.get("/lists/:id/edit", editList);
router.put("/lists/:id", async (req, res) => {
  const { id } = req.params;
  const updatedList = await List.findByIdAndUpdate(id, req.body.list);
  res.redirect("/lists");
});

router.delete("/lists/:id", async (req, res) => {
  await List.findByIdAndRemove(req.params.id);
  res.redirect("/lists");
});
module.exports = router;
