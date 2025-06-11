import React, {useState, useEffect} from "react";
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
            id: 3,
            name: "Personal Website",
            desc: "The website you are currently viewing, built with React and CSS.",
            language: "React",
            time: "Summer 2025",
            type: "Personal"
        },
        {
            id: 4,
            name: "Stream Overlay",
            desc: "Used for the William & Mary Smash Bros Club's Twitch streams.",
            language: "HTML",
            time: "Winter 2024",
            type: "Personal"
        },
        {
            id: 5,
            name: "Personal Website",
            desc: "The website you are currently viewing, built with React and CSS.",
            language: "React",
            time: "Summer 2025",
            type: "Personal"
        },
        {
            id: 6,
            name: "Stream Overlay",
            desc: "Used for the William & Mary Smash Bros Club's Twitch streams.",
            language: "HTML",
            time: "Winter 2024",
            type: "Personal"
        },
        {
            id: 7,
            name: "Personal Website",
            desc: "The website you are currently viewing, built with React and CSS.",
            language: "React",
            time: "Summer 2025",
            type: "Personal"
        },
        {
            id: 8,
            name: "Stream Overlay",
            desc: "Used for the William & Mary Smash Bros Club's Twitch streams.",
            language: "HTML",
            time: "Winter 2024",
            type: "Personal"
        },
        {
            id: 9,
            name: "Personal Website",
            desc: "The website you are currently viewing, built with React and CSS.",
            language: "React",
            time: "Summer 2025",
            type: "Personal"
        },
        {
            id: 10,
            name: "Stream Overlay",
            desc: "Used for the William & Mary Smash Bros Club's Twitch streams.",
            language: "HTML",
            time: "Winter 2024",
            type: "Personal"
        },
        {
            id: 11,
            name: "Personal Website",
            desc: "The website you are currently viewing, built with React and CSS.",
            language: "React",
            time: "Summer 2025",
            type: "Personal"
        },
        {
            id: 12,
            name: "Stream Overlay",
            desc: "Used for the William & Mary Smash Bros Club's Twitch streams.",
            language: "HTML",
            time: "Winter 2024",
            type: "Personal"
        },
        {
            id: 13,
            name: "Personal Website",
            desc: "The website you are currently viewing, built with React and CSS.",
            language: "React",
            time: "Summer 2025",
            type: "Personal"
        },
        {
            id: 14,
            name: "Stream Overlay",
            desc: "Used for the William & Mary Smash Bros Club's Twitch streams.",
            language: "HTML",
            time: "Winter 2024",
            type: "Personal"
        },
        {
            id: 15,
            name: "Personal Website",
            desc: "The website you are currently viewing, built with React and CSS.",
            language: "React",
            time: "Summer 2025",
            type: "Personal"
        },
        {
            id: 16,
            name: "Stream Overlay",
            desc: "Used for the William & Mary Smash Bros Club's Twitch streams.",
            language: "HTML",
            time: "Winter 2024",
            type: "Personal"
        }
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(16);

    useEffect(() => {
        function updateRowsPerPage() {
            const width = window.innerWidth;
            if (width > 1500) setRowsPerPage(16);
            else if (width > 1100) setRowsPerPage(12);
            else if (width > 700) setRowsPerPage(8);
            else setRowsPerPage(4);
            setCurrentPage(1);
        }
        updateRowsPerPage();
        window.addEventListener('resize', updateRowsPerPage);
        return () => window.removeEventListener('resize', updateRowsPerPage);
    }, []);

    const totalPages = Math.ceil(sampleProjects.length / rowsPerPage);
    const startIdx = (currentPage - 1) * rowsPerPage;
    const endIdx = startIdx + rowsPerPage;
    const currentProjects = sampleProjects.slice(startIdx, endIdx);

    const handlePrev = () => setCurrentPage((p) => Math.max(1, p - 1));
    const handleNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));

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
                        <div className="table-items-grid">
                            {currentProjects.length === 0 ? (
                                <div className="project-table-empty">No projects found.</div>
                            ) : (
                                currentProjects.map((project) => (
                                    <TableItem key={project.id} {...project} />
                                ))
                            )}
                        </div>
                        {sampleProjects.length > rowsPerPage && (
                            <div className="pagination-controls">
                                <button onClick={handlePrev} disabled={currentPage === 1}>Prev</button>
                                <span>Page {currentPage} of {totalPages}</span>
                                <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;