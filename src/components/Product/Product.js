import React, { Component } from 'react'

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h2>name:{this.props.mappedProducts}</h2>
                <h2>price:</h2>
                <h2>image:</h2>
            </div>
        )
    }
}
