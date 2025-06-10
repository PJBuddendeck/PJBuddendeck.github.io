import React, {useState} from "react";
import '../style.css';
import './hobbies-style.css'
import MenuBar from '../menu-bar';

const HobbiesPage = () => {
    const [menuOn, setMenu] = useState(false);

    return (
        <div>
            <div id="background" className={menuOn ? "blur" : "unblur"}></div>
            <MenuBar menuOn={menuOn} setMenu={setMenu}/>
            <div id="content" className={menuOn ? "blur" : "unblur"}>
                <div id="backdrop">
                    <h1>This page is under construction!</h1>
                    <h4>Please come back later to learn more about my personal interests and how I spend my free time.</h4>
                </div>
            </div>
        </div>
    );
};

export default HobbiesPage;