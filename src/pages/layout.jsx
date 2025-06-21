import React from 'react'
import Nav from "../layouts/topnav"
import { Outlet } from 'react-router-dom';
import Footer from "../layouts/footer/footer"
function Layout() {
  return (
    <div>
      <Nav />
      <Outlet /> {/* ← هنا هيتعرض الـ <Home /> وغيره من الصفحات */}
      {/* <BottomNav /> */}
      <Footer />
    </div>
  )
}

export default Layout
