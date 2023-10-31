const TeamController = require('../controllers/team.controller');

module.exports = app => {
    app.get('/api/teams', TeamController.findAllTeams);
    app.get('/api/team/:id', TeamController.findOneSingleTeam);
    app.patch('/api/team/:id', TeamController.updateExistingTeam);
    app.post('/api/team', TeamController.createNewTeam);
    app.delete('/api/team/:id', TeamController.deleteAnExistingTeam);
}
