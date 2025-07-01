import React,{Component} from 'react';  
import '../App.css';

const ProductLists= (prodList) => {
    const renderList = ({prodList}) => {
        if(prodList){
            return prodList.map((data) =>
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
                {renderList(prodList)}
                </div>
                </div>
    )

}

export default ProductLists;