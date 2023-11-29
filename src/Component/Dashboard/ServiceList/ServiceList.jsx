import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import Sidebar from "../Sidebar/Sidebar";
import ServiceOrderList from "../ServiceOrderList/ServiceOrderList";

const ServiceList = () => {
  const [loggedInUser] = useContext(AuthContext);
  const [orderItem, setOrderItem] = useState([]);

  useEffect(() => {
    fetch(
      "https://creative-agency-server-2tl0.onrender.com/getClientOrder?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setOrderItem(data));
  }, []);
  return (
    <div className="flex flex-row">
      <div className="basis-1/12">
        <Sidebar />
      </div>
      <div className="basis-10/12">
        <span className="dashboard-tagline">
          <h3>Service List</h3>
          <h6
            style={{
              "margin-left": "580px",
              "margin-top": "64px",
              color: "#DC3545",
            }}
          >
            {loggedInUser.name}
          </h6>
        </span>
        <span className="order-input-form">
          <div>
            {orderItem.map((orderItem) => (
              <ServiceOrderList
                key={orderItem._id}
                orderItem={orderItem}
              ></ServiceOrderList>
            ))}
          </div>
        </span>
      </div>
    </div>
  );
};

export default ServiceList;
