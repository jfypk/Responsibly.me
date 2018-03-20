'use strict';

//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create new instance of mongoose.schema. 
var ResultsSchema = new Schema({
    id: Number,
    name: String,
    industry: String,
    rating: String,
    numLists: Number
});

module.exports = mongoose.model('Result', ResultsSchema);