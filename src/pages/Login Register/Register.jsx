import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [data, setData] = useState({
    name: "",
    phone_number: "",
    email: "",
    password: "",
    apiResponse: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = "https://web-hotel-rpl.my.id/api/register";

    try {
      const csrfToken = document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content");

      const response = await axios.post(apiUrl, data, {
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": csrfToken,
        },
      });

      console.log("Registration response:", response.data);
      setData((prevData) => ({
        ...prevData,
        apiResponse: response.data.data,
      }));
    } catch (error) {
      console.error("Error registering:", error);
      setData((prevData) => ({
        ...prevData,
        apiResponse: null,
      }));
    }
  };

  return (
    <div>
      <div className="wrapper">
        <div className="inner">
          <img src="../../images/image-1.png" alt="" className="image-1" />
          <form onSubmit={handleSubmit}>
            <h3>New Account?</h3>
            <div className="form-holder">
              <span className="lnr lnr-user"></span>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>
            <div className="form-holder">
              <span className="lnr lnr-phone-handset"></span>
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
                value={data.phone_number}
                onChange={(e) =>
                  setData({ ...data, phone_number: e.target.value })
                }
              />
            </div>
            <div className="form-holder">
              <span className="lnr lnr-envelope"></span>
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            <div className="form-holder">
              <span className="lnr lnr-lock"></span>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>

            <button type="submit">
              <span>Register</span>
            </button>
            <div style={{ textAlign: "center" }}>Have an account?</div>
          </form>
          {/* Display API response if available */}
          {data.apiResponse && (
            <div className="api-response">
              <h3>API Response:</h3>
              <p>Name: {data.apiResponse.name}</p>
              <p>Phone Number: {data.apiResponse.phone_number}</p>
              <p>Email: {data.apiResponse.email}</p>
              <p>ID: {data.apiResponse.id}</p>
            </div>
          )}
          <img src="images/image-2.png" alt="" className="image-2" />
        </div>
      </div>
    </div>
  );
}
