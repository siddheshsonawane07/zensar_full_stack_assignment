import React, { useState, useEffect } from "react";
import axios from "axios";

const LoginComponent = () => {
  // const AddCustomer = () => {
  const [customer, setCustomer] = useState({
    id: "",
    name: "",
    address: "",
    email_id: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/customer/login", customer);
      alert("Customer added successfully");
    } catch (error) {
      alert("Error adding customer");
    }
  };

  return (
    <>
      <h1>Customer Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="id"
          placeholder="ID"
          value={customer.id}
          onChange={handleChange}
          required="true"
        />
        <input
          name="name"
          placeholder="Name"
          value={customer.name}
          onChange={handleChange}
          required="true"
        />
        <input
          name="address"
          placeholder="address"
          value={customer.address}
          onChange={handleChange}
          required="true"
        />
        <input
          name="email_id"
          placeholder="email_id"
          value={customer.email_id}
          onChange={handleChange}
          required="true"
        />
        <input
          name="password"
          placeholder="password"
          value={customer.password}
          onChange={handleChange}
          required="true"
        />
        <button type="submit">Add Customer</button>
      </form>
    </>
  );
};
// }

export default LoginComponent;
