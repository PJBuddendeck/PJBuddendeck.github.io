import React, {useState} from "react";
import '../style.css';
import './projects-style.css'
import MenuBar from '../menu-bar';
import TableItem from './items/table-item'

const ProjectsPage = () => {
    const [menuOn, setMenu] = useState(false);
    const [projects, setProjects] = React.useState(['project1', 'project2', 'project3']);

    const handleViewProject = async (project) => {
    }

    const sampleProjects = [
        {
            id: 1,
            name: "Personal Website",
            desc: "The website you are currently viewing, built with React and CSS.",
            language: "React",
            time: "Summer 2025",
            type: "Personal"
        },
        {
            id: 2,
            name: "Stream Overlay",
            desc: "Used for the William & Mary Smash Bros Club's Twitch streams.",
            language: "HTML",
            time: "Winter 2024",
            type: "Personal"
        },
                {
            id: 1,
            name: "Personal Website",
            desc: "The website you are currently viewing, built with React and CSS.",
            language: "React",
            time: "Summer 2025",
            type: "Personal"
        },
        {
            id: 2,
            name: "Stream Overlay",
            desc: "Used for the William & Mary Smash Bros Club's Twitch streams.",
            language: "HTML",
            time: "Winter 2024",
            type: "Personal"
        },
        {
            id: 1,
            name: "Personal Website",
            desc: "The website you are currently viewing, built with React and CSS.",
            language: "React",
            time: "Summer 2025",
            type: "Personal"
        },
        {
            id: 2,
            name: "Stream Overlay",
            desc: "Used for the William & Mary Smash Bros Club's Twitch streams.",
            language: "HTML",
            time: "Winter 2024",
            type: "Personal"
        },
                {
            id: 1,
            name: "Personal Website",
            desc: "The website you are currently viewing, built with React and CSS.",
            language: "React",
            time: "Summer 2025",
            type: "Personal"
        },
        {
            id: 2,
            name: "Stream Overlay",
            desc: "Used for the William & Mary Smash Bros Club's Twitch streams.",
            language: "HTML",
            time: "Winter 2024",
            type: "Personal"
        },
                {
            id: 1,
            name: "Personal Website",
            desc: "The website you are currently viewing, built with React and CSS.",
            language: "React",
            time: "Summer 2025",
            type: "Personal"
        },
        {
            id: 2,
            name: "Stream Overlay",
            desc: "Used for the William & Mary Smash Bros Club's Twitch streams.",
            language: "HTML",
            time: "Winter 2024",
            type: "Personal"
        },
        {
            id: 1,
            name: "Personal Website",
            desc: "The website you are currently viewing, built with React and CSS.",
            language: "React",
            time: "Summer 2025",
            type: "Personal"
        },
        {
            id: 2,
            name: "Stream Overlay",
            desc: "Used for the William & Mary Smash Bros Club's Twitch streams.",
            language: "HTML",
            time: "Winter 2024",
            type: "Personal"
        }
    ];

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
                    <div id="project-table-container" className="fade1">
                        <div id="project-search-bar">
                            <input type="text" placeholder="Search projects" className="project-search-input" />
                            <select className="project-sort-select">
                                <option value="">Sort by:</option>
                                <option value="name">Name</option>
                                <option value="language">Language</option>
                                <option value="time">Date</option>
                            </select>
                        </div>
                        {projects.length === 0 ? (
                            <div className="project-table-empty">
                                No projects available
                            </div>
                        ) :
                        <div className="table-items-grid">
                            {sampleProjects.map((project) => (
                                <TableItem key={project.id} {...project} />
                            ))}
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;