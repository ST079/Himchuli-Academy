import React from "react";

const Email = () => {
  const email = "himchuli.academy@gmail.com";
  const subject = "From Website";
  const body = "";

  const handleClick = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      email
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank");
  };

  return <span className="" onClick={handleClick}>himchuli.academy@gmail.com</span>;
};

export default Email;
