import React from 'react';
import axios from 'axios';
import './Viewcordinator.css'
import { useState } from 'react';
function Viewcordinator() {
    const [employees, setUsers] = useState([]);

    async function Load() {
        const result = await axios.get("http://localhost:8000/user/getAll");
        setUsers(result.data.data);
        console.log(result.data);
      }
    return(
        <center>
      <div className="form">
         <label className='q'>View Coordinator</label>
          <div className="form-body">
             
              <div className="v">
              <button type="submit"  onClick={Load} className="btn1">View</button>
              </div>
          </div>


        {
            employees.length>0?
            (
                <>
                  <table class="table table-striped">
            <tr>
                <th>
                    CId
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Salary</th>
                <th>Contact</th>
                <th>City</th>
            </tr>

            {
                employees.map((item)=>{
                    return(
                        <>
                            <tr>
                                <td>
                                    {item.cid}
                                </td>
                                <td>
                                    {
                                        item.name
                                    }
                                </td>
                                <td>
                                    {
                                        item.email
                                    }
                                </td>
                                <td>
                                    {
                                        item.salary
                                    }
                                </td>

                                <td>
                                    {
                                        item.contact
                                    }
                                </td>

                                <td>
                                    {
                                        item.city
                                    }
                                </td>

                            </tr>
                        </>
                    )
                })
            }
        </table>
        </>
            ):
            (<></>)
        }
              
          </div>
          </center>
         
    )       
}
export default Viewcordinator;