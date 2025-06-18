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
                        <p>
                            I was born on April 8th, 2003, and lived in the Northern Virginia area for my entire early life. 
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
                        <p>
                            My time at the College of William & Mary was an incredible experience, both academically and personally. Over the
                            course of my four years at the college, I was able to take a wide variety of computer science classes, teaching me not
                            just the fundamentals of programming, but also countless applicable skills and concepts that I will be able to use in my
                            future career. From the introductory courses such as Data Structures and Intro to Software Development, to advanced courses
                            like Computer Graphics and Software Engineering, I thoroughly enjoyed learning more about the various subfields and niches of
                            computer science. I appreciated the balance of theoretical and practical knowledge provided by the curriculum, and I believe
                            that the collaborative and project-based nature of many classes have prepared me well for working in a professional environment.
                            Additionally, the courses I took exposed me to a variety of programming languages and tools, spanning from Assembly code to web development.
                            I believe that my diverse skill set will allow me to adapt to a variety of roles in the future, and I am eager to dive into the workforce.
                            A full list of the computer science courses I took can be found on my resume, which is available for download at the top of this page.
                        </p>
                        <br />
                        <p>
                            In addition to my computer science major, I also decided to pursue a minor in data science. While these subjects are very
                            similar in nature, I felt that the data science curriculum would provide me with a greater understanding of artificial intelligence,
                            machine learning, statistics, and data analysis, all of which are incredibly relevant in today's technology landscape. Classes such
                            as Introduction to Data Science and Applied Machine Learning greatly contributed to my understanding of working with large datasets,
                            creating models, and using popular libraries such as TensorFlow and Scikit-Learn. These skills are undoubtably useful in the current
                            technological landscape, and I am glad I could pursue this additional area of study to complement my computer science major.
                        </p>
                        <br />
                        <p>
                            As William & Mary is a liberal arts college, I also took a wide variety of non-computer science courses that have expanded my general
                            knowledge and worldview. From Archaeology to Stellar Astronomy, Ethics to GIS, and Tonal Theory to Microeconomics, the breadth
                            of subjects I engaged with has helped me become a more well-rounded individual. I believe that this diverse educational background 
                            has helped me appreciate different perspectives and think critically about complex problems, which will be invaluable in both 
                            my future career and personal life. My time at William & Mary shaped so much of who I am today, and I will always be grateful for
                            the years I spent there.
                        </p>
                    </div>
                    <div className="about-section">
                        <h2>Professional Experience</h2>
                        <p>
                            Due to personal circumstances and life events, I did not manage to secure any internships over the course of my college career.
                            However, I did work standard summer jobs in order to develop my work ethic and soft skills. During the summer of 2023,
                            I worked as a Programming Counselor at TIC Camp, where I taught adolescent students the basics of
                            programming using Scratch and Python. About a week into the job, I was also asked to take on the additional role of
                            Robotics Counselor, where I taught students how to build and program robots using LEGO Mindstorms kits. This experience
                            taught me the values of team communication and adaptability, as working with my fellow counselors was a must, and I had
                            to rise to the occasion when asked to take on additional responsibilities. It also further reinforced my understanding of
                            programming concepts, as being able to teach others is one of the best ways to solidify your own knowledge.
                        </p>
                        <br />
                        <p>
                            Over the summer of 2024, I took on a more casual position, working as a Cat Sitter for a local cat care company.
                            As a long time cat owner and enthusiast, I enjoyed being able to follow my passion for animals while developing my
                            responsibility and time management skills. In order to live up to company standards, I had to consistently stay in
                            contact with my clients to ensure they were satisfied with my services, and I had to manage my time effecively in order
                            to meet the needs of multiple clients. This experience taught me the importance of customer service and professionalism,
                            which I believe will be invaluable in my future career.
                        </p>
                        <br />
                        <p>
                            While I have not yet had the opportunity to work in a formal computer science role, I look forward to doing so in the future.
                            For now, I continue to work on personal projects in order to develop my skills and gain experience in the field. Please take a
                            look at my <a href="#/projects">projects</a> page to view some of the computer science projects I have worked on.
                        </p>
                    </div>
                    <div className="about-section">
                        <h2>Learn More</h2>
                        <p>To learn more about my hobbies and personal interests, please look forward to the completion of my <a href="#/hobbies">hobbies </a> 
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