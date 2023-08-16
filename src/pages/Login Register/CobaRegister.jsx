import axios from "axios";

export default function CobaRegister() {
  const postData = {
    name: "John Doe",
    phone_number: "123456789",
    email: "john@example.com",
    password: "secretpassword",
  };

  axios
    .post("https://web-hotel-rpl.my.id/api/register", postData)
    .then((response) => {
      console.log("Kalo berhasil syukur", response.data);
    })
    .catch((error) => {
      console.error("error", error);
    });
}
