 import React from "react";
 import Logo from "../Assets/logo.png";
 import '../Styles/Header.css';

 export default function Header() {
     return (
         <div className="navbar">
             <nav>
             <a href="#home" >
                 <img className='logo' src={Logo} alt="A logo with the initial PR " />
             </a>
             <ul >
                 <li>
                     <a href="#about">About</a>
                 </li>
                 <li>
                     <a href="#project">Project</a>
                 </li>
                 <li>
                     <a href="#tech">Tech</a>
                 </li>
                 <li>
                     <a href="#contact">Contact</a>
                 </li>
             </ul>
         </nav>
         </div>
     );
 }
