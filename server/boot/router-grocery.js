'use strict';

// middleware
var express = require('express');
var router  = express.Router();

// controllers
var controller = require('../controllers/grocery-controller');


/*  "/api/grocery"
 *    GET: finds all recipe
 *    POST: creates a new recipe @todo finish this
 */
router.get('/grocery/:id', function(req, res){
	res.send('This is not implemented now');
});
	

'/grocerylist/department'

POST [/grocerylist/department]    Departmentalize a list of strings -- used for ad-hoc grocery list item addition
DELETE [/grocerylist]             Delete all the items on a grocery list; faster operation than a sync with deleted items.
GET [/grocerylist]                Get the user's grocery list. User is determined by Basic Authentication.
POST [/grocerylist/recipe]        Add a Recipe to the grocery list. In the request data, pass in recipeId, scale (scale=1.0 says to keep the recipe the same size as originally posted), markAsPending (true/false) to indicate that the lines in the recipe should be marked in a "pending" (unconfirmed by user) state.
POST [/grocerylist/sync]          Synchronize the grocery list. Call this with a POST to /grocerylist/sync
POST [/grocerylist/item]          Add a single line item to the grocery list
DELETE [/grocerylist/item/{guid}] [/grocerylist/item/{guid}] DELETE will delete this item assuming you own it.
PUT [/grocerylist/item/{guid}]    Update a grocery item by GUID

module.exports = router;