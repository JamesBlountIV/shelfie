require("dotenv").config();
const express = require("express");
const massive = require("massive");
const {CONNECTION_STRING} = process.env;
const inventory = require("./controller");

const app = express();

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
}).catch(err => console.log(err));

app.use(express.json());

app.get('/api/inventory', inventory.getAllProducts);
app.post('/api/product', inventory.addNewProduct);
app.delete('/api/product/:id', inventory.deleteProduct)
app.put('/api/product/:id', inventory.updateProduct)


const port = 1230;
app.listen(port, () => {
    console.log(`Live on server port: ${port}`);
})