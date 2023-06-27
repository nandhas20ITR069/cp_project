import React from 'react';
import axios from 'axios';

import { useEffect,useState } from 'react';
// import './Addcordinator.css';
import './Addcordinator.css';
function Addworker() {
    const [cid, setCid] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [salary, setSalary] = useState("");
    const [contact, setContact] = useState("");
    const [city, setCity]=useState("");

  
    
    useEffect(async () => {
        await Load();
      }, []);

      async function Load() {
        const result = await axios.get("http://localhost:8000/user/getAll");  
       
        console.log(result.data);
      }

      async function save(event) {
        event.preventDefault();
        try {
          console.log("Hai");
          await axios.post("http://localhost:8000/user/create", {
            cid: cid,
            name: name,
            email:email,
            salary:salary,
            contact:contact,
            city:city
          });
          alert("Employee Registation Successfully");
          setCid("");
          setName("");
          setEmail("");
          setSalary("");
          setContact("");
          setCity("");
          Load();
        } catch (err) {
          //console.log(err.message); 
          alert("User Registation Failed");
          console.log(err);
        }
      }




    return(
      <div className="form">
        <label className='q'>Add Coordinator</label>
          <div className="form-body">
           
            
              <div className="Id">
                  <label className="form__label" for="id">CId </label><br></br>
                  <input className="form__input" value={cid} type="text" id="cid" placeholder="Id" onChange={(event)=>{
                    setCid(event.target.value);
                  }}/>
              </div>
              <div className="name">
                  <label className="form__label" for="Name">Name </label><br></br>
                  <input  type="text" name="" id="name" value={name} className="form__input"placeholder="Name" onChange={(event)=>{setName(event.target.value);
                  }}/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label><br></br>
                  <input  type="email" id="email" value={email} className="form__input" placeholder="Email" onChange={(event)=>{
                    setEmail(event.target.value);
                  }}/>
              </div>
              <div className="salary">
                  <label className="form__label" for="salary">Salary </label><br></br>
                  <input className="form__input" type="number" value={salary} id="salary" placeholder="Salary" onChange={(event)=>{
                    setSalary(event.target.value);
                  }}/>
              </div>
              <div className="contact">
                  <label className="form__label" for="number">Contact </label><br></br>
                  <input className="form__input" type="number" value={contact} minLength={10} id="contact" placeholder="contact num" onChange={(event)=>{
                    setContact(event.target.value);
                  }} required/>
              </div>
              <div className="city">
                  <label className="form__label" for="city">City </label><br></br>
                  <input className="form__input" type="text" value={city} id="city" placeholder="City" onChange={(event)=>{
                    setCity(event.target.value);
                  }}/>
              </div>
              <div className="v">
              <button type="submit" onClick={save} className="btn1">Add</button>
              </div>
          </div>
              
          </div>
         
    )       
}
export default Addworker;