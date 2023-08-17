import React from "react";
import "../css/ProfileDetail.css";

import ProfileChild from "../components/ProfileDetail/childProfile";
import Navbar from "../components/Navbar/navbar";
export default function ProfileDetail() {
  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <h1 style={{ textAlign: "center" }}>Profile Detail</h1>
        <ProfileChild />
      </div>
    </>
  );
}
