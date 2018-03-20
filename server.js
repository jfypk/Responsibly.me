'use strict'

//import dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Result = require('./model/Results');

//create instances
var app = express();
var router = express.Router();

//set up our port
var port = process.env.API_PORT || 3001;

//db config (MOVE TO SEPARATE serverConfig FILE)
mongoose.connect('mongodb://jpark:jfeark3@ds117489.mlab.com:17489/inform-dev');

//configure API to use bodyParser and look for JSON data in request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//prevent errors from CORS
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    
    //remove cacheing (need this?)
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'API Initialized!'});
});

//Use router config when we call /api
app.use('/api', router);

//adding the /comments route to our /api router
router.route('/results')

    //retrieve all results from the database
    .get(function(req, res) {
        //looks at our Comment Schema
        Result.find(function(err, results) {
            if (err) {
                res.send(err);
            }  
            //responds with a json object of our database comments.
            res.json(results)
        });
    })
    
    //post new results to the database
    .post(function(req, res) {
        var result = new Result();
        //body parser lets us use the req.body
        result.id = req.body.id;
        result.name = req.body.name;
        result.industry = req.body.industry;
        result.rating = req.body.rating;
        result.numLists = req.body.numLists;
        result.save(function(err) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Result successfully added!' });
        });
    })

    //update our results based on ID passed to the route
    .put(function(req, res) {
        Result.findById(req.params.result_id, function(err, result) {
            if(err) {
                res.send(err);
            }

            (req.body.name) ? result.name = req.body.name : null;
            (req.body.industry) ? result.industry = req.body.industry : null;
            (req.body.rating) ? result.rating = req.body.rating : null;
            (req.body.numLists) ? result.numLists = req.body.numLists : null;

            //save Results
            result.save(function(err) {
                if(err) {
                    res.send(err);
                }
                //this might need an else? 
                res.json({ message: 'Result has been updated'});
            });
        });
    })

    //delete method for removing a Result from the database
    .delete(function(req, res) {
        //select the result by ID, then remove it. 
        Result.remove({ _id: res.params.result_id}, function(err, result) {
            if(err) {
                res.send(err);
            }
            //this might need an else? 
            res.json({ message: 'Comment has been deleted' })
        })
    });

//start server and listen for requests
app.listen(port, function() {
    console.log('API IS LIVE ON ${port}');
});