import React, {useState} from "react";
import '../style.css';
import './projects-style.css'
import MenuBar from '../menu-bar';

const ProjectsPage = () => {
    const [menuOn, setMenu] = useState(false);

    return (
        <div>
            <div id="background" className={menuOn ? "blur" : "unblur"}></div>
            <MenuBar menuOn={menuOn} setMenu={setMenu}/>
            <div id="content" className={menuOn ? "blur" : "unblur"}>
                <div id="backdrop">
                    <h1>This page is under construction!</h1>
                    <h4>Please come back later to learn more about my computer science projects.
                        Some examples of tools I have experience with are Java, Python, C, C++, HTML, CSS, JavaScript, React, Git, GitHub, SDL2, HuggingFace, TensorFlow, SQL, and Scikit-Learn.
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;