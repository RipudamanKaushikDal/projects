import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [shownav, setShownav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShownav(true);
      } else {
        setShownav(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar ${shownav && "navbar_black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
      />
    </div>
  );
}

export default Navbar;
