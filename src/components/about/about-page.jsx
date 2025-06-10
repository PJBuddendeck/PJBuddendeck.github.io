import React, {useState} from "react";
import '../style.css';
import './about-style.css';
import MenuBar from '../menu-bar';
import resume from '../../images/resume.pdf';

const AboutPage = () => {
    const [menuOn, setMenu] = useState(false);

    return (
        <div>
            <div id="background" className={menuOn ? "blur" : "unblur"}></div>
            <MenuBar menuOn={menuOn} setMenu={setMenu}/>
            <div id="content" className={menuOn ? "blur" : "unblur"}>
                <div id="backdrop">
                    <h1>This page is under construction!</h1>
                    <h4>Please come back later to learn more about my early life, education, and work experiences.</h4>
                    <a href={resume} download="Peter Buddendeck Resume">Click Here to Download my Resume</a>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;