import { useEffect, useState } from "react";
import FeedbackClient from "../FeedbackClient/FeedbackClient";

const Feedback = () => {
  const [client, setClient] = useState([]);

  useEffect(() => {
    fetch("https://creative-agency-server-2tl0.onrender.com/getAllClientReview")
      .then((res) => res.json())
      .then((data) => setClient(data));
  }, []);

  return (
    <div className="md:container md:mx-auto mt-10">
      <h3 className="text-center text-3xl">
        Clients{" "}
        <span style={{ color: "#7AB259" }} className=" text-3xl">
          Feedback
        </span>
      </h3>
      <div className="grid grid-cols-3 gap-4">
        {client.map((client) => (
          <FeedbackClient key={client.id} client={client} />
        ))}
      </div>
    </div>
  );
};

export default Feedback;
