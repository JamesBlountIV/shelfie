import React, { Component } from 'react'

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

    render() {
        return (
            <div>
                <input placeholder="Image URL" onChange={this.userImageChange} />
                <input placeholder="Product Name" onChange={this.userProductNameChange} />
                <input placeholder="Product Price" onChange={this.userPriceChange} />
                <button>Add</button>
                <input type="button" name="resetInputs" value="Cancel" onClick={this.resetInputs} />
            </div>
        )
    }
}
