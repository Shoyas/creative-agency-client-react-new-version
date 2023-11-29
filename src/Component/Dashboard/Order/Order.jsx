import { useContext } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Order.css";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";

const Order = () => {
  const [loggedInUser] = useContext(AuthContext);
  const { name } = useParams();

  const { register, handleSubmit } = useForm();

  const onSubmitOrder = (data) => {
    data.ordererDate = new Date();

    fetch("https://creative-agency-server-2tl0.onrender.com/addClientOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        alert("Thanks for your order", success);
        // {
        //   success && (
        //     <div className="toast">
        //       <div className="alert alert-info">
        //         <span>Thanks for your order.</span>
        //       </div>
        //     </div>
        //   );
        // }
      });
  };

  return (
    <div className="flex flex-row">
      <div className="basis-1/12">
        <Sidebar />
      </div>
      <div className="basis-10/12">
        <span className="dashboard-tagline">
          <h3>Order</h3>
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
            <form onSubmit={handleSubmit(onSubmitOrder)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  defaultValue={loggedInUser.name}
                  className="input input-bordered"
                  {...register("name", { required: true })}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your email address"
                  defaultValue={loggedInUser.email}
                  className="input input-bordered"
                  {...register("email", { required: true })}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Order Service Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Service Name"
                  defaultValue={name}
                  className="input input-bordered"
                  {...register("service", { required: true })}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Describe Requirements</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Your message"
                  className="textarea textarea-bordered textarea-md w-full max-w-xs"
                  {...register("description", { required: true })}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  className="input input-bordered"
                  {...register("price", { required: true })}
                  required
                />
              </div>
              <input type="file" className="upload-file"></input>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Send</button>
              </div>
            </form>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Order;
