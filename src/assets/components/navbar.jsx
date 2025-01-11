import gsap from "gsap";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // const navItems = ["home", "About", "Feedback"];
  const navItems = [
    { item: "Home", path: "/" },
    { item: "About", path: "/about" },
    { item: "Feedback", path: "/feedback" },
  ];

  useEffect(() => {
    gsap.to("#navbar", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
      duration: 1,
    });
  });

  return (
    <>
      <nav
        className="flex items-center px-10 py-2 bg-violet-600 shadow-lg rounded-lg opacity-0 -translate-y-96"
        id="navbar"
      >
        <Link to="/" className="mr-auto">
          <div className="mr-auto">
            <img
              src="images\logo.png"
              alt="logo"
              className="w-10 h-10 rounded-full cursor-pointer"
            />
          </div>
        </Link>
        <div className="flex gap-8 font-medium">
          {navItems.map((item, i) => (
            <Link to={item.path} className="cursor-pointer nav-hover-btn" key={i}>
              {item.item}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
