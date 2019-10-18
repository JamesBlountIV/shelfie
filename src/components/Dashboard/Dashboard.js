import React, { Component } from 'react'
import Product from '../Product/Product';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    deleteProduct = (product_id) => {
        axios.delete(`/api/product/${product_id}` ).then( response => {
            this.props.getInventory();
          }).catch(error => { console.log(error);});
    }
 
    render() {
           const mapInventory =
            this.props.inventory.map( comment => (
              <Product {...this.props.inventory} {...this.props.getInventory} {...this.props.deleteProduct}/>
            ))
          
        return (
            <div>
                
                {mapInventory}
            </div>
        )
    }
}
