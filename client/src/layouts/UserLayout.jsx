import React from "react";
import { Outlet } from "react-router-dom";
import UserNavbar from "./Navbar";
import UserFooter from "./UserFooter";

const UserLayout = () => {
  return (
    <div>
      <UserNavbar />
      <main  style={{ minHeight: "100vh" }}>
        <Outlet />
      </main>
      <UserFooter />
    </div>
  );
};

export default UserLayout;
