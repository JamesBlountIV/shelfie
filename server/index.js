const express = require("express");

const app = express();

app.use(express.json());


const port = 1230;
app.listen(port, () => {
    console.log(`Live on server port: ${port}`);
})