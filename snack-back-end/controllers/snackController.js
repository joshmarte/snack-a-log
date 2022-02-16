// DEPENDENCIES
const express = require("express");
const snacks = express.Router();
const healthy = require("../validations/checkHealthy");

// QUERIES DEPENDENCIES
const {
  getAllSnacks,
  updateSnack,
  deleteSnack,
  getSnack,
  createSnack,
} = require("../queries/snacks");

// VALIDATION DEPENDENCIES

// INDEX
snacks.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const snack = await getSnack(id);
    if (snack.id) {
      res.status(200).json(snack);
    } else {
      res.status(404).json({ error: "not found" });
    }
  } catch (error) {
    console.log(error);
  }
});

// SHOW
snacks.get("/", async (req, res) => {
  try {
    const snacks = await getAllSnacks();
    if (snacks) {
      res.status(200).json(snacks);
    } else {
      res.status(500).json({ error: "server error" });
    }
  } catch (error) {
    console.log(error);
  }
});

// CREATE
snacks.post("/", healthy, async (req, res) => {
  try {
    console.log(req.body);
    if (!req.body.image) {
      req.body.image =
        "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
    }
    if (req.body.name) {
      console.log(req.body);
      const snack = await createSnack(req.body);
      res.json(snack);
    } else {
      res.status(422).json({ error: "Must include name field" });
    }
  } catch (error) {
    return error;
  }
});

// DELETE
snacks.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSnack = await deleteSnack(id);
  if (deletedSnack.id) {
    res.status(200).json(deletedSnack);
  } else {
    res.status(404).json("Snack not found");
  }
});

// UPDATE
snacks.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedSnack = await updateSnack(id, req.body);
  res.status(200).json(updatedSnack);
});

// EXPORT
module.exports = snacks;
