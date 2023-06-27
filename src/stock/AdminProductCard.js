import React, { useEffect, useState } from "react";
// import { Button, Label, Modal, TextInput, Textarea } from "flowbite-react";
import { deleteProduct, updateProduct, updateerodeProduct } from "./api";
import {  useHistory } from "react-router-dom";
import './AdminProductCard.css'
const AdminProductCard = ({ product }) => {
  
  const navigate = useHistory();
  const { image, name, description, price,stocks } = product;
  const [uname,setUname] = useState(name);
  const [uprice,setUprice] = useState(price);
  const [udesc,setUdesc] = useState(description);
  const [stock,setStock] = useState(stocks);
   
  const  Uname = product.name  ;
  const  Udescription  =  product.description ;
  const  Uprice  =  product.price ;
  const pid = product._id ;

  const deleteOneProduct = () => {
    const body = {pid};
    deleteProduct(body);
    window.location.reload();
  };



  const updateOneProduct =()=>{
    const body = {pid,uname,uprice,udesc,image,stock,_id:product._id}
    console.log(body)
    updateerodeProduct(body);
    window.location.reload();
  }
  // const [modelShow, updateModelShow] = useState(false);

  return (
    <><center>
    <div className="whole">
  <div class="carde">
 
  <div class="containerr">
  <img src={`${image}`} alt="Avatar" className="ima"/>
    <h4><b>{name}</b></h4> 
    Total Stocks: <span className=""> <input type="number" value={stock} defaultValue={stocks} onChange={(e)=>setStock(e.target.value)} /></span>
   <br/> <br/><span className="">Total Sales: <input type="number" value={uprice} defaultValue={price} onChange={(e)=>setUprice(e.target.value)}/></span>
      <br/>  <br/> 
      
    <button
            className="updateee"
            onClick={updateOneProduct}
          >
            <b>Update</b>{" "}
          </button><tr/>
          <button
            className="updateee"
            onClick={deleteOneProduct}
          >
            <b>Delete</b>{" "}
          </button>
          <p></p>
          
     
  </div>
</div>



    
    {/* <div class="card" id="sakthi" style={{width: '20rem',color:"white"}}>
      <center>
    <img class="card-img-top" src={`${image}`} alt="Card image cap"/></center>
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    Stocks: <span className=""> <input type="number" value={stock} defaultValue={stocks} onChange={(e)=>setStock(e.target.value)} /></span>
    <span className="">Price: ₹<input type="number" value={uprice} defaultValue={price} onChange={(e)=>setUprice(e.target.value)}/></span>
          
    <button
            className=""
            onClick={updateOneProduct}
          >
            Update{" "}
          </button>
          <button
            className=""
            onClick={deleteOneProduct}
          >
            Delete{" "}
          </button>
  </div>
</div> */}



</div>   
</center>
    </>
  );
};

export default AdminProductCard;
