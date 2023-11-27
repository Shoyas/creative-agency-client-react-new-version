/* eslint-disable react/no-unescaped-entities */
import frame from "../../../assets/images/logos/Frame.png";
import { motion } from "framer-motion";
import "./Header.css";
const Header = () => {
    return (
        <div className="flex">
            <motion.div
            initial={{x: -100}}
            animate={{x: 0}}
            className="flex-1 w-64  text-area">
                <h2>
                 Let's Grow Your <br /> Brand To The <br /> Next Level
                </h2>
                <p>
                    It's a creative brand communication agency <br /> with a mission
                    for creative innovation and excellence, <br /> dedicated to
                    helping business houses to enhance its <br />
                    enterprise value by building their brands.{" "}
                </p>
                <button type="button" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-5">
                    Hire us
                </button>
            </motion.div>
            <motion.div 
            initial={{x: 100}}
            animate={{x: 0}}
            className="flex-1 w-32 mt-10 banner-image">
                <img className="object-cover h-250 w-320" src={frame} alt="Creative Agency" />
            </motion.div>
        </div>
    );
};

export default Header;