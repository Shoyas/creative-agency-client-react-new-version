import PropTypes from "prop-types";
import "./FeedbackClient.css";
import proPic from "../../../assets/images/pngwing.com.png";

const FeedbackClient = ({ client }) => {
  return (
    <div className="feedback-client-margin p-10">
      <span className="client-info">
        <span className="flex space-x-2 client-name-tag">
          <img className="w-10" src={proPic} alt={proPic} />
          <span>
            <h5 className="text-xl">{client.name}</h5>
            <h6 className="text-lg mt-2 text-slate-500">
              {client.companyName}
            </h6>
          </span>
        </span>
      </span>
      <p className="mt-5 text-stone-500">{client.description}</p>
    </div>
  );
};

FeedbackClient.propTypes = {
  client: PropTypes.shape({
    name: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeedbackClient;
