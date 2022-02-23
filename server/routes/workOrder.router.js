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

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
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
