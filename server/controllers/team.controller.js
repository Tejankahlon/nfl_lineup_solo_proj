const Team = require('../models/team.model.js');

module.exports.findAllTeams = (req, res) => {
    Team.find()
        .then((allTheTeams) => {
            res.json({ Teams: allTheTeams })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findOneSingleTeam = (req, res) => {
    Team.findOne({ _id: req.params.id })
        .then(oneSingleTeam => {
            res.json({ Team: oneSingleTeam })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.createNewTeam = (req, res) => {
    Team.create(req.body)
        .then(newlyCreatedTeam => {
            res.json({ Team: newlyCreatedTeam })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.updateExistingTeam = (req, res) => {
    Team.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedTeam => {
            res.json({ Team: updatedTeam })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.deleteAnExistingTeam = (req, res) => {
    Team.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
