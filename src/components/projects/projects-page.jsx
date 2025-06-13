import React, {useState, useEffect} from "react";
import '../style.css';
import './projects-style.css'
import MenuBar from '../menu-bar';
import TableItem from './items/table-item'

const ProjectsPage = () => {
    const [menuOn, setMenu] = useState(false);
    const [projects, setProjects] = React.useState(['project1', 'project2', 'project3']);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");

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

    // Helper to parse season and year for sorting
    const seasonOrder = { '':0, 'Spring': 1, 'Summer': 2, 'Autumn': 3, 'Winter':4 };
    function parseTime(timeStr) {
        if (!timeStr) return { season: 0, year: 0 };
        const [season, year] = timeStr.split(" ");
        return { season: seasonOrder[season] || 0, year: parseInt(year) || 0 };
    }

    // Filter projects by search
    const filteredProjects = sampleProjects.filter(project => {
        if (!search) return true;
        const searchLower = search.toLowerCase();
        return Object.values(project).some(val =>
            String(val).toLowerCase().includes(searchLower)
        );
    });

    // Sort projects
    const sortedProjects = [...filteredProjects].sort((a, b) => {
        if (sort === "name") {
            return a.name.localeCompare(b.name);
        } else if (sort === "language") {
            return a.language.localeCompare(b.language);
        } else if (sort === "time") {
            // Most recent to oldest
            const aTime = parseTime(a.time);
            const bTime = parseTime(b.time);
            if (aTime.year !== bTime.year) return bTime.year - aTime.year;
            return bTime.season - aTime.season;
        } else if (sort === "time2") {
            // Oldest to most recent
            const aTime = parseTime(a.time);
            const bTime = parseTime(b.time);
            if (aTime.year !== bTime.year) return aTime.year - bTime.year;
            return aTime.season - bTime.season;
        }
        return 0;
    });

    const totalPages = Math.ceil(sortedProjects.length / rowsPerPage);
    const startIdx = (currentPage - 1) * rowsPerPage;
    const endIdx = startIdx + rowsPerPage;
    const currentProjects = sortedProjects.slice(startIdx, endIdx);

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
                            <input
                                type="text"
                                placeholder="Search projects"
                                className="project-search-input"
                                value={search}
                                onChange={e => {
                                    setSearch(e.target.value);
                                    setCurrentPage(1);
                                }}
                            />
                            <select className="project-sort-select" value={sort} onChange={e => { setSort(e.target.value); setCurrentPage(1); }}>
                                <option value="time">Sort by:</option>
                                <option value="name">Name</option>
                                <option value="language">Language</option>
                                <option value="time2">Date Descending</option>
                            </select>
                        </div>
                        <div className="table-items-grid">
                            {currentProjects.length === 0 ? (
                                <div className="project-table-empty">No projects found.</div>
                            ) : (
                                currentProjects.map((project) => (
                                    <TableItem key={project.id} {...project}/>
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