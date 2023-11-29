import { useForm } from "react-hook-form";
import "./Contact.css";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useNavigate();

  const onSubmitContact = (data) => {
    console.log(data);
    history("/home");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmitContact)}>
        <input
          className="form-item"
          type="email"
          name="email"
          placeholder="Your email address"
          id=""
          {...register("email", { required: true })}
        />
        <br />
        {errors.email && <span>Email is required</span>}
        <br />
        <br />
        <input
          className="form-item"
          type="text"
          name="name"
          placeholder="Your name/company's name"
          id=""
          {...register("name", { required: true })}
        />
        <br />
        {errors.name && <span>Name is required</span>}
        <br />
        <br />
        <textarea
          className="form-item"
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Your message"
          {...register("message", { required: true })}
        />
        <br />
        {errors.message && <span>Message is required</span>}
        <br />
        <br />

        <button className="btn">
          <input type="submit" />
        </button>
      </form>
    </>
  );
};

export default Contact;
