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
                    <h1 id="title">About Me</h1>
                    <div className="about-section">
                        <h2>Early Life & Education</h2>
                        <p>Details about my early life and foundational education will be added soon.</p>
                    </div>
                    <div className="about-section">
                        <h2>College Education</h2>
                        <p>Information about my college journey, major, and academic highlights will be shared here.</p>
                    </div>
                    <div className="about-section">
                        <h2>Professional Experience</h2>
                        <p>My work experience, internships, and professional growth will be described in this section.</p>
                    </div>
                    <div className="about-section">
                        <h2>More</h2>
                        <p>Additional interests, hobbies, and future goals will be featured here soon.</p>
                    </div>
                    <a href={resume} download="Peter Buddendeck Resume" className="resume-link">Download my Resume</a>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;