import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useHistory, Link } from "react-router-dom";
// import "./Support.css"
function Login(){
    const history=useHistory();

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/Home",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("User have not signed up")
                }
            })
            .catch(e=>{
                alert("Wrong Details");
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }
    }

    return(
        <div class="container">
	<div class="card">
		<div class="card-image">	
			
		</div>
		<form action="POST" class="card-form">
			<div class="input">
            {/* <label class="input-label"></label><br/> */}
				{/* <input type="email" class="no-outline"  onChange={(e) => { setEmail(e.target.value) }} placeholder="email" name="" id=""  required/> */}
</div>

<h4 className="login">LOGIN</h4>
 <div class="form-group">
      <label for="usr">Email:</label>
      <input type="text" className="form-control" id="" onChange={(e) => { setEmail(e.target.value) }} required/>
    </div><br/>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" className="form-control" id="" onChange={(e) => { setPassword(e.target.value) }} required/>
    </div>




		
						{/* <div class="input">
                        <label class="input-label"></label><br/>
				<input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="password" name="" id="" required/>
				
			</div> */}
						<div className="input1">
				<input type="submit" className="btn" onClick={submit}/>
			</div>
			<div className="action">
                <br/>
				<label>Doesn't have account <Link to="/Signup">Signup</Link></label>
			</div>
		</form>
		
	</div>
</div>


    )
    
}
export default Login;