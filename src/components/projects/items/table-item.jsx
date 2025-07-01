import React from "react";
import './item-style.css';
import personal from '../../../images/personal-project.png';
import academic from '../../../images/academic-project.png';

const TableItem = ({ id, name, desc, language, time, type, onClick }) => {
    const typeToImg = {
        Personal: personal,
        Academic: academic
    };
    const imgSrc = typeToImg[type] || personal;

    return (
        <div className="card" onClick={onClick} style={{ cursor: 'pointer' }}>
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