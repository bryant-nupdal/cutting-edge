const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
  console.log('GET request to: /api/timeCard');
  pool.query(`SELECT "task"."date", "clock_in", "clock_out",
	"route"."route_number",
	"property"."property_name", "property"."street", "property"."city", "property"."state", "property"."zip", "property"."address_type",
	"user"."first_name", "user"."last_name" FROM "time_card" 
JOIN "user" ON "user"."id" = "time_card"."user_id"
JOIN "task" ON "task"."id" = "time_card"."task_id"
JOIN "work_order" ON "work_order"."id" = "task"."work_order_id"
JOIN "property" ON "property"."id" = "task"."property_id"
JOIN "route" ON "route"."id" = "property"."route_id";`).then((result) => {
  res.send(result.rows);
}).catch((error) => {
  console.log('Error trying to preform GET to /api/timeCard: ', error);
})
});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, async (req, res) => {
  // POST route code here
  try {
    console.log(req.body.work_order_id);
    
    const taskResponse = await pool.query(`SELECT * FROM "task" WHERE "work_order_id" = ${req.body.work_order_id};`);

    for (let task of taskResponse.rows ) {
      // console.log(task);
      // console.log(req.user);
      const queryText = `INSERT INTO "time_card" ("task_id", "user_id") VALUES ($1, $2);`;
      await pool.query(queryText, [task.work_order_id, req.user.id]);
    }
    res.sendStatus(201);

  } catch (error) {
    console.log('There was an error in the POST to api/timeCard: ', error);
    res.sendStatus(500);
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