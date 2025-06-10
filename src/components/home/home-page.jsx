import React, {useState} from "react";
import '../style.css';
import './home-style.css';
import MenuBar from '../menu-bar';
import photo from '../../images/photo.png';

const HomePage = () => {
    const [menuOn, setMenu] = useState(false);

    return (
        <div>
            <div id="background" className={menuOn ? "blur" : "unblur"}></div>
            <MenuBar menuOn={menuOn} setMenu={setMenu}/>
            <div id="content" className={`fade1 ${menuOn ? "blur" : "unblur"}`}>
                <div className="openingImage">
                    <img className="fade1 fade2" src={photo} alt="Peter Buddendeck" width="386" height ="491px"/>
                    <h1>P<span className="yellow-text">ositive</span><br />J<span className="yellow-text">udicious</span><br />B<span className="yellow-text">right</span></h1>
                </div>
                <div className='about fade1 fade2 fade3'>
                    <p>Welcome to the official website of Peter J. Buddendeck. Thank you for visiting! Please use the navigation bar at the top of your screen to learn more about my background, interests, and experience.</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;