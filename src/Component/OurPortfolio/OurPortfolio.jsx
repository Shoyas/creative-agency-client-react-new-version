import { motion } from "framer-motion";
import Navigation from "../Home/Navigation/Navigation";
import './OurPortfolio.css';
import carouselOne from '../../assets/images/carousel-1.png';
import carouselTwo from '../../assets/images/carousel-2.png';
import carouselThree from '../../assets/images/carousel-3.png';
import carouselFour from '../../assets/images/carousel-4.png';
import carouselFive from '../../assets/images/carousel-5.png';
import carouselSix from '../../assets/images/logos/Frame.png';
import FooterCopyRight from "../Home/Footer/FooterCopyRight";

const OurPortfolio = () => {
    return (
        <div className=" md:container md:mx-auto portfolio-area">
            <Navigation/>
            <h1 className="text-3xl mt-10 text-center">Our Team's Works</h1>
            <div className="grid gap-x-8 gap-y-4 grid-cols-3 mt-20 m-20">
                <motion.div
                    initial={{x: -100}}
                    animate={{x: 0}} className="card bg-base-100 shadow-xl mb-5">
                    <figure>
                        <img className="mt-5" src={carouselOne} alt="Creative Agency" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Buy Books</h2>
                        <p>Mobile App</p>
                    </div>
                </motion.div>
                <div className="card bg-base-100 shadow-xl mb-5">
                    <figure>
                        <img className="mt-5" src={carouselTwo} alt="Creative Agency" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Travel</h2>
                        <p>Website</p>
                    </div>
                </div>
                <motion.div 
                    initial={{x: 100}}
                    animate={{x: 0}} 
                    className="card bg-base-100 shadow-xl mb-5">
                    <figure>
                        <img className="mt-5" src={carouselThree} alt="Creative Agency" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Web Development</h2>
                        <p>Website</p>
                    </div>
                </motion.div>


                <motion.div
                    initial={{x: -100}}
                    animate={{x: 0}} 
                    className="card bg-base-100 shadow-xl mb-5">
                    <figure>
                        <img className="mt-5" src={carouselFour} alt="Creative Agency" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Jol-Torongo Resort</h2>
                        <p>Website</p>
                    </div>
                </motion.div>
                <div className="card bg-base-100 shadow-xl mb-5">
                    <figure>
                        <img className="mt-5" src={carouselFive} alt="Creative Agency" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Photography</h2>
                        <p>Mobile App</p>
                    </div>
                </div>
                <motion.div 
                    initial={{x: 100}}
                    animate={{x: 0}} 
                    className="card bg-base-100 shadow-xl mb-5">
                    <figure>
                        <img className="mt-5" src={carouselSix} alt="Creative Agency" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Jante Hobe</h2>
                        <p>Content Writing</p>
                    </div>
                </motion.div>
                
            </div>
            <div className="text-center">
                <FooterCopyRight/>
            </div>
        </div>
    );
};

export default OurPortfolio;