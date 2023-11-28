import CarouselMain from "../CarouselMain/CarouselMain";
import './CarouselBody.css';

const CarouselBody = () => {
    return (
        <div className="md:container md:mx-auto carousel-body-section mt-10">
            <h3 style={{'padding-top': '30px'}} className="text-center text-3xl text-white">Here are some of <span style={{color: '#7AB259'}} className="text-3xl">our works</span></h3>
            <div>
                <CarouselMain/>
            </div>
        </div>
        
    );
};

export default CarouselBody;