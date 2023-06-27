import React, { useEffect, useState } from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from "react-router-dom";
import './workers.css'
const Home = () => {
    const [filteredList, setFilteredList] =new  useState([]);
    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const getdata = async (e) => {

        const res = await fetch("http://localhost:8003/getdata",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);
        setFilteredList(data);
        if (res.status === 422 || !data) {
            console.log("error");
        }
        else {
            setUserdata(data);
            console.log("get data");
        }
    }
    useEffect(() => {
        getdata();
    }, [])

    const filterBySearch = (event) => {
        // Access input value
        const query = event.target.value;
        // Create copy of item list
        var updatedList = [...getuserdata];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) => {
          return item.loc.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        // Trigger render with updated values
        setFilteredList(updatedList);
      };


    const deleteuser = async (id) => {
        const res2 = await fetch(`http://localhost:8003/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
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
            getdata();
        }
    }


    return (

        <>
            
       
        <div className="hi" >


                <div className="mt-5">
                    <div className="containera">
                        <div className="add_btn mt-2 mb-2">
                            <NavLink to="/register" className="btn btn-primary">Add data</NavLink>
                        </div>


                        <table class="table">
                            <thead>
                                <tr >
                                    {/* className="table-dark" */}
                                    <th scope="col">S.No</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Contact</th>
                                    <th scope="col">Search<input id="search-box" onChange={(e)=>filterBySearch(e)} /></th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    filteredList.map((element, id) => {
                                        return (
                                            <>
                                                <tr>
                                                    <th scope="row">{id + 1}</th>
                                                    <td>{element.name}</td>
                                                    <td>{element.age}</td>
                                                    <td>{element.loc}</td>
                                                    <td>{element.mob}</td>
                                                    <td className="d-flex justify-content-between">
                                                        <NavLink to={`view/${element._id}`}><button className="btn btn-success"><RemoveRedEyeIcon /></button></NavLink>
                                                        <NavLink to={`edit/${element._id}`}><button className="btn btn-primary"><CreateIcon /></button></NavLink>
                                                        <button type="submit" className="btn btn-danger" onClick={() => deleteuser(element._id)}><DeleteOutlineIcon /></button>
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }


                            </tbody>
                        </table>

                    </div>
                </div>

                </div>
                
        </>
    )
}

export default Home;