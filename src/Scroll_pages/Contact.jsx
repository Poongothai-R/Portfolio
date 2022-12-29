import '../Styles/contact.css';
import ContactData from '../Data/Contact_data.json';
import ContactCard from '../Components/Contact_card';
import Footer from "../Components/Footer";


export default function Contact() {
    const contactItem = ContactData.map((recs) => (
            <ContactCard key={recs.id} data={recs} />
        )
    );
    return (
        <div className="contact" id="contact">
            <div className="contact-title">Contact</div>
            <div className="contact-desc">
                <p>Here is my contact information if you are interested in starting a collaboration</p></div>
            <div className="contact-detail">{contactItem}</div>
           <Footer/>
        </div>
    );
};