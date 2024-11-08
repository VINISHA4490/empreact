import { Button } from '@mui/material';
import React, { useState } from 'react'

const EmployeeForm = () => {
    const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = (event) => {
  
    const employee = {
      name,
      designation,
      location,
      salary,
    };
    console.log("Employee Data:", employee);
  };
  return (
    <div>

<h2>Employee Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <br></br>
        <div>
          <label>Designation: </label>
          <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} required />
        </div>
        <br></br>
        <div>
          <label>Location: </label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </div>
        <br></br>
        <div>
          <label>Salary: </label>
          <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} required />
        </div>
        <br></br>
        <br></br>
        <Button variant="contained">Submit</Button>
      </form>
    </div>

  )
}

export default EmployeeForm