const Bug = require('../models/bug');

const getBugs = async (req, res, next) => {
  try {
    const bugs = await Bug.find();
    res.status(200).json(bugs);
  } catch (error) {
    next(error);
  }
};

const createBug = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const newBug = new Bug({ title, description });
    await newBug.save();
    res.status(201).json(newBug);
  } catch (error) {
    next(error);
  }
};

const updateBug = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedBug = await Bug.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedBug);
  } catch (error) {
    next(error);
  }
};

const deleteBug = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Bug.findByIdAndDelete(id);
    res.status(200).json({ message: 'Bug deleted successfully.' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getBugs,
  createBug,
  updateBug,
  deleteBug,
};