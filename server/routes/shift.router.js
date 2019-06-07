const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

let shiftArray = [];

router.get('/', (req, res) => {
    console.log('get route hit');

    const queryText = 'SELECT * FROM "shifts" ORDER BY "date";'
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows)
           
            shiftArray = result.rows;
            console.log('result.rows = shiftArray', shiftArray);
        })
        .catch((err) => {
            console.log('Error completing SELECT shift GET query', err);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    console.log('router.post req.body', req.body);
    const newShift = req.body;
    // for (let i = 0; i < shiftArray.length; i++) {
    //     if (new Date(shiftArray[i].date).getMonth() + 1/
    //         new Date(shiftArray[i].date).getDate()/
    //         new Date(shiftArray[i].date).getFullYear() !=== newShift.date){
    //             
        
                
    //      }
    // }
    const queryText = `INSERT INTO "shifts" ("date", "start", "end") 
	VALUES ($1, $2, $3)`;
    const queryValues = [
        newShift.date,
        newShift.start,
        newShift.end,
    ];
    pool.query(queryText, queryValues)
        .then(() => {
            res.sendStatus(201)
        }).catch((error) => {
            console.log('Error completing POST query', error);
            res.sendStatus(500);
        });
});

module.exports = router;