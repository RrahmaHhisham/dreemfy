
// import React from "react";
// import "./styles/newnav.css";
// import { Link, useLocation } from "react-router-dom";

// function NewNav() {
//   const location = useLocation();

//   const isJoinUsPage = location.pathname === "/JoinUs";

//   return (
//     <div className="newnav">
//       <nav className="navbar navbar-expand-lg">
//         <p className="m-0 p-0">DREAMFY</p>

//         {!isJoinUsPage && <Link to="/">الرئيسية</Link>}
//       </nav>
//     </div>
//   );
// }

// export default NewNav;









import React from "react";
import "./styles/newnav.css";
import { Link, useLocation } from "react-router-dom";

function NewNav() {
  const location = useLocation();

  const hideHomeLink = location.pathname === "/JoinUs" || location.pathname === "/LogIn";

  return (
    <div className="newnav">
      <nav className="navbar navbar-expand-lg">
        <p className="m-0 p-0">DREAMFY</p>

        {!hideHomeLink && <Link to="/">الرئيسية</Link>}
      </nav>
    </div>
  );
}

export default NewNav;
