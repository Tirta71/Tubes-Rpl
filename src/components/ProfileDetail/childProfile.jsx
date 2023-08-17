import React from "react";

export default function ProfileChild() {
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  const phone_number = localStorage.getItem("phone");
  return (
    <div>
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="card-container">
            <div className="card user-card-full">
              <div className="row m-l-0 m-r-0 test">
                <div className="col-sm-4 bg-c-lite-green user-profile">
                  <div className="card-block text-center text-white">
                    <div className="m-b-25">
                      <img
                        src="https://img.icons8.com/bubbles/100/000000/user.png"
                        className="img-radius"
                        alt="User-Profile-Image"
                      />
                    </div>

                    <h6 className="f-w-600">Nama : {username}</h6>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="card-block">
                    <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                      Information
                    </h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Email</p>
                        <h6 className="text-muted f-w-400">{email}</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Phone</p>
                        <h6 className="text-muted f-w-400">{phone_number}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
