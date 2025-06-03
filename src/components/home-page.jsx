import React, {useState, useEffect, useRef} from "react";
import './style.css';
import logo from '../images/logo.png'

const HomePage = () => {
    const [menuOn, setMenu] = useState(false);
    const menuRef = useRef(null);
    
    const toggleMenu = () => {
        setMenu(!menuOn);
    }

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
    }, [menuRef]);

    return (
        <div>
            <div id="background" className={menuOn ? "blur" : "unblur"}></div>
            <div id="navbar">
                {menuOn && (<ul ref = {menuRef} className="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/hobbies">Hobbies</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>)}
                <div className={menuOn ? "blur" : "unblur"}>
                    <ul>
                        <li onClick={toggleMenu}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/hobbies">Hobbies</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                    <img src={logo} alt="Website logo" />
                </div>
            </div>
            <div id="content" className={menuOn ? "blur" : "unblur"}>
                <div className="openingImage">
                    <p>Look at my awesome website!!</p>
                </div>
                <div className='about'>
                    <p>more testing text</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;