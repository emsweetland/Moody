const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



router.delete('/:id', (req, res) => {
    console.log('in delete response router', )
    const queryText = `DELETE FROM "reflection" WHERE "id"=$1;`;
    pool.query(queryText, [req.params.id])
    .then(result =>{
        res.sendStatus(204)
    }).catch( error => {
        console.error(' error in delete router', error)
        res.sendStatus(500)
    })
})

// router.post('/', (req, res) => {
//     const response = req.body
//     console.log(' IN POST RESPONSE ROUTER', req.body)
//     console.log('Testing req.body', req.body.responseToSend.mood)
//     const queryText = `INSERT INTO "reflection" ("user_id", "mood_id")
//                     VALUES ($1, $2 )`;
//     pool.query(queryText, [ req.user.id, req.body.responseToSend.mood])
//         .then(result => {
//             res.sendStatus(201);
//         })
//         .catch(error => {
//             console.log(`error sending mood`, error, req.body);
//             res.sendStatus(500);
//         })
// });

router.post('/', async (req, res) => {
    const mood = req.body.responseToSend.mood
    const user = req.user.id
    console.log(' IN POST RESPONSE ROUTER', mood, user)
    console.log(' TESTING REQ.BODY,', mood, user)
  
    const connection = await pool.connect();
    try {
      await connection.query('BEGIN');
      const sqlAddReflection = `
      INSERT INTO "reflection" ("user_id", "mood_id")
    VALUES ($1, $2)
    RETURNING "id";
      `;
      // save query result to variable
    const result = await connection.query(sqlAddReflection, [user, mood]);
    const reflectionID = result.rows[0].id;
    const sleep = req.body.responseToSend.sleep
    const food = req.body.responseToSend.food
    const water = req.body.responseToSend.water
    const friend = req.body.responseToSend.friend
    console.log(sleep, food, water, friend)
    const sqlAddResponse =`
    INSERT INTO "response" ("reflection_id", "prompt_id", "response")
    VALUES ($1, 1, $2), ($1, 2, $3), ($1, 3, $4), ($1, 4, $5);
    `;
    await connection.query(sqlAddResponse, [reflectionID, sleep, food, water, friend]);
    await connection.query('COMMIT');
    res.sendStatus(200)
    } catch (error) {
      await connection.query('ROLLBACK');
      console.log('error adding new reflection:', error);
      res.sendStatus(500);
    } finally {
      connection.release();
    }
  }
  )
  
  module.exports = router;







router.put('/:id', (req, res) => {
    const response = req.body
    // console.log('params.id:', params.id)
    console.log('req.body.responseToSend.mood', req.body.responseToSend.mood)
    console.log('in edit response router', req.body.responseToSend.mood)
    const queryText = `UPDATE "reflection" 
                    SET "mood_id" = $1 WHERE "id" = $2`;
    pool.query(queryText, [req.body.responseToSend.mood, req.body.responseToSend.payload])
    .then(results => {
        res.sendStatus(200)
    }).catch(error => {
        console.error(error)
        res.sendStatus(500)
    })
})




module.exports = router;