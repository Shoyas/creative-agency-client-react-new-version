import { useContext, useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { AuthContext } from "../../../Providers/AuthProviders";
import AllServiceListTable from "../AllServiceListTable/AllServiceListTable";

const AllServiceList = () => {
  const [loggedInUser] = useContext(AuthContext);
  const [allServicesListItem, setAllServicesListItem] = useState([]);
  useEffect(() => {
    fetch("https://creative-agency-server-2tl0.onrender.com/getAllClientsOrder")
      .then((res) => res.json())
      .then((data) => setAllServicesListItem(data));
  }, []);
  return (
    <div className="flex flex-row">
      <div className="basis-1/12">
        <Sidebar />
      </div>
      <div className="basis-10/12">
        <span className="dashboard-tagline">
          <h3>All Service List</h3>
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
            <AllServiceListTable allServicesListItem={allServicesListItem} />
          </div>
        </span>
      </div>
    </div>
  );
};

export default AllServiceList;
