import React from "react";
import "../App.scss";

const SlidingMenu = ({ open }: { [key: string]: boolean }) => {
  const style = {
    transform: open ? "translateX(0)" : "translateX(-100%)",
  };

  return (
    <div className="menu" style={style}>
      <p style={{ color: "white" }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate,
        ullam.
      </p>
    </div>
  );
};

export default SlidingMenu;
