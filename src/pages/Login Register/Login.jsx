import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const apiUrl = "https://web-hotel-rpl.my.id/api/login";

    axios
      .post(apiUrl, formData)
      .then((response) => {
        console.log("Login response:", response.data);
        // Handle success or redirect to dashboard
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        // Handle error or display an error message
      });
  };

  return (
    <div>
      <div className="wrapper">
        <div className="inner">
          <img src="../../images/image-1.png" alt="" className="image-1" />
          <form onSubmit={handleSubmit}>
            <h3>Login</h3>
            <div className="form-holder">
              <span className="lnr lnr-envelope"></span>
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div className="form-holder">
              <span className="lnr lnr-lock"></span>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
            </div>
            <button type="submit">
              <span>Login</span>
            </button>
          </form>
          <img src="images/image-2.png" alt="" className="image-2" />
        </div>
      </div>
    </div>
  );
}
