import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

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
        Swal.fire({
          icon: "success",
          title: "Success login",
          text: "You will redirect to home page",
        }).then(() => {
          window.location.href = "/";
        });
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        Swal.fire("Oopss", "Password or email wrong", "error");
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
            <div
              style={{ textAlign: "center", cursor: "pointer" }}
              onClick={() => (window.location.href = "/register")}
            >
              dont't have account?
            </div>
          </form>
          <img src="images/image-2.png" alt="" className="image-2" />
        </div>
      </div>
    </div>
  );
}
