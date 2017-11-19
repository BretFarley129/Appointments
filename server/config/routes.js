var appointments = require('../controllers/appointment.js');

module.exports = function(app){
    console.log('in routes');
    app.get('/getAll', (req, res, next) =>{
        console.log('fetching appointments');
        appointments.showAll(req, res);
    });
    app.put('/cancel/:id', (req, res, next) =>{
        console.log('deleteing appointment');
        appointments.delete(req, res, req.params.id);
    });
    app.post('/addA/:id', (req, res, next) =>{
        console.log('adding question');
        Question.findOne({_id: req.params.id}, function(err, question){
            answers.create(req, res, question);

        })
    });

    app.post('/newApp', (req, res, next) =>{
        console.log('adding thing');
        appointments.create(req, res);
    })

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
} 