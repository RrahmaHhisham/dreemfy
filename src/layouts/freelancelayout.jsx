import React from "react";
import { Outlet } from "react-router-dom";
import FreelanceNavbar from "../components/freelance/freelancenavbar/FreelanceNavbar"; // افترضي إنك عملتيه

function FreelanceLayout() {
  return (
    <>
      <FreelanceNavbar />
      <div className="freelance-container">
        <Outlet />
      </div>
    </>
  );
}

export default FreelanceLayout;
