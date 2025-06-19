import React, {useState} from "react";
import '../../style.css';
import '../projects-style.css'
import MenuBar from '../../menu-bar';
import { useParams, useNavigate } from 'react-router-dom';
import projectsData from '../../../data/projects.json';

const Project = () => {
    const [menuOn, setMenu] = useState(false);

    const { id } = useParams();
    const navigate = useNavigate();
    const project = projectsData.find(p => p.id === Number(id));

    React.useEffect(() => {
        if (!project) {
            navigate('/projects');
        }
    }, [project, navigate]);

    if (!project) return null;
  
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

export default Project;