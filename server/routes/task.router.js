const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
  console.log('GET request to: /api/task');
  pool.query('SELECT * FROM "task";').then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error with the GET request to /api/task: ', error);
    res.sendStatus(500);
  });
});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, async (req, res) => {
  //insert work order
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
    console.log(response.rows[0].id);

    // select query for all properties
    const propResponse = await pool.query(`SELECT * FROM "property";`);

    // for loop over properties
    for (let property of propResponse.rows) {
      console.log(property.id);
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

/**
 * PUT route template
 */
router.put('/', (req, res) => {
  // PUT route code here
});

/**
 * DELETE route template
 */
router.delete('/', (req, res) => {
  // DELETE route code here
});

module.exports = router;