import Sidebar from "./Sidebar/Sidebar";
import "./Dashboard.css";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(AuthContext);
  return (
    <div className="flex">
      <div className="flex-initial w-32">
        <Sidebar />
      </div>
      <div className="flex-initial w-64">
        <span className="dashboard-tagline">
          <h3 className="text-3xl">Dashboard</h3>
        </span>

        <div className="dashboard-field">
          <h3>
            Welcome... <br /> {loggedInUser.name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
