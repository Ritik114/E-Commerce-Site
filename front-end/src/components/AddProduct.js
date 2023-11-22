import React, { useState } from 'react'

function AddProduct() {
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [category,setCategory]=useState('');
    const [company,setCompany]=useState('');
    const [error,setError]=useState(false);
    const addProduct=async()=>{

      console.warn(!name);
      if(!name || !price || !category  || !company)
      {
        setError(true);
        return false;
      }
      
        console.warn(name,price,category,company);
        const userId=JSON.parse(localStorage.getItem('user'))._id;
      let result=await fetch("http://localhost:5000/add-product",{
method:'post',
body:JSON.stringify({name,price,category,company,userId}),
headers:{
    'Content-Type':'application/json'
}

      });
      result=await result.json();
      console.warn(result);
    }

  return (
    <div className='product'>
        <h1>Add Product</h1>
        <input type='text' placeholder='Enter Prodct Name'  className='inputBox' value={name} onChange={(e)=>{setName(e.target.value)}}/>
{error && !name && <span className='invalid-input'>Enter Valid Name</span>}
        <input type='text' placeholder='Enter Prodct Price'  className='inputBox' value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
        {error && !price && <span className='invalid-input'>Enter Valid Price</span>}
        <input type='text' placeholder='Enter Prodct Category'  className='inputBox' value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
        {error && !category && <span className='invalid-input'>Enter Valid Category</span>}
        <input type='text' placeholder='Enter Prodct Company'  className='inputBox' value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
        {error && !company && <span className='invalid-input'>Enter Valid Company</span>}
<button onClick={addProduct} className='appButton'>Add Prodct</button>
    </div>
  )
}

export default AddProduct;
