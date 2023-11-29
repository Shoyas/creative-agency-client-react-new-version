import { Link, useLocation, useNavigate } from "react-router-dom";

import logo from "../../assets/images/logos/logo.png";
import "./Login.css";
import Navigation from "../Home/Navigation/Navigation";
import FooterCopyRight from "../Home/Footer/FooterCopyRight";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "./firebase.config";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(AuthContext);

  const history = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const auth = getAuth(app);
  console.log("User: ", loggedInUser);
  const provider = new GoogleAuthProvider();
  const ClickForGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);

        history(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="md:container md:mx-auto login-area">
      <Navigation />
      <div className="flex justify-center items-center">
        <img className="logo-img" src={logo} alt="Creative Agency" />
      </div>

      <div className="login-popup text-center ">
        <br />
        <br />
        <br />
        <h5 className="text-xl">Login With</h5>

        <button
          onClick={ClickForGoogleSignIn}
          className="btn btn-outline-dark google-btn"
        >
          Continue with Google
        </button>

        <br />
        <br />
        <h6>
          Don't have an account ?{" "}
          <Link to="/login" style={{ color: "blue" }}>
            Create an account
          </Link>{" "}
        </h6>
      </div>
      <div className="text-center mt-20 pb-20">
        <FooterCopyRight />
      </div>
    </div>
  );
};

export default Login;
