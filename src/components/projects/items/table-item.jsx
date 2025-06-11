import React from "react";
import './item-style.css';
import personal from '../../../images/personal-project.png';
import school from '../../../images/school-project.png';

const TableItem = ({ id, name, desc, language, time, type }) => {
    const imgSrc = type === 'school' ? school : personal;
    
    return (
        <div className="card">
            <div className="project-head">{name}</div>
            <img src={imgSrc} alt="Project Thumbnail" className="project-thumbnail" />
            <p className="project-desc">{desc}</p>
            <div className="project-footer">
                <span className="project-language"><div id="icon"></div>{language}</span>
                <span className="project-time">{time}</span>
                <span className="project-type">{type}</span>
            </div>
        </div>
    );
};

export default TableItem;