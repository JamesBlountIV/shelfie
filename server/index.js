require("dotenv").config();
const express = require("express");
const massive = require("massive");
const {CONNECTION_STRING} = process.env;

const app = express();

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
}).catch(err => console.log(err));

app.use(express.json());


const port = 1230;
app.listen(port, () => {
    console.log(`Live on server port: ${port}`);
})