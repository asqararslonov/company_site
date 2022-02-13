import { useState } from "react";
import { motion } from "framer-motion";
import  '../App.css';

const path01Variants = {
  open: { d: "M3.06061 2.99999L21.0606 21" },
  closed: { d: "M0 9.5L24 9.5" }
};

const path02Variants = {
  open: { d: "M3.00006 21.0607L21 3.06064" },
  moving: { d: "M0 14.5L24 14.5" },
  closed: { d: "M0 14.5L15 14.5" }
};

 const Hamburger =() => {
  const [animation, setAnimation] = useState("closed");
  const onClick = () => {
    setAnimation("moving");
    setTimeout(() => {
      setAnimation(animation === "closed" ? "open" : "closed");
    }, 200);
  };
  return (
    <button className="hamburger-button" onClick={onClick}>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <motion.path
          stroke="#FFFFFF"
          animate={animation}
          variants={path01Variants}
        />
        <motion.path
          stroke="#FFFFFF"
          animate={animation}
          variants={path02Variants}
        />
      </svg>
    </button>
  );
};
export default Hamburger;