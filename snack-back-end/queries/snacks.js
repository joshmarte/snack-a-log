// DEPENDENCIES
const db = require("../db/dbConfig");

// ALL SONGS
const getAllSnacks = async () => {
  try {
    const allSnacks = await db.any("SELECT * FROM snacks");
    return allSnacks;
  } catch (error) {
    return error;
  }
};

// GET ONE SNACK
const getSnack = async (id) => {
  try {
    const oneSnack = await db.one("SELECT * FROM snacks WHERE id=$1", id);
    return oneSnack;
  } catch (error) {
    return error;
  }
};

// CREATE
const createSnack = async (snack) => {
  try {
    const newSnack = await db.one(
      "INSERT INTO snacks (name, image, fiber, protein, added_sugar, is_healthy) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        snack.name,
        snack.image,
        snack.fiber,
        snack.protein,
        snack.added_sugar,
        snack.is_healthy,
      ]
    );
    return newSnack;
  } catch (error) {
    return error;
  }
};

// DELETE
const deleteSnack = async (id) => {
  try {
    const deletedSnack = await db.one(
      "DELETE FROM snacks WHERE id = $1 RETURNING *",
      id
    );
    return deletedSnack;
  } catch (error) {
    return error;
  }
};

// UPDATE
const updateSnack = async (id, snack) => {
  try {
    const updatedSnack = await db.one(
      "UPDATE songs SET name=$1, image=$2, fiber=$3 protein=$4, added_sugar=$5 WHERE id=$7 RETURNING *",
      [
        snack.name,
        snack.image,
        snack.fiber,
        snack.protein,
        snack.added_sugar,
        id,
      ]
    );
    return updatedSnack;
  } catch (error) {
    return error;
  }
};
// EXPORT
module.exports = {
  getAllSnacks,
  updateSnack,
  deleteSnack,
  getSnack,
  createSnack,
};