
module.exports = {
    getAllProducts: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_inventory()
        .then(inventory => 
            res.status(200).json(inventory)
        ).catch(err => {
            res.status(500).json({errorMessage: "get could not retrieve data"});
            console.log(err);
        });
    },

    addNewProduct: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { name, description, price, image_url } = req.body;
        dbInstance.create_product([name, description, price, image_url])
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).json({errorMessage: "Add new product failed to post correctly"
        });
        console.log(err)  
        });
    },

    update: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const {params, query} = req;

        dbInstance.update_product([params.id, query.desc])
        .then(() => {
            res.sendStatus(200)
        }).catch(err => {
            res.status(500).send({errorMessage: "So he would always have a friend?"});
            console.log(err);
        });
    },

    deleteProduct: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {id} = req.params;

        dbInstance.delete_product(id)
        .then(() => {
            res.sendStatus(200)
        }).catch(err => {
            res.status(500).send({errorMessage: "delete could not process"});
            console.log(err);
        });
    }
    
}
// .then(product =>
//     res.status(200).send(product))
//     .catch(err => {
//         res.status(500).send({errorMessage:"new product failed to post"});
//         console.log(err);
//     })