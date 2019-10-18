import React from 'react'

function Product (props) {
    
    
        return (
            <div>
                <h2>name:{props.name}</h2>
                <h2>price:{props.price}</h2>
                <h2>image:{props.image_url}</h2>
                <button onClick={props.deleteProduct}>Delete</button>
            </div>
        )
    
}
export default Product;





// import React, { Component } from 'react'

// export default class Product extends Component {
//     constructor() {
//         super();
//         this.state = {

//         }
//     }
//     render() {
//         return (
//             <div>
//                 <h2>name:{this.props.name}</h2>
//                 <h2>price:{this.props.price}</h2>
//                 <h2>image:{this.props.image_url}</h2>
//             </div>
//         )
//     }
// }
