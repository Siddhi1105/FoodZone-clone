import React, {Component} from 'react';
import '../App.css';
import JSON2 from '../maincourse.json';
import ProductLists2 from './ProductLists2';

class Product2 extends Component{
    constructor()
    {
    super();
    this.state={
        title2: "Main-Course",
        products2: JSON2
    }
   }
   render()
   {
    return(
        <div>
            <h2>{this.state.title2}</h2>
           <ProductLists2 prodList2={this.state.products2}/>
        </div>
    )
   }
}

export default Product2;