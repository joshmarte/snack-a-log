// DEPENDENCIES
const express = require("express");
const snacks = express.Router();
const healthy = require("../validations/checkHealthy");
const name = require("../validations/name");

// QUERIES DEPENDENCIES
const {
  getAllSnacks,
  updateSnack,
  deleteSnack,
  getSnack,
  createSnack,
} = require("../queries/snacks");

// INDEX
snacks.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const snack = await getSnack(id);
    if (snack.id) {
      let response = {
        success: true,
        payload: snack,
      };
      res.status(200).json(response);
    } else {
      let response = {
        success: false,
        payload: "/not found/",
      };
      res.status(404).json(response);
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
      let response = {
        success: true,
        payload: snacks,
      };
      res.status(200).json(response);
    } else {
      let response = {
        success: false,
        payload: "server error",
      };
      res.status(500).json(response);
    }
  } catch (error) {
    console.log(error);
  }
});

// CREATE
snacks.post("/", name, async (req, res) => {
  try {
    if (!req.body.image) {
      req.body.image =
        "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
    }
    if (req.body.name) {
      const snack = await createSnack(req.body);
      healthy(snack);
      let response = {
        success: true,
        payload: snack,
      };
      res.json(response);
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
    let response = {
      success: true,
      payload: deletedSnack,
    };
    res.status(200).json(response);
  } else {
    let response = {
      success: false,
      payload: {},
    };
    res.status(404).json(response);
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
