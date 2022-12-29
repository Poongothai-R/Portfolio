import Github from "../Assets/contacts/github.png";
import Linkedin from "../Assets/contacts/linkedin.png";
export default function Footer(){
    return(
    <div className="footer">
        <div className="footer-icon">
            <a href="https://github.com/Poongothai-R/" target="_blank" rel="noreferrer">
                <img src={Github} alt="github-logo"/> </a>
            <a href="https://www.linkedin.com/in/poongothai-rajesh-38320087/" target="_blank" rel="noreferrer">
                <img src={Linkedin} alt="linkedin-logo"/> </a>
        </div>
        <div className='copyright'><span>©  Poongothai Rajesh 2022</span></div>
    </div>
    );
}