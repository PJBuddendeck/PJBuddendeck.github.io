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
    const project = projectsData.find(p => String(p.id) === String(id));

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
                        <div className="project-detail-container">
                            <h1>{project.name}</h1>
                            <h3>Language: {project.language}</h3>
                            <h4>Type: {project.type}</h4>
                            <h4>Date: {project.time}</h4>
                            <p>{project.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;