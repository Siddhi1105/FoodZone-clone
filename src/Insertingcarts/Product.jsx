import React, {Component} from 'react';
import '../App.css';

import JSON from '../breakfast.json';
import ProductLists from './ProductLists';



class Product extends Component {
    constructor(){
        super();
        this.state = {
            title: 'Break-Fast',
            products : JSON,
            

        };
    }

    render(){
        return(
            <div>
               <div>
              <h2>{this.state.title}</h2>
                <ProductLists prodList={this.state.products}/> 
                </div> 
           
                
              

            </div>
        )
    }
}

export default Product;