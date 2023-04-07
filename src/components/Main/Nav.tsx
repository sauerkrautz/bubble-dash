import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Nav/navbar.scss";
import logo from "../../assets/Logo.svg";
import SlidingMenu from "../SlidingMenu";

const Nav = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    console.log({ isOpen });
  }, [isOpen]);

  return (
    <>
      <div className="navbar">
        <div className="flex-center">
          <p className="text-white">
            <img src={logo} alt="" />
          </p>
          <p className="text-white">Bubble Dash</p>
        </div>
        <div className="flex-center">
          <RxHamburgerMenu
            style={{ fontSize: "2rem", fontWeight: 700, zIndex: 9999 }}
            onClick={() => setIsOpen((prev) => (prev = !prev))}
          />
        </div>
      </div>
      <SlidingMenu open={isOpen} />
    </>
  );
};

export default Nav;
