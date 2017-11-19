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
          res.json( appointments);
          
        }
      })
    },

  delete: function(req, res, id){
    console.log('DESTROY');
    Appointment.remove({_id: id}, function(err, question){
      if(err) {
        console.log('sometihng went wrong');
        console.log(question.errors);
      }
      else {
        console.log("Deleted works");
      }
    })
  },

  create: function(req,res){
    console.log('adding new appointment to db');
    console.log(req.body);
    var check = true;
    Appointment.find({date: req.body.date}, function(err, appointments){
      if(err) {
        console.log('something went wrong');
        console.log(appointments.errors);
      }
      else {
        console.log(appointments.length)
        console.log(appointments);
        if(appointments.length >= 3){
          check = false;
          console.log('there are already 3 appoints that day');
        }
        else{
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
    })
     
  } 
}