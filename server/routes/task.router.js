const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('GET request to: /api/task');
  pool.query('SELECT * FROM "task";').then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error with the GET request to /api/task: ', error);
    res.sendStatus(500);
  });
});

/*
// Get all tasks for a given work order
// All thats is needed is:
  - Property information (name, address, etc)
  - Task ID (for timesheet info)
*/
router.get('/workOrderID/:work_order_id', rejectUnauthenticated, (req, res) => {
  let work_order_id = req.params.work_order_id
  console.log('GET request to: /api/task/workOrderID/:work_order_id');
  const queryText = `SELECT "task"."id", "date", "property_id", "work_order_id", to_json("property") AS "property" FROM "task"
  JOIN "property" ON "property"."id" = "task"."property_id"
  WHERE "task"."work_order_id" = $1 ORDER BY "property"."id";`
  pool.query(queryText, [work_order_id]).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error with the GET request to /api/task: ', error);
    res.sendStatus(500);
  });
});

router.post('/', rejectUnauthenticated, async (req, res) => {
  console.log('POST request to: /api/task');
  try {
    // begin
    // await pool.query('BEGIN');
    // pool.query(queryText).then((response) => {
    //   res.send(response.rows);
    //   console.log(response.rows[0].id);
    // }).catch((error) => {
    //   console.log("there was an error in POST to work_order: ", error);
    // });
    const response = await pool.query(`INSERT INTO "work_order" ("is_complete") VALUES (false) RETURNING *;`);

    // select query for all properties
    const propResponse = await pool.query(`SELECT * FROM "property";`);

    // for loop over properties
    for (let property of propResponse.rows) {
      const queryText = `INSERT INTO "task" ("property_id", "work_order_id") VALUES ($1, $2);`;
      await pool.query(queryText, [property.id, response.rows[0].id]);
    }
      // commit
      // await pool.query('COMMIT');
      res.sendStatus(201);
  } catch (error) {
    // transaction rollback
    await pool.query('ROLLBACK')
    console.log("there was an error in POST to work_order: ", error);
    res.sendStatus(500);
  } finally {
    // pool.release();
  }
});

router.delete('/deleteTask/:ID', rejectUnauthenticated, async (req, res) => {
  // DELETE route code here
  try{
    console.log('DELETE request to api/task/deleteTask/ID');
    let ID = req.params.ID;
    const queryText = 'DELETE FROM "task" WHERE "task"."id" = $1;';
    await pool.query(queryText, [ID]);
    res.sendStatus(204);
  } catch {
    console.log('Error with the GET request to /api/task: ', error);
    res.sendStatus(500);
  }
});

router.delete('/deleteTask', rejectUnauthenticated, async (req, res) => {
  // DELETE route code here
  try{
    console.log('DELETE request to api/task/deleteTask');
    let ID = req.params.ID;
    const queryText = 'DELETE FROM "task";';
    await pool.query(queryText);
    res.sendStatus(204);
  } catch {
    console.log('Error with the GET request to /api/task: ', error);
    res.sendStatus(500);
  }
});
module.exports = router;
