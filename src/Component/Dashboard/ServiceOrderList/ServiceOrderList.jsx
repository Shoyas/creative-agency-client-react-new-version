import PropTypes from "prop-types";

const ServiceOrderList = ({ orderItem }) => {
  const orders = { orderItem };
  console.log("Ordered: ", orders);

  return (
    <div className="card card-side bg-base-100 shadow-xl m-5">
      <div className="card-body">
        <h2 className="card-title">Service Name: {orderItem.service}</h2>
        <p>Order details: {orderItem.description}</p>
        <p>Cost: {orderItem.price} $</p>
        <div className="card-actions justify-end">
          <select className="" id="exampleFormControlSelect1">
            <option> Pending</option>
            <option>Done</option>
          </select>
        </div>
      </div>
    </div>
  );
};

ServiceOrderList.propTypes = {
  orderItem: PropTypes.shape({
    service: PropTypes.string.isRequired,
    img: PropTypes.string,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ServiceOrderList;
