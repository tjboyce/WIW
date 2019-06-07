
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pool = require ('./modules/pool');

// Route includes
const shiftRouter = require('./routes/shift.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes */
app.use('/shift', shiftRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});

module.exports = app; 
