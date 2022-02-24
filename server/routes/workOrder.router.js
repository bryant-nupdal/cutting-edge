const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
 router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
  console.log('GET request to: /api/workOrder');
  pool.query('SELECT * FROM "work_order";').then((result) => {
      res.send(result.rows);
  }).catch((error) => {
      console.log('Error with the GET request to /api/workOrder: ', error);
      res.sendStatus(500);
  });
});

//PUT request for timecard clock out
router.put('/completed/:ID', rejectUnauthenticated, async (req, res) => {
  // PUT route code here
  console.log('PUT request to /api/workOrder/completed/ID');
  try{
    let ID = req.params.ID;
    const queryText = `UPDATE "work_order" SET "is_complete" = true, "timestamp" = NOW() WHERE "id"=$1 ;`;
    await pool.query(queryText, [ID]);
    res.sendStatus(202);
  } catch {
    console.log('There was an error in the PUT to api/workOrder for updating the completion time: ', error);
    res.sendStatus(500);
  }

});

module.exports = router;
