import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

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

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, register!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const apiUrl = "https://web-hotel-rpl.my.id/api/register";
          const response = await axios.post(apiUrl, data);

          console.log("Registration response:", response.data);
          setData({
            name: "",
            phone_number: "",
            email: "",
            password: "",
          });

          Swal.fire(
            "Registered!",
            "Your registration has been successful.",
            "success"
          ).then(() => {
            window.location.href = "/login";
          });
        } catch (error) {
          console.error("Error registering:", error);
          Swal.fire("Error", "An error occurred while registering.", "error");
        }
      }
    });
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
            <div
              style={{ textAlign: "center", cursor: "pointer" }}
              onClick={() => (window.location.href = "/login")}
            >
              Already have an account?
            </div>
          </form>

          <img src="images/image-2.png" alt="" className="image-2" />
        </div>
      </div>
    </div>
  );
}
