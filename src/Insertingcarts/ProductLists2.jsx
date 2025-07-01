import React,{Component} from 'react';  
import '../App.css';

const ProductLists2= (prodList2) => {
    const renderList2 = ({prodList2}) => {
        if(prodList2){
            return prodList2.map((data) =>
            {
                return(
                    <div key={data.id} className="card col-md-3">
                        <div className="cart-section">
                            <div className="cart-item">
                                <img className="cart-item" src={data.img} alt={data.name}/>

                            </div>
                            <hr/>
                            <span className="topTemptitleard-">{data.name}</span>                        
                        </div>
                        <div className='card-body'>
                            <span className="card-title"> {data.type}</span>
                            <h4 class ="card-title">{data.description}</h4> 
                            <div className='card=text'>
                                <p className="day">Rs. {data.price}</p>
                                <button className="cart-btn">Add to cart</button>
                                
                            </div>
                                
                                
                            

                    </div>
                    </div>
                )
            })
        }
            
           
    }
    return(
        <div className="container">

            <div className="row">
                {renderList2(prodList2)}
                </div>
                </div>
    )

}

export default ProductLists2;