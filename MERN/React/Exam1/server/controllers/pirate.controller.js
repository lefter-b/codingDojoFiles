const { response } = require('express');
const Pirate = require('../models/pirate.model');
 
module.exports.findAllPirates = (req, res) => {
    Pirate.find()
        .then((allDaPirates) => {
            res.json({ results: response})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
 
module.exports.findOneSinglePirate = (req, res) => {
    Pirate.findOne({ _id: req.params.id })
        .then(one=> {
            res.json({ result: one})
        })
        .catch((err) => { 
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.createNewPirate = (req, res) => {
    Pirate.create(req.body)
        .then(newlyCreated => {
            res.json({ result: newlyCreated})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.updateExistingPirate = (req, res) => {
    Pirate.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPirate => {
            res.json({ pirate: updatedPirate })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.deleteAnExistingPirate = (req, res) => {
    Pirate.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
