import React from "react";
import './error-style.css';

const NotFound = () => {
    return (
        <div>
            <div id="err-background"></div>
            <div id="err-content">
                <h1>Error 404</h1>
                <p>The page you are trying to reach is unavailable. Please click <a href="/">this link</a> to return to the home page.</p>
            </div>
        </div>
    );
};

export default NotFound;