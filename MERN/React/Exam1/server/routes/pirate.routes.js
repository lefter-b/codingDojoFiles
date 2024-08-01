const PirateController = require('../controllers/pirate.controller');
 
module.exports = app => {
    app.get('/api/pirates', PirateController.findAllPirates);
    app.get('/api/pirates/:id', PirateController.findOneSinglePirate);
    app.patch('/api/pirates/:id', PirateController.updateExistingPirate);
    app.post('/api/pirates', PirateController.createNewPirate);
    app.delete('/api/pirates/:id', PirateController.deleteAnExistingPirate);
}
