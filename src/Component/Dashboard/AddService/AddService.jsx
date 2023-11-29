import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import Sidebar from "../Sidebar/Sidebar";

const AddService = () => {
  const [loggedInUser] = useContext(AuthContext);
  const [information, setInformation] = useState({});
  const [file, setFile] = useState(null);

  const handleBlur = (event) => {
    const newInformation = { ...information };
    newInformation[event.target.name] = event.target.value;
    setInformation(newInformation);
  };
  console.log(information);
  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const addServiceSubmit = (p) => {
    const formData = new FormData();
    p.preventDefault();
    formData.append("file", file);
    formData.append("title", information.title);
    formData.append("description", information.description);

    fetch("https://creative-agency-server-2tl0.onrender.com/adminAddService", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        alert("New service added", data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-row">
      <div className="basis-1/12">
        <Sidebar />
      </div>
      <div className="basis-10/12">
        <span className="dashboard-tagline">
          <h3>Add Service</h3>
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
            <form onSubmit={addServiceSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Service Title"
                  name="title"
                  className="input input-bordered"
                  onBlur={handleBlur}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Enter Description"
                  name="description"
                  className="textarea textarea-bordered textarea-md w-full max-w-xs"
                  onBlur={handleBlur}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Icon</span>
                </label>
                <input
                  type="file"
                  className="upload-file"
                  onChange={handleFileChange}
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

export default AddService;
