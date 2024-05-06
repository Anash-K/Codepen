import { faAngleDoubleLeft, faAngleLeft } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Logo } from "../assets";

const Home = () => {
  const [ismenu, setIsMenu] = useState(false);
  return (
    <div className="menumain">
      <div
        className={
          ismenu
            ? "isSideMenu"
            : "isSideMenuNot"
        }
      >
        <div className="btndiv">
        <motion.button
          onClick={() => setIsMenu(!ismenu)}
          whileTap={{ scale: 0.9 }} 
          className={ismenu ? " sidemenubtn" : "sidemenubtnclose"}
        >
          <FontAwesomeIcon icon={faAngleDoubleLeft} className="text-xl menu_icon" />
        </motion.button>
        </div>

        <div className="menu ">
          <Link to={"/"}><img src={Logo} className="logo" alt="logo" /></Link>
          <Link>Start Coding</Link>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Home;
