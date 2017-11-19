var appointments = require('../controllers/appointment.js');

module.exports = function(app){
    console.log('in routes');
    app.get('/getAll', (req, res, next) =>{
        console.log('fetching appointments');
        appointments.showAll(req, res);
    });

    app.post('/newApp', (req, res, next) =>{
        console.log('adding thing');
        appointments.create(req, res);
    })
} 