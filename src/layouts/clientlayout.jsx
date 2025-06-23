
import React from "react";
import { Outlet } from "react-router-dom";

// ده لينك الناف هما كلهم ناف واحد عادي
import ClientLayoutNav from "../components/freelance/freelancenavbar/FreelanceNavbar"; 

function ClientLayout() {
  return (
    <>
      <ClientLayoutNav />
      <div className="freelance-container">
        <Outlet />
      </div>
    </>
  );
}

export default ClientLayout;