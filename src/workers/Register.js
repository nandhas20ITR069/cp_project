import React, { useState } from "react";



const Register = () => {

  

    const [inpval,setINP] = useState({
        name:"",
        age:"",
        dob:"",
        sal:"",
        mob:"",
        loc:"",
        add:""
    });


    const setdata = (e) =>{
        console.log(e.target.value);
        const {name,value} = e.target;
        setINP((preval)=>{
            return{
                ...preval,
                [name]:value
            }
        })
    }

    const addinpdata = async(e) =>{
        e.preventDefault();

        const {name,age,dob,sal,mob,loc,add} = inpval;
        
        const res= await fetch("http://localhost:8003/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,age,dob,sal,mob,loc,add
            })
        });

        const data= await res.json();
        console.log(data);

        if(res.status===422 || !data)
        {
            alert("error");
            console.log("error");
        }
        else{
            alert("Data added successfully✅");
            console.log("data added");
            window.location='/reports'
        }
    }

    return (
        <div className="hi">
        <div className="container">
            {/* <NavLink to="/">home</NavLink> */}
            <form className="mt-4">
                <div className="row">
                <div class="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" name="name" value={inpval.name} onChange={setdata} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="exampleInputPassword1" class="form-label">Age</label>
                    <input type="text" name="age" value={inpval.age} onChange={setdata} class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="exampleInputPassword1" class="form-label">DOB</label>
                    <input type="date" name="dob" value={inpval.dob} onChange={setdata} class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="exampleInputPassword1" class="form-label">Salary</label>
                    <input type="text" name="sal" value={inpval.sal} onChange={setdata} class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="exampleInputPassword1" class="form-label">Mobile</label>
                    <input type="number"  name="mob" value={inpval.mob} onChange={setdata} class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="exampleInputPassword1" class="form-label">Location</label>
                    <input type="text" name="loc" value={inpval.loc} onChange={setdata} class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 col-lg-12 col-md-12 col-12">
                    <label for="exampleInputPassword1" class="form-label">Address</label>
                    <textarea name="add" value={inpval.add} onChange={setdata} className="form-control" id="" cols="30" rows="10" ></textarea>
                </div>
                <button type="submit" onClick={addinpdata} class="btn btn-primary">Add Employee</button>
                </div>
            </form>



        </div>

    </div>
    )
}
export default Register;