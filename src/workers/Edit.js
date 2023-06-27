import React, { useEffect, useState } from "react";
import {   useParams } from "react-router-dom";

const EditData = () => {

    // const navigate = useNavigate("");

    // const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata);

    const [inpval, setINP] = useState({
        name: "",
        age: "",
        dob: "",
        sal: "",
        mob: "",
        loc: "",
        add: ""
    });


    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

    const { id } = useParams("");
    console.log(id);

    const getdata = async (e) => {

        const res = await fetch(`http://localhost:8003/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error");
        }
        else {
            setINP(data);
            console.log("get data");
        }
    }



    useEffect(() => {
        getdata();
    },[])

    const  updateuser = async(e)=>{
        e.preventDefault();

        const {name,age,dob,sal,mob,loc,add} = inpval;

        const res2 = await fetch(`http://localhost:8003/updateuser/${id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,age,dob,sal,mob,loc,add
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if(res2.status === 422 || !data2){
            alert("fill the data");
        }
        else{
            alert("data updated succesffuly✅");
            // navigate.push("/home");
            window.location = '/reports';
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
                        <input type="number" name="mob" value={inpval.mob} onChange={setdata} class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Location</label>
                        <input type="text" name="loc" value={inpval.loc} onChange={setdata} class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                        <label for="exampleInputPassword1" class="form-label">Address</label>
                        <textarea name="add" value={inpval.add} onChange={setdata} className="form-control" id="" cols="30" rows="10" ></textarea>
                    </div>
                    <button type="submit" onClick={updateuser} class="btn btn-warning">UPDATE Employee</button>
                </div>
            </form>



        </div>

        </div>
    )
}
export default EditData;