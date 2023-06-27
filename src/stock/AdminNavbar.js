// import React, { useState } from "react";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { Link } from "react-router-dom";

// const AdminNavBar = () => {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };
//   return (
//     <div className="flex justify-between items-center flex-wrap h-42 relative text-bblue bg-black">
     
//       <div className="text-dark flex justify-between items-center h-24 w-4/5 max-w-[1240px] ">
        

//         <ul className="hidden md:flex ">
//           <li className="px-3 text-lg">
//             <Link to="/admin/addproduct">Add products</Link>
//           </li>
//           <li className="px-3 text-lg">
//             <Link to="admin/adminfilters">Products</Link>
//           </li>
         
       
//         </ul>
//         <div onClick={handleNav} className="block md:hidden ">
//           {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//         </div>
//         <div
//           className={
//             nav
//               ? "z-10 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 text-bblue"
//               : "fixed left-[-100%]"
//           }
//         >
          
         
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminNavBar;


import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNavbar.css';

function Adminnavbar() {
 
  return (
    <div>
      <section className='section11'>
        <div className="container">
          {/* <h1>Responsive Cards</h1> */}
          <div className="cards">
          <div className="card">
              <h3>
              Add Product
              </h3>
              <Link className='btn11' to="/admin/addproduct">Add</Link>
            </div>   
          </div>
          <div className="cards">
          <div className="card">
              <h3>
              View Products
              </h3>
              <Link className='btn11' to="/admin/adminfilters">View </Link>
            </div>   
          </div>
         
        </div>
      </section>
      
    </div>
  )
}

export default Adminnavbar