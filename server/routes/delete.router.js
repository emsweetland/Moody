const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.delete('/:id', async(req, res) => {

  const id = req.params.id
  console.log('in delete response router', id)

  const connection = await pool.connect();
  try {
    await connection.query('BEGIN');
    const sqlResponse = `
  DELETE FROM "response" WHERE "response".reflection_id = $1;
  `;
    const result = await connection.query(sqlResponse, [id]);
    const sqlReflection = `
  DELETE FROM "reflection" WHERE "reflection".id = $1;
  `;
    await connection.query(sqlReflection, [id]);
    await connection.query('COMMIT');
    res.sendStatus(200)

      }catch(error) {
        await connection.query('ROLLBACK');
        console.error(' error in delete router', error);
        res.sendStatus(500);
      } finally {
        connection.release()
      }
  })




module.exports = router;