import CarouselBody from "./CarouselBody/CarouselBody";
import CompanyClient from "./CompanyClient/CompanyClient";
import Feedback from "./Feedback/Feedback";
import HeaderMain from "./HeaderMain/HeaderMain";
import Services from "./Services/Services";
import Footer from "./Footer/Footer";


const Home = () => {
    return (
        <div>
            <HeaderMain/>
            <CompanyClient/>
            <Services/>
            <CarouselBody/>
            <Feedback/>
            <Footer/>
        </div>
    );
};

export default Home;