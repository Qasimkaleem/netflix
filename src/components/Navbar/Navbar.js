import React, { useState, useEffect } from "react";
import "./Nav.css";

const Navbar = () => {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowBar(true);
      } else {
        setShowBar(false);
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  });

  return (
    <div className={`nav ${showBar && "nav__black"}`}>
      <img
        className="nav__logo"
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRppnIIdx31oYL0Wje2jwrwudHlqKHBmM6hvQ&usqp=CAU"
        alt="Netflix Avatar"
      />
    </div>
  );
};

export default Navbar;
