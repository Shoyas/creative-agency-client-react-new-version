import Contact from "../Home/Contact/Contact";
import FooterCopyRight from "../Home/Footer/FooterCopyRight";
import Navigation from "../Home/Navigation/Navigation";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="md: container md: mx-auto">
      <Navigation />
      <div className="contact-us-filed">
        <h1 className="text-3xl text-center pt-10">How can we help you ?</h1>
        <div className="mt-20 w-4/5 mx-auto my-auto">
          <Contact />
        </div>
        <div className="mt-20 text-center ">
          <FooterCopyRight />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
