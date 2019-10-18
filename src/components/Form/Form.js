import React, { Component } from 'react'
import axios from 'axios';

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            image_url: "",
            name: "",
            price: 0
        }
    }

    userImageChange = e => {
        this.setState({image_url: e.target.value});
    };

    userProductNameChange = e => {
        this.setState({name: e.target.value});
    };

    userPriceChange = e => {
        this.setState({price: e.target.value});
    };

    resetInputs = e => {
        e.preventDefault();
        this.setState({
            image_url: "",
            name: "",
            price: 0
        });
        
        console.log(this.resetInputs);
    };

    addNewProduct = () => {
        const {name, price, image_url} = this.state;
        axios.post('/api/product', {name, price, image_url}).then( response => {
            this.setState({ name: response.data });
            this.setState({ price: response.data });
            this.setState({ image_url: response.data });
            this.props.getInventory();
            this.resetInputs();
    
            
          }).catch(error => { console.log(error);});
    }

    updateProduct = () => {
        const {name, price, image_url} = this.state;
        axios.put('/api/product/:id', {name, price, image_url}).then(response => {
            this.props.getInventory();
        })
    }
      
    

    

    render() {
        return (
            <div>
                <input placeholder="Image URL" onChange={this.userImageChange} />
                <input placeholder="Product Name" onChange={this.userProductNameChange} />
                <input placeholder="Product Price" onChange={this.userPriceChange} />
                <input type="button" name="addNewProduct" value= "Add" onClick={this.addNewProduct}/>
                <input type="button" name="resetInputs" value="Cancel" onClick={this.resetInputs} />
                <input type="button" name="updateProduct" value="Save Changes" onClick={this.updateProduct} />
                <input type="button" name="deleteProduct" value="Delete Product" onClick={this.deleteProduct} />
                
            </div>
        )
    }
}
