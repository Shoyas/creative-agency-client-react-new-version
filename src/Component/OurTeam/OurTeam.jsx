import TeamMemberOne from "../../assets/images/customer-1.png";
import TeamMemberTwo from "../../assets/images/customer-2.png";
import TeamMemberThree from "../../assets/images/customer-3.png";
import FooterCopyRight from "../Home/Footer/FooterCopyRight";
import Navigation from "../Home/Navigation/Navigation";
import "./OurTeam.css";
import { motion } from "framer-motion";


const OurTeam = () => {
    return (
        <div className=" md:container md:mx-auto team-mate-area">
            <Navigation/>
            <h1 className="text-3xl mt-10 text-center">Our Team Member</h1>
            <div className="grid gap-x-8 gap-y-4 grid-cols-3 mt-20 m-20">
                <motion.div
                    initial={{x: -100}}
                    animate={{x: 0}} className="card bg-base-100 shadow-xl mb-5">
                    <figure>
                        <img className="mt-5" src={TeamMemberOne} alt="Creative Agency" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Kumri Lota</h2>
                        <p>CEO</p>
                    </div>
                </motion.div>
                <div className="card bg-base-100 shadow-xl mb-5">
                    <figure>
                        <img className="mt-5" src={TeamMemberTwo} alt="Creative Agency" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Kala Chan</h2>
                        <p>Web Developer</p>
                    </div> 
                </div>
                <motion.div 
                    initial={{x: 100}}
                    animate={{x: 0}} 
                    className="card bg-base-100 shadow-xl mb-5">
                    <figure>
                        <img className="mt-5" src={TeamMemberThree} alt="Creative Agency" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Distil Water</h2>
                        <p>SEO Expert</p>
                    </div>
                </motion.div>


                <motion.div
                    initial={{x: -100}}
                    animate={{x: 0}} 
                    className="card bg-base-100 shadow-xl mb-5">
                    <figure>
                        <img className="mt-5" src={TeamMemberOne} alt="Creative Agency" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Daisy Khan</h2>
                        <p>Mobile App Developer</p>
                    </div>
                </motion.div>
                <div className="card bg-base-100 shadow-xl mb-5">
                    <figure>
                        <img className="mt-5" src={TeamMemberTwo} alt="Creative Agency" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Tailwind Style</h2>
                        <p>Content Creator Expert</p>
                    </div>
                </div>
                <motion.div 
                    initial={{x: 100}}
                    animate={{x: 0}} 
                    className="card bg-base-100 shadow-xl mb-5">
                    <figure>
                        <img className="mt-5" src={TeamMemberThree} alt="Creative Agency" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Material U.Interface</h2>
                        <p>Editor</p>
                    </div>
                </motion.div>
                
            </div>
            <div className="text-center">
                <FooterCopyRight/>
            </div>
        </div>
        
    );
};

export default OurTeam;