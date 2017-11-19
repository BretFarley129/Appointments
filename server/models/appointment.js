var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AppointmentSchema = new mongoose.Schema({
    date: {type: String, required: true},
    time: {type: String, required: true},
    complaint: {type: String, required: true, minlength:10},
    patient: {type: String, required: true, minlength:3},
}, {timestamps: true})

mongoose.model('Appointment', AppointmentSchema); 
var Appointment = mongoose.model('Appointment');