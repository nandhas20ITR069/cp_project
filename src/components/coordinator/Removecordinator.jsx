import React from 'react';
import axios from 'axios';
import { useState } from 'react';

import './Addcordinator.css'
function Removeworker() {
    
    const[cid,setCid]=useState("");
   
    async function DeleteEmployee() {
      console.log(cid); 
        await axios.delete("http://localhost:8000/user/delete/"+cid);
        alert("Coordinator deleted Successfully");
             
      }

    return(
      <div className="form">
         <label className='q'>Remove Coordinator</label>
          <div className="form-body">
              <div className="Id">
                  <label className="form__label">Enter Id </label><br></br>
                  <input className="form__input" type="text" value={cid} id="cid" onChange={(event) => {
                setCid(event.target.value);
              }} placeholder="  Id" required/>
              </div>
             
              <div className="v">
              <button type="submit" onClick={DeleteEmployee} className="btn1">Remove</button>
              </div>
          </div>
              
          </div>
         
    )       
}
export default Removeworker;