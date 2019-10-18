import React, { Component } from 'react'
import Product from '../Product/Product';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }



    render() {
        let mappedProducts = this.props.inventory.map((val) => {
            return (
                <Product val={val} updateProduct={this.state.updateProduct}/>
            )
        })    
        return (
            <div>
                <h1>Products</h1>
                {mappedProducts}
            </div>
        )
    }
}
