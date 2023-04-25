import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return(
  <nav>
    {links.map((links,index)=>(
      <a key={index}href="${links}">{links}</a>
    ))}
  </nav>
  )
}

export default NavBar;
