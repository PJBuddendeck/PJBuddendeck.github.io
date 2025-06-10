import React, {useState, useRef} from "react";
import '../style.css';
import './contact-style.css';
import MenuBar from '../menu-bar';
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const ContactPage = () => {
    const [menuOn, setMenu] = useState(false);
    const [showSuccess, setSuccess] = useState(false);
    const formRef = useRef(null);

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
            <MenuBar menuOn={menuOn} setMenu={setMenu}/>
            <div id="content" className={menuOn ? "blur" : "unblur"}>
                <div id="backdrop">
                    <div id='contact-form' className="fade1">
                        {showSuccess && (<div id='form-success'>
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
                    <div id='platforms' className="fade1 fade2">
                        <h3>Additionally, you can find me on the following platforms:</h3>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/peter-buddendeck-9a538a345/" rel="noreferrer" target="_blank"><FaLinkedin /></a></li>
                            <li><a href="https://github.com/PJBuddendeck" rel="noreferrer" target="_blank"><FaGithub /></a></li>
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