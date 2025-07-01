import React, {Component} from 'react';
import '../App.css';
import JSON3 from '../italian.json';
import ProductLists3 from './ProductLists3';

class Product3 extends Component{
    constructor()
    {
    super();
    this.state={
        title3:"Italian",
        products3: JSON3
    }
   }
   render()
   {
    return(
        <div>
            <h2>{this.state.title3}</h2>
           <ProductLists3 prodList3={this.state.products3}/>
        </div>
    )
   }
}

export default Product3;