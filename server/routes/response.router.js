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

router.post('/', (req, res) => {
    const response = req.body
    console.log(' IN POST RESPONSE ROUTER', req.body)
    console.log('Testing req.body', req.body.responseToSend.mood)
    const queryText = `INSERT INTO "reflection" ("user_id", "mood_id")
                    VALUES ($1, $2 )`;
    pool.query(queryText, [ req.user.id, req.body.responseToSend.mood])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log(`error sending mood`, error, req.body);
            res.sendStatus(500);
        })
});

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