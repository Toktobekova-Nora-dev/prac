import React, { useEffect } from 'react';
import { useProductContext } from '../context/ProductContext';


const Menu = () => {
    const {plon,readProduct,DeletProduct} = useProductContext()
    
    
    useEffect(()=>{
        readProduct()  
    },[])
    
    return (
        <div> 
           {plon.map((el)=>(
            <>
            <h1>{el.name}</h1>
            <button onClick={()=> DeletProduct(el._id)}>delete</button>
            </>
            ))
           }
        </div>
    );
};

export default Menu;