import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function UpdateProduct() {
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [category,setCategory]=useState('');
    const [company,setCompany]=useState('');
    const params=useParams();
    const navigate=useNavigate();

    useEffect(()=>{
      console.warn(params)
getProductDetails();
    },[]);
    const getProductDetails=async()=>{
      console.warn(params);
      let result=await fetch(`http://localhost:5000/product/${params.id}`);
      result=await result.json();
      setName(result.name);
      setPrice(result.price);
      setCategory(result.category);
      setCompany(result.company);
    }

    const updateProduct=async()=>{
console.warn(name,price,category,company);
let result=fetch(`http://localhost:5000/product/${params.id}`,{
  method:'Put',
  body:JSON.stringify({name,price,category,company}),
  headers:{
    'Content-Type':"application/json"
  }
});
result=await result.json();
console.warn(result);
navigate('/');
    }

  return (
    <div className='product'>
        <h1>UPDATE Product</h1>
        <input type='text' placeholder='Enter Prodct Name'  className='inputBox' value={name} onChange={(e)=>{setName(e.target.value)}}/>

        <input type='text' placeholder='Enter Prodct Price'  className='inputBox' value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
       
        <input type='text' placeholder='Enter Prodct Category'  className='inputBox' value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
        
        <input type='text' placeholder='Enter Prodct Company'  className='inputBox' value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
       
<button onClick={updateProduct} className='appButton'>Update Prodct</button>
    </div>
  )
}

export default UpdateProduct;