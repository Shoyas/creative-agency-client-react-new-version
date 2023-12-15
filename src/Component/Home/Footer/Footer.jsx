import { Link } from "react-router-dom";
import Contact from "../Contact/Contact";
import "./Footer.css";
import logo from "../../../assets/images/logos/logo.png";
import FooterCopyRight from "./FooterCopyRight";

const Footer = () => {
  return (
    <div className="footer-content md:container md:mx-auto">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
        <div className="footer-tag">
          <Link to="/">
            <img
              className="w-16 md:w-32 lg:w-48"
              id="main-logo"
              src={logo}
              alt=""
            />
          </Link>
          <h3 className="mt-10 text-3xl">
            Let us handle your <br /> project, professionally.
          </h3>
          <br />
          <p className="text-lg">
            With well written codes, we build amazing apps for all <br />{" "}
            platforms, mobile and web apps in general.
          </p>
        </div>
        <div className="contact-form">
          <Contact />
        </div>
      </div>
      <div className="copyRight text-center mt-5">
        <FooterCopyRight />
      </div>
    </div>
  );
};

export default Footer;
