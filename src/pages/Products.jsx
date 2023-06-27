import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import { useState } from 'react'

function Coordinator() {
 
  return (
    <div>
      <section className='sec'>
        <div className="container">
          {/* <h1>Responsive Cards</h1> */}
          <div className="cards">
          <div className="card">
              <h3>
              Add Coordinator
              </h3>
              <Link className='btn11' to="/Addcordinator">Add </Link>
            </div>   
          </div>
          <div className="cards">
          <div className="card">
              <h3>
              Remove Coordinator
              </h3>
              <Link className='btn11' to="/Removecordinator">Remove</Link>
            </div>   
          </div>
          <div className="cards">
          <div className="card">
              <h3>
                View Cordinator
              </h3>
              
              <Link className='btn11' to='/Viewcordinator'>View</Link>
            </div>   
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Coordinator