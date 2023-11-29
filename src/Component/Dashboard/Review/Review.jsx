import { useContext } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useForm } from "react-hook-form";

const Review = () => {
  const [loggedInUser] = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const onSubmitReview = (info) => {
    info.reviewDate = new Date();
    fetch("https://creative-agency-server-2tl0.onrender.com/addClientReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((success) => {
        alert("Thanks for your valuable review", success);
      });
    console.log("Reviews: ", info);
  };

  return (
    <div className="flex flex-row">
      <div className="basis-1/12">
        <Sidebar />
      </div>
      <div className="basis-10/12">
        <span className="dashboard-tagline">
          <h3>Review</h3>
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
            <form onSubmit={handleSubmit(onSubmitReview)} className="card-body">
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
                  <span className="label-text">Company Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Company's name, designation"
                  className="input input-bordered"
                  {...register("companyName", { required: true })}
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

export default Review;
