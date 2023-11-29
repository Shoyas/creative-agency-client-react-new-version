import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { title, image } = service;

  return (
    <div className="place-content-around mt-5 ml-10 mb-5 mr-10">
      <Link className="nav-link" to={`/dashboard/order/${title}`}>
        {image ? (
          <img
            className="object-cover mb-3 service-img"
            src={`data:image/png;base64,${service.image.img}`}
          />
        ) : (
          <img
            className="object-cover mb-3 service-img"
            src={`https://creative-agency-server-2tl0.onrender.com/${service.img}`}
            alt=""
          />
        )}
        <h5 className="service-title text-lg">{service.title}</h5>
        <p className="service-description text-sm">{service.description}</p>
      </Link>
    </div>
  );
};

Service.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.shape({
      img: PropTypes.string.isRequired,
    }),
    img: PropTypes.string,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Service;
