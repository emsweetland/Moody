const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


router.get('/:id', (req, res) => {
  console.log('in router GET')
  console.log(req.params)
  const id = req.params.id
  console.log('id is:', id)
  const queryName = `SELECT "user".username, "reflection".id AS "reflection.id", "reflection".when, "mood".moodname, "prompt".text, "response".response FROM "user"
  JOIN "reflection" ON "user".id = "reflection".user_id
  JOIN "mood" ON "mood".id = "reflection".mood_id
  JOIN "response" ON "response".reflection_id = "reflection".id
  JOIN "prompt" ON "response".prompt_id = "prompt".id
  WHERE "reflection".id = $1
  GROUP BY "user".username, "reflection".id, "mood".moodname, "prompt".text, "response".response;`;
  pool.query(queryName, [id])
    .then( result => {
      res.send(result.rows);
      //console.log(result.rows);
    })
    .catch(err => {
      console.log('ERROR: get this reflection', err);
      res.sendStatus(500)
    })
})


//get ALL reflections
router.get('/', rejectUnauthenticated, (req, res) => {
  //current user logged in
  //console.log('we are in req.user', req.user);

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