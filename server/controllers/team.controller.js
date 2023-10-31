const Team = require('../models/team.model.js');

module.exports.findAllTeams = (req, res) => {
    Team.find()
        .then((allTheTeams) => {
            res.status(200).json({ Teams: allTheTeams });
        })
        .catch((err) => {
            res.status(500).json({ message: 'Something went wrong', error: err });
        });
}

module.exports.findOneSingleTeam = (req, res) => {
    Team.findOne({ _id: req.params.id })
        .then(oneSingleTeam => {
            if(oneSingleTeam) {
                res.status(200).json({ Team: oneSingleTeam });
            } else {
                res.status(404).json({ message: 'Team not found' });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: 'Something went wrong', error: err });
        });
}

module.exports.createNewTeam = (req, res) => {
    Team.create(req.body)
        .then(newlyCreatedTeam => {
            res.status(201).json({ Team: newlyCreatedTeam });
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err });
        });
}

module.exports.updateExistingTeam = (req, res) => {
    Team.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedTeam => {
            if(updatedTeam) {
                res.status(200).json({ Team: updatedTeam });
            } else {
                res.status(404).json({ message: 'Team not found' });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: 'Something went wrong', error: err });
        });
}

module.exports.deleteAnExistingTeam = (req, res) => {
    Team.deleteOne({ _id: req.params.id })
        .then(result => {
            if(result.deletedCount > 0) {
                res.status(200).json({ result: result });
            } else {
                res.status(404).json({ message: 'Team not found' });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: 'Something went wrong', error: err });
        });
}

