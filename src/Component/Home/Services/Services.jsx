import { useEffect, useState } from "react";
import Service from "../Service/Service";
import './Services.css';


const Services = () => {
    const [service, setService] = useState([]);
    // Activation of searching
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        fetch('https://creative-agency-server-2tl0.onrender.com/getAddedService')
        .then(res => res.json())
        .then(data => setService(data))
    }, []);
    return (
        <div className="md:container md:mx-auto" style={{'margin-top': '50px', 'backgroundColor': '#CCC'}}>
            <h3 className="text-center text-3xl pt-5">Provide awesome <span className="text-3xl" style={{color: '#7AB259'}}>services</span></h3>

            <div className="search-container" style={{'marginBottom': '50px', 'marginTop': '50px'}}>
                <input 
                    type="text" 
                    className="search-box" 
                    placeholder="Search Here....." 
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }}
                />
                
            </div>
            <div className="grid grid-cols-3 gap-4">
                {
                    service.filter((val) => {
                        if(searchTerm === " "){
                            return val;
                        }
                        else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val;
                        }
                    })
                    .map(service => <Service service={service} key={service._id}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;