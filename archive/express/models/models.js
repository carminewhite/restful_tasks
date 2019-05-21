////MODULARIZATION WITH MODELS:
    ////the models file will contain all of the mongoose connection and schema definitions

    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/restful_tasks');

    
    var TaskSchema = new mongoose.Schema({
        title: { type: String },
        description: { type: String, default: ""},
        completed: { type: Boolean, default: false },
    }, {timestamps: true});
    

    ////Export Post so Controllers has access to it
    module.exports = mongoose.model('Task', TaskSchema)
    