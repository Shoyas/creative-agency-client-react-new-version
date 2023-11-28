import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Component } from "react";
import Slider from "react-slick";
import slack from "../../../assets/images/logos/slack.png";
import google from "../../../assets/images/logos/google.png";
import uber from "../../../assets/images/logos/uber.png";
import netflix from "../../../assets/images/logos/netflix.png";
import aribnd from "../../../assets/images/logos/airbnb.png";
import "./CompanyClient.css";

export default class CompanyClient extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div className="md:container md:mx-auto">
        <Slider {...settings}>
          <div>
          <img className="img-size" src={slack} alt="" />
          </div>
          <div>
          <img className="img-size" src={google} alt="" />
          </div>
          <div>
          <img className="img-size" src={uber} alt="" />
          </div>
          <div>
          <img className="img-size" src={netflix} alt="" />
          </div>
          <div>
          <img className="img-size" src={aribnd} alt="" />
          </div>
          
        </Slider>
      </div>
    );
  }
}