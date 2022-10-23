import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "771918079963-18pg0lh9d80kcdlh6u4bj16a4r7s9h8n.apps.googleusercontent.com";

function LogoutR() {
  const onSuccess = () => {
    console.log("Logout made successfully");
    alert("Logout made successfully ✌");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default LogoutR;
