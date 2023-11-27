import { useEffect, useState } from "react";


const Services = () => {
    const [service, setService] = useState([]);
    // Activation of searching
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        fetch('https://creative-agency-server-2tl0.onrender.com/getAddedService')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default Services;