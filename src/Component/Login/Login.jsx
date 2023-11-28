import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import logo from "../../assets/images/logos/logo.png";
import './Login.css';
import Navigation from '../Home/Navigation/Navigation';
import FooterCopyRight from '../Home/Footer/FooterCopyRight';


const Login = () => {
    
    return (        
        <div className='md:container md:mx-auto login-area'>
            <Navigation/>
            <div className="text-center">
                <img className="logo-img" src={logo} alt=""/>
            </div>
            
            <div className="login-popup text-center ">
                <br/>
                <br/>
                <br/>
                <h5>Login With</h5>
                {/* onClick={ClickForGoogleSignIn} */}
                <button  className="btn btn-outline-dark google-btn">
                Continue with Google
                </button>
                
                <br/>
                <br/>
                <h6>Don't have an account? <Link to='/login'>Create an account</Link> </h6>
            </div>
            <div className='text-center mt-20 pb-20'>
                <FooterCopyRight/>
            </div>
        </div>
    );
};

export default Login;


