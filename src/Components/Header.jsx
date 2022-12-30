 import React from "react";
 import Logo from "../Assets/logo.png";
 import '../Styles/Header.css';

 export default function Header() {
     return (
         <div className="navbar">
             <nav className="navbar_links">
             <a href="#home" className="big_screen">
                 <img className='logo' src={Logo} alt="A logo with the initial PR " />
             </a>
             <ul className="nav_menu">
                 <li>
                     <a href="#home" className="mobile_screen">
                         <img className="logo" src={Logo} alt="A logo with the initial PR" />
                     </a>
                 </li>
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
