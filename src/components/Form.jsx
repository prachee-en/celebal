// src/components/Form.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/success');
    // const errors = validateForm(formData);
    // if (Object.keys(errors).length === 0) {
    //   // Successful submission, navigate to success route
    //   navigate('/success', { state: { formData } });
    // } else {
    //   setErrors(errors);
    // }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.firstName) errors.firstName = 'First Name is required';
    if (!data.lastName) errors.lastName = 'Last Name is required';
    if (!data.username) errors.username = 'Username is required';
    if (!data.email) errors.email = 'Email is required';
    // Add more validations for other fields

    return errors;
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>First Name:</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
            {/* {errors.firstName && <p className="text-red-500">{errors.firstName}</p>} */}
          </div>
          {/* Add similar markup for other fields */}
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50" >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
