const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

 router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('GET request to: /api/route');
    pool.query(`SELECT "route"."route_number", "property"."property_name", "property"."street", "property"."city", "property"."state", "property"."zip", "property"."address_type" FROM "route" 
    JOIN "property" ON "property"."route_id" = "route"."id";`).then((result) => {
      res.send(result.rows);
    }).catch((error) => {
      console.log('Error with the GET request to /api/route ', error);
      res.sendStatus(500);
    });
  });

  router.get('/:routeID', rejectUnauthenticated, (req, res) => {
    console.log('GET request to: /api/routeID');
    let routeID = req.params.routeID; 
    let queryText = `SELECT "route"."route_number", 
    "property"."property_name", "property"."street", "property"."city", "property"."state", "property"."zip", "property"."address_type" FROM "route" 
    JOIN "property" ON "property"."route_id" = "route"."id" WHERE "route"."route_number"=$1;`;
    
    pool.query(queryText, [routeID]).then((response) => {
      res.send(response.rows);
    }).catch((error) => {
      console.log('Error with the GET request to /api/route/routeID ', error);
      res.sendStatus(500);
    });
  });
  
  module.exports = router;