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

//adding the /results route to our /api router
router.route('/results')
    //retrieve all results from the database
    .get(function(req, res) {
        console.log("getting data");
        //looks at our Results Schema
        Result.find(function(err, results) { //Do I findOne() here when I find a URL?
            if (err) {
                console.log(err);
                res.send(err);
            }  
            //responds with a json object of our database results.
            res.json(results)
        });
    })
    
    //post new results to the database
    .post(function(req, res) {
        console.log("posting");
        let result = new Result();
        //body parser lets us use the req.body
        result._id = req.body._id;
        result.brand = req.body.brand;
        result.parent = req.body.parent;
        result.cei_rating = req.body.cei_rating;
        result.ethical_company_nominee = req.body.ethical_company_nominee;
        result.women_on_board = req.body.women_on_board;
        result.best_workplaces_women = req.body.best_workplaces_women;
        result.best_workplaces_diversity = req.body.best_workplaces_diversity;
        result.esg_score = req.body.esg_score;
        result.gc_score = req.body.gc_score;
        result.corporate_knights_score = req.body.corporate_knights_score;
        result.greener_electronics = req.body.greener_electronics;
        result.clean_energy_index = req.body.clean_energy_index;
        result.natural_gas_intensity = req.body.natural_gas_intensity;
        result.coal_intensity = req.body.coal_intensity;
        result.nuclear_intensity = req.body.nuclear_intensity;
        result.energy_transparency = req.body.energy_transparency;
        result.renewable_energy_commitment = req.body.renewable_energy_commitment;
        result.energy_efficiency = req.body.energy_efficiency;
        result.renewable_procurement = req.body.renewable_procurement;
        result.advocacy = req.body.advocacy;
        result.detox_2020_plan = req.body.detox_2020_plan;
        result.pfc_elimination = req.body.pfc_elimination;
        result.transparency = req.body.transparency;
        result.count = req.body.count;

        result.save(function(err) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Result successfully added!' });
        });
    })

    //update our results based on ID passed to the route
    .put(function(req, res) {
        console.log("putting data");
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
        console.log("deleting data");
        //select the result by ID, then remove it. 
        Result.remove({ _id: res.params.result_id}, function(err, result) {
            if(err) {
                res.send(err);
            }
            //this might need an else? 
            res.json({ message: 'Data has been deleted' })
        })
    });

//start server and listen for requests
app.listen(port, function() {
    console.log('API IS LIVE ON ${port}');
});