import React,{useEffect,useState} from "react";
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { NavLink, useParams } from "react-router-dom";
import './Details.css';

const DataDetails = () => {

    const {id} = useParams("");
    console.log(id);    

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);



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
            setUserdata(data);
            console.log("get data");
        }
    }

    useEffect(()=>{
        getdata();
    })


    
    const deleteuser = async (id)=>{
        const res2= await fetch(`http://localhost:8003/deleteuser/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        }
        else {
            console.log(" user deleted");
            // navigate.push("/");

            window.location = '/reports'
        }
    }



    return (

        <>
      
        <div className="hi">
        <h1  style={{ fontWeight: 400 }}>Welcome {getuserdata.name}!!</h1><br/>

        <div className="container mt-3" id="containerq">
            
            <Card sx={{ maxWidth: 600 }}>
                <CardContent>

                    <div className="add_btn">
                        <NavLink to={`/edit/${getuserdata._id}`}><button className="btn btn-primary mx-2"><CreateIcon /></button></NavLink>
                        <button className="btn btn-danger" onClick={()=>deleteuser(getuserdata._id)}><DeleteOutlineIcon /></button>
                    </div>

                    <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">


                            <h3 className="mt-3">Name:<span>{getuserdata.name}</span></h3>
                            <h3 className="mt-3">Age:<span>{getuserdata.age}</span></h3>

                            <p className="mt-3"><CalendarMonthIcon />DOB:<span>{getuserdata.dob}</span></p>
                            <p className="mt-3"><CurrencyRupeeIcon />Salary:<span>{getuserdata.sal}</span></p>
                        </div>
                        <div className="right_view col-lg-6 col-md-6 col-12">

                            <p className="mt-5"><PhoneAndroidIcon />Mobile:<span>{getuserdata.mob}</span></p>
                            <p className="mt-3"><LocationOnIcon />Location:<span>{getuserdata.loc}</span></p>
                            <p className="mt-3">Address:<span>{getuserdata.add}</span></p>
                        </div>

                    </div>

                </CardContent>
            </Card>
        </div>
      
        </div>
        </>
    )
}

export default DataDetails;