import React, {Component} from 'react';
import '../App.css';
import JSON1 from '../starters.json';
import ProductLists1 from './ProductLists1';

class Product1 extends Component{
    constructor()
    {
    super();
    this.state={
        title1: "Starters",
        products1: JSON1
    }
   }
   render()
   {
    return(
        <div>
            <h2>{this.state.title1}</h2>
           <ProductLists1 prodList1={this.state.products1}/>
        </div>
    )
   }
}

export default Product1;