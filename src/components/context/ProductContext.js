import React, { createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';


const ProductContext = createContext();
export const useProductContext = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const [plon, setPlon] = useState([])
  const API = "https://api.elchocrud.pro/api/v1/18bbfc78608ce3f2d5005758062f591c/plon";


  async function addProduct(newProduct) {
    await axios.post(API, newProduct);
  }


  async function readProduct(){
    let   { data }  = await axios(API)
    setPlon(data)
  }

  async function DeletProduct(id) {
     await axios.delete(`${API}/${id}`)
     readProduct()
  }

  
  const values = {
    addProduct,
    plon,
    readProduct,
    DeletProduct,
  };

  return (
    <ProductContext.Provider value={values}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
