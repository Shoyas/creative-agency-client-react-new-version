import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";

const MakeAdmin = () => {
  const [loggedInUser] = useContext(AuthContext);
  const { register, handleSubmit, errors } = useForm();

  const onSubmitAdmin = (admin) => {
    admin.createDate = new Date();
    fetch("https://creative-agency-server-2tl0.onrender.com/addAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(admin),
    })
      .then((res) => res.json())
      .then((success) => {
        alert("Done", success);
      });
  };
  return (
    <div className="flex flex-row">
      <div className="basis-1/12">
        <Sidebar />
      </div>
      <div className="basis-10/12">
        <span className="dashboard-tagline">
          <h3>Add Admin</h3>
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
            <form onSubmit={handleSubmit(onSubmitAdmin)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Make Admin</span>
                </label>
                <input
                  type="email"
                  placeholder="Email address"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </span>
      </div>
    </div>
  );
};

export default MakeAdmin;
