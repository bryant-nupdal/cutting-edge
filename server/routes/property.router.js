const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();


//GET route for properties
router.get('/', rejectUnauthenticated, (req, res) => {
    // GET route code here
    console.log('GET request to: /api/property');
    pool.query('SELECT * FROM "property";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error with the GET request to /api/property ', error);
        res.sendStatus(500);
    });
});

//POST route for properties

module.exports = router;