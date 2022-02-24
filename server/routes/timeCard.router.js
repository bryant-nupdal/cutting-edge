const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:orderID', rejectUnauthenticated, (req, res) => {
  // GET route code here
  let orderID = req.params.orderID;
  console.log('GET request to: /api/timeCard');
  console.log('the orderID is: ', orderID);

  let queryText = `SELECT "task"."date", "clock_in", "clock_out",
    "route"."route_number",
    "property"."property_name", "property"."street", "property"."city", "property"."state", "property"."zip", "property"."address_type",
    "user"."first_name", "user"."last_name" FROM "time_card" 
  JOIN "user" ON "user"."id" = "time_card"."user_id"
  JOIN "task" ON "task"."id" = "time_card"."task_id"
  JOIN "work_order" ON "work_order"."id" = "task"."work_order_id"
  JOIN "property" ON "property"."id" = "task"."property_id"
  JOIN "route" ON "route"."id" = "property"."route_id" WHERE "task"."work_order_id" = $1;`;

pool.query(queryText, [orderID]).then((response) => {
    res.send(response.rows);
  }).catch((error) => {
    console.log('Error trying to preform GET to /api/timeCard: ', error);
    res.sendStatus(500);
  })
});

router.post('/', rejectUnauthenticated, async (req, res) => {
  try {
    //TODO fix injextion attack
    const taskResponse = await pool.query(`SELECT * FROM "task" WHERE "work_order_id" = ${req.body.work_order_id};`);
    console.log('this is the req.body: ', req.body);
    for (let task of taskResponse.rows) {
      console.log(task.work_order_id);
      console.log("the user is number",req.user.id);
      const queryText = `INSERT INTO "time_card" ("task_id", "user_id") VALUES ($1, $2);`;
      await pool.query(queryText, [task.id, req.user.id]);
    }
    res.sendStatus(201);

  } catch (error) {
    console.log('There was an error in the POST to api/timeCard: ', error);
    res.sendStatus(500);
  }
});

//PUT request for timecard clock in

 router.put('/clockIn/:ID', rejectUnauthenticated, async (req, res) => {
  // PUT route code here
  try{
    let ID = req.params.ID;
    const queryText = `UPDATE "time_card" SET "clock_in" = NOW() WHERE "id"=$1 ;`;
    await pool.query(queryText, [ID]);
    res.sendStatus(202);
  } catch {
    console.log('There was an error in the PUT to api/timeCard for updating the clock in time: ', error);
    res.sendStatus(500);
  }

});

//PUT request for timecard clock out

router.put('/clockOut/:ID', rejectUnauthenticated, async (req, res) => {
  // PUT route code here
  try{
    let ID = req.params.ID;
    const queryText = `UPDATE "time_card" SET "clock_out" = NOW() WHERE "id"=$1 ;`;
    await pool.query(queryText, [ID]);
    res.sendStatus(202);
  } catch {
    console.log('There was an error in the PUT to api/timeCard for updating the clock out time: ', error);
    res.sendStatus(500);
  }

});


/**
 * DELETE route template
 */
router.delete('/', (req, res) => {
  // DELETE route code here
});

module.exports = router;