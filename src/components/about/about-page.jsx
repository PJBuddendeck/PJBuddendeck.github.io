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
                    <h1 id="title" className="fade1">About Me</h1>
                    <a href={resume} download="Peter Buddendeck Resume" className="resume-link fade1 fade2">Download my Resume</a>
                    <div className="fade1 fade2 fade3">
                    <div className="about-section">
                        <h2>Early Life & Education</h2>
                        <p>I was born on April 8th, 2003, and lived in the Northern Virginia area for my entire early life. 
                            I attended elementary school at Beech Tree Elementary in Falls Church, VA, and continued my early
                            education at Glasgow Middle School. While at Glasgow, I participated in an after-school coding club
                            sponsored by Capital One, which sparked my interest in computer science. I have always loved puzzles,
                            video games, and creative problem solving, so learning to code felt like a natural extension of those
                            passions. It would not be until a few years later that I would continue my computer science journey,
                            but that experience laid the foundation for my future studies in the field.
                        </p>
                            <br />
                        <p>
                            After finishing my time at Glasgow, I was given a choice of high schools to attend. I ultimately chose
                            to go to Falls Church High School, as I preferred the AP curriculum over IB classes. It was during my junior
                            year of high school that I took my first formal computer science class, AP Computer Science A. I had room in my
                            schedule for one more elective, and knowing how much I enjoyed my experience coding in middle school, I decided
                            to give it a try. I quickly fell in love with the subject, and for the first time in my educational journey, I
                            felt as though I had found something that truly clicked with me. I enjoyed the class so much that I decided to take
                            the follow-up course, Data Structures, during my senior year, and while it was completely virtual due to the COVID-19 
                            pandemic, it cemented my love for computer science. When applying for colleges, I knew that I wanted to continue 
                            studying computer science at a higher level, and I decided to continue my education in the subject at the College of 
                            William & Mary.
                        </p>
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
                        <h2>Learn More</h2>
                        <p>To learn more about my hobbies and personal interests, please look forward to the completion of my <a href="#/hobbies">hobbies</a> 
                            page on this website. Additionally, please take a look at my <a href="#/projects">projects</a> page to view some of the 
                            computer science projects I have worked on, and please download my resume at the top of this page for a concise overview 
                            of my skills and experiences. Thank you for visiting my website!
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;