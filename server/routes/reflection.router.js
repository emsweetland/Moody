const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');




router.get('/', rejectUnauthenticated, (req, res) => {
  //current user logged in
  console.log('req.user', req.user);

  //using req.user.id to target that user by their id in the DB
  const user = Number(req.user.id)
  pool
  
  // $1 is req.user.id, this is passed through [user] after the query statement
  .query(`SELECT * FROM reflection WHERE "user_id" = $1 ORDER BY "when"`, [user])
  
  // receive the SELECTed rows from the DB
  .then( result => {
    res.send(result.rows);
    console.log(result.rows);
  })

  // clearly you've got something going on here
  .catch(err => {
    console.log('ERROR: get reflections', err);
    res.sendStatus(500)
  })
});




/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;