import React from "react";
import picture from "../Assets/photo.jpg";
import '../Styles/About.css';

export default function About() {
    return (
        <div className="container_main" id="about">
            <div className="container_sub">
                <div className="page_left">
                    <h2 className="title">About Me</h2>
                    <p>
                        My name is Poongothai rajesh. I am a passionate FrontEnd Developer
                        based in Stockholm, Sweden.
                    </p>
                    <p>
                        I have a passion for developing user-friendly, accessible and
                        responsive websites with JavaScript / ReactJS / HTML / CSS. I never
                        stop learning and want to challenge myself in every new project.
                    </p>
                </div>
                <div className="page_right">
                    <img className="about_img" src={picture} alt="Indian lady" />
                </div>
            </div>
        </div>
    );
}