import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    showPassword: false,
    phone: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: ''
  });
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    setIsFormValid(Object.keys(validationErrors).length === 0);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      navigate('/success', { state: { formData } });
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.firstName) errors.firstName = 'First Name is required';
    if (!data.lastName) errors.lastName = 'Last Name is required';
    if (!data.username) errors.username = 'Username is required';
    if (!data.email) errors.email = 'Email is required';
    if (!data.password) errors.password = 'Password is required';
    if (!data.phone) errors.phone = 'Phone Number is required';
    if (!data.country) errors.country = 'Country is required';
    if (!data.city) errors.city = 'City is required';
    if (!data.panNo) errors.panNo = 'PAN Number is required';
    if (!data.aadharNo) errors.aadharNo = 'Aadhar Number is required';

    return errors;
  };

  const toggleShowPassword = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>First Name:</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
            {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
          </div>
          <div>
            <label>Last Name:</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
            {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
          </div>
          <div>
            <label>Username:</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} />
            {errors.username && <p className="text-red-500">{errors.username}</p>}
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div>
            <label>Password:</label>
            <input type={formData.showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} />
            <button type="button" onClick={toggleShowPassword}>
              {formData.showPassword ? "Hide" : "Show"} Password
            </button>
            {errors.password && <p className="text-red-500">{errors.password}</p>}
          </div>
          <div>
            <label>Phone Number:</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
          </div>
          <div>
            <label>Country:</label>
            <select name="country" value={formData.country} onChange={handleChange}>
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              {/* Add more countries as needed */}
            </select>
            {errors.country && <p className="text-red-500">{errors.country}</p>}
          </div>
          <div>
            <label>City:</label>
            <select name="city" value={formData.city} onChange={handleChange}>
              <option value="">Select City</option>
              <option value="Mumbai">Mumbai</option>
              <option value="New York">Lucknow</option>
              {/* Add more cities as needed */}
            </select>
            {errors.city && <p className="text-red-500">{errors.city}</p>}
          </div>
          <div>
            <label>PAN Number:</label>
            <input type="text" name="panNo" value={formData.panNo} onChange={handleChange} />
            {errors.panNo && <p className="text-red-500">{errors.panNo}</p>}
          </div>
          <div>
            <label>Aadhar Number:</label>
            <input type="text" name="aadharNo" value={formData.aadharNo} onChange={handleChange} />
            {errors.aadharNo && <p className="text-red-500">{errors.aadharNo}</p>}
          </div>
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" disabled={!isFormValid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
