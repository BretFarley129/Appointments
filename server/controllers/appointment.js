var mongoose = require('mongoose');
var Appointment = mongoose.model('Appointment');


module.exports = {
    showAll: function(req, res){
        Appointment.find({}, function(err, appointments){
           if(err) {
            console.log('something went wrong');
            console.log(appointments.errors);
          }
          else {
            console.log("show works")
            console.log(appointments);
            res.json( appointments);
            
          }
        })
    },

    create: function(req,res){
      console.log('adding new appointment to db');
      console.log(req.body);
        var appointment = new Appointment(req.body);
        appointment.save(function(err) {
          if(err) {
            console.log('something went wrong');
            let errors = [];
            for (var key in err.errors){
              errors.push(err.errors[key].message)
            }
            res.json({message: "Error", error:errors})
          } 
          else {
            console.log('successfully added a Appointment!');
            res.json({message: "Success", appointment:appointment});
          }
        })
    }
}