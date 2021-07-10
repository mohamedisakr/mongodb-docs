const Inventory = require("../models/inventory");

const create = async (req, res) => {
  const { item, qty, size, status } = req.body;
  const newItem = { item, qty, size, status };
  try {
    const itemToCreate = await Inventory.create(newItem);
    res.status(201).json(itemToCreate.toJSON());
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};

const findAll = async (req, res) => {
  try {
    const items = await Inventory.find({}).lean().exec();
    res.status(200).json(items);
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};

const deleteOne = async (req, res) => {
  const itemId = req.params.id;
  try {
    const item = await Inventory.findByIdAndRemove(itemId).lean().exec();
    res.status(200).json(item);
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};

// const update =
module.exports = {
  create,
  findAll,
  deleteOne,
};
