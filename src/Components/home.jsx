import { faAngleDoubleLeft, faAngleLeft } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [ismenu, setIsMenu] = useState(false);
  return (
    <div className="bg-black h-screen flex">
      <div
        className={
          ismenu
            ? "left w-60  bg-gray-800 h-screen px-5 py-3 text-white bold relative"
            : "left w-0  bg-gray-800 h-screen px-5 py-3 text-white bold relative"
        }
      >
        <motion.button
          onClick={() => setIsMenu(!ismenu)}
          whileTap={{ scale: 0.9 }} // Use whileTap for tap animations
          className={ismenu ? "w-full text-right relative right-1" : "w-0 text-right relative right-1"} style={{ right: "-13px" , zIndex: "1" }}
        >
          <FontAwesomeIcon icon={faAngleDoubleLeft} className="text-xl" />
        </motion.button>

        <div className="menu ">
          <h1>Home</h1>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Home;
