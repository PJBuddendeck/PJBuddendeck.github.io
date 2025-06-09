import React, {useState, useEffect, useRef} from "react";
import '../style.css';
import './contact-style.css';
import logo from '../../images/logo.png';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const ContactPage = () => {
    const [menuOn, setMenu] = useState(false);
    const [showSuccess, setSuccess] = useState(false);
    const menuRef = useRef(null);
    const formRef = useRef(null);
    const succRef = useRef(null);
    
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

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "f7f5e1ee-1cc2-42f5-b6cc-865125a26dde");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setSuccess(true);
        }

        formRef.current.reset();
    };

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
                <div id="inner-nav" className={menuOn ? "blur" : "unblur"}>
                    <ul>
                        <li onClick={toggleMenu}>{<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>}</li>
                        <li className="hideNavbar"><a href="/">Home</a></li>
                        <li className="hideNavbar"><a href="/about">About</a></li>
                        <li className="hideNavbar"><a href="/projects">Projects</a></li>
                        <li className="hideNavbar"><a href="/hobbies">Hobbies</a></li>
                        <li className="hideNavbar"><a href="/contact">Contact</a></li>
                    </ul>
                    <img src={logo} alt="Website logo" />
                </div>
            </div>
            <div id="content" className={menuOn ? "blur" : "unblur"}>
                <div id="backdrop">
                    <div id='contact-form'>
                        {showSuccess && (<div id='form-success' ref={succRef}>
                            The form has been successfully submitted!
                        </div>)}
                    <h1>Contact Form</h1>
                        <form ref={formRef} onSubmit={onSubmit}>
                            <div className='input'></div>
                                <label>Full Name</label><br />
                                <input id="name" type="text" className='field' placeholder="Please enter your full name." name='name' autoComplete="on" required/>
                            <div className='input'></div>
                                <label>Email Address</label><br />
                                <input id="email" type="email" className='field' placeholder="Please enter your email address." name='email' autoComplete="on" required/>
                            <div className='input'></div>
                                <label>Message</label><br />
                                <textarea name='message' className='message' placeholder="Please enter your message." required></textarea>
                            <div className='buttonarea'>
                                <br /><button type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                    <div id='platforms'>
                        <h3>Additionally, you can find me on the following platforms:</h3>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/peter-buddendeck-9a538a345/" rel="noreferrer" target="_blank"><FaLinkedin /></a></li>
                            <li><a href="https://www.instagram.com/peterb_8/" rel="noreferrer" target="_blank"><FaInstagram /></a></li>
                            <li><a href="https://www.facebook.com/people/Peter-Buddendeck/pfbid0H8k3ujec4X9Su2eVLFPUfgqqMC59mEZqNvx9q88qi76uZCJqkmJHfgsiSbKbG1EUl/" rel="noreferrer" target="_blank"><FaFacebook /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;