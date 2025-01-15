import React, { useState } from 'react';
import ReatlierNavbar from './RetailerNavbar';
import { Button } from 'bootstrap';

// Curried validation function
const validate = (field) => (value) => {
  console.log("valuevalue",field,value)
  if (!value) {
    return `${field} is required`;
  }
 
  return "";
};

const Dashboard = () => {
  const [data,setData]= useState("")
  const handleChange = (field) => (event) => {
    const value = event.target.value;
    setData(value)
    let errors =validate(value,field)
    console.log("error-------",errors)

  }
  


 
  return (
    <div className='w-100 h-100'>
      <div className="min-h-20">
        <ReatlierNavbar />
      </div>
     <p>djncvhsdu</p>
     <input
        className='btn'
        value={data}
        onChange={handleChange("name")}
      />
      </div>
  );
}

export default Dashboard;
