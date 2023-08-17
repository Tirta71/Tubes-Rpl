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
        console.log("Respon login:", response.data.data);

        if (response.data.data.access_token && response.data.data.user) {
          const username = response.data.data.user.name;
          const phone_number = response.data.data.user.phone_number;
          const email = response.data.data.user.email;
          const token = response.data.data.access_token;

          localStorage.setItem("token", token);
          localStorage.setItem("email", email);
          localStorage.setItem("phone", phone_number);
          localStorage.setItem("username", username);
          localStorage.setItem("isLogged", true);

          Swal.fire({
            icon: "success",
            title: "Berhasil login",
            text: "Anda akan diarahkan ke halaman utama",
          }).then(() => {
            window.location.href = "/";
          });
        } else {
          Swal.fire("Oopss", "Password atau email salah", "error");
        }
      })
      .catch((error) => {
        console.error("Kesalahan saat login:", error);
        Swal.fire("Oopss", "Terjadi kesalahan", "error");
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
