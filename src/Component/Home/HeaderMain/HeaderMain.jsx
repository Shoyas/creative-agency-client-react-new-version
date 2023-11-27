import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <div className="headerMain-content md:container md:mx-auto">
            <Navigation/>
            <Header/>
        </div>
    );
};

export default HeaderMain;