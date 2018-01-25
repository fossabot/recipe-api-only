'use strict';

const path    = require('path');
const async   = require('async');
const debug   = require('debug');
const Raven   = require('raven');

Raven.config('https://c1e3b55e6a1a4723b9cae2eb9ce56f2e:57e853a74f0e4db98e69a9cf034edcdd@sentry.io/265540').install();

let server     = require(path.resolve(__dirname, '../../server/server'));
let database   = server.datasources.recipeDS;

let helper     = require(path.resolve(__dirname, '../helper'));

// include middleware
// @todo make it auto-icludable from folder
// let Allergy    = require(path.resolve(__dirname, 'allergy'));
// let Course     = require(path.resolve(__dirname, 'courses'));
// let Cuisine    = require(path.resolve(__dirname, 'cuisines'));
// let Diet       = require(path.resolve(__dirname, 'diets'));
// let Holiday    = require(path.resolve(__dirname, 'holidays'));
// let Nutritions = require(path.resolve(__dirname, 'nutritions'));

// we including a file from other import directory.
// @TODO this is not cool. maybe it's better to have a short version of recipe file just for attaching things.
// let Recipe    = require(path.resolve(__dirname, 'recipes'));
let Recipe    = require(path.resolve(__dirname, '../recipes/recipes'));
// let Recipes    = require(path.resolve(__dirname, '../recipes/recipes'));


let options = [
	models: server.models,
	database: database
	Raven: Raven
]

async.parallel({

		recipes    : async.apply( helper.create2( options, Recipe ) ),

	}, function(err, results){
		if( err ) {
			Raven.captureException(err);
			throw err;

		}

		// if( !results || !results.allergies || !results.courses
		// 		|| !results.cuisines || !results.diets || !results.holidays || !results.nutritions) {
		// 			Raven.captureException("not imported well");
		// }


		// @TODO make this call less shitty
		// Recipe.relate( options, results );


		// console.log(err);
		// console.log(results);
//
		// console.log(results.allergies);
		// console.log(results.courses);
    // console.log(results.cuisines);
    // console.log(results.diets);
    // console.log(results.holidays);
    // console.log(results.nutritions);





		console.log('import finished');
    //
		// process.on('exit', function(code) {
    // 	return console.log(`About to exit with code ${code}`);
		// });
		// process.exit(22);

	}

);
