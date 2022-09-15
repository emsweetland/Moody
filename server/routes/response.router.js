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

router.put('/', (req, res) => {
    const response = req.body
    console.log('in edit response router', req.body.responseToSend.mood)
    const queryText = `UPDATE "reflection" 
                    SET "mood_id" = $1 WHERE "reflection".id = $2
                    VALUES ($1, $2)`;
    pool.query(queryText, [params.id, req.body.responseToSend.mood])
})




module.exports = router;