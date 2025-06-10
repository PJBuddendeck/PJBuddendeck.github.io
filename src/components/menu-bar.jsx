import React, { useEffect, useRef } from "react";
import logo from '../images/logo.png';

const MenuBar = ({ menuOn, setMenu }) => {
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenu(prev => !prev);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenu(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef, setMenu]);

    return (
        <div id="navbar">
            {menuOn && (
                <ul ref={menuRef} className="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="#/about">About</a></li>
                    <li><a href="#/projects">Projects</a></li>
                    <li><a href="#/hobbies">Hobbies</a></li>
                    <li><a href="#/contact">Contact</a></li>
                </ul>
            )}
            <div id="inner-nav" className={menuOn ? "blur" : "unblur"}>
                <ul>
                    <li 
                        onClick={toggleMenu} 
                        role="button" 
                        tabIndex="0" 
                        onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
                            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                        </svg>
                    </li>
                    <li className="hideNavbar"><a href="/">Home</a></li>
                    <li className="hideNavbar"><a href="#/about">About</a></li>
                    <li className="hideNavbar"><a href="#/projects">Projects</a></li>
                    <li className="hideNavbar"><a href="#/hobbies">Hobbies</a></li>
                    <li className="hideNavbar"><a href="#/contact">Contact</a></li>
                </ul>
                <img src={logo} alt="Website logo" />
            </div>
        </div>
    );
};

export default MenuBar;