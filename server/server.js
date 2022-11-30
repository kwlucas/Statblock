const express = require('express');
const path = require('path');
const db = require('./config/connection');

const app = express();
const PORT = proces.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



if (process.env.NODE_ENV === 'production') {
    app.use(express.statis(path.join(__dirname, '../client')));
}


app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => console.log(`Now listening on localhost:${PORT}`);)
})