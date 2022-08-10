//Import Icon
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'


const ServicesSection = () => {
    return ( 
        <div className="services">
            <div className="description">
                <h2>Hi <span>Quality</span> Services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="Clock Icon" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Random text is shown here. Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt="Teamwork Icon" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Random text is shown here. Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} alt="Diaphragm Icon"/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Random text is shown here. Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="Money Icon"/>
                            <h3>Money</h3>
                        </div>
                        <p>Random text is shown here. Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className="img">
                <img src={home2} alt="Camera Icon" />
            </div>
        </div>
     );
}
 
export default ServicesSection;