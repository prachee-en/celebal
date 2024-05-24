// src/components/Success.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Successfully Submitted!</h2>
      <div>
        <h3 className="font-bold">Submitted Details:</h3>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Username: {formData.username}</p>
        <p>Email: {formData.email}</p>
        {/* Display other submitted details */}
      </div>
    </div>
  );
};

export default Success;
