import React, { useState } from 'react';
import { useProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';

const Admin = () => {
    const [name1,setValue] = useState("")
    const { addProduct,readProduct } = useProductContext()

    function handlyPage() {
        let newProduct ={
            name: name1
        }
        addProduct(newProduct)
        readProduct()
    }
    
    return (
        <div>
            <input  onChange={(e)=>setValue(e.target.value)} type="text" placeholder='name'/>
            <Link to="/">
            <button onClick={handlyPage}>Add</button>
            </Link>
        </div>
    );
};
export default Admin;