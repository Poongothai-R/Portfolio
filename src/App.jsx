import './App.css';
import Header from "./Components/Header";
import Projects from "./Scroll_pages/Projects";
import Hero from "./Scroll_pages/Hero";
import About from "./Scroll_pages/About";
import Modal from "./Components/Modal";
import {useState} from "react";
import Tech from "./Scroll_pages/Tech";

import './Styles/variable.css';
import Contact from "./Scroll_pages/Contact";


function App() {
    const [showModal, setShowModal] = useState(null);
  return (
    <div className="App">
      <Header/>
        <Hero/>
      <About/>

        <Projects setShowModal={setShowModal}/>
        <Tech/>
        <Contact/>
        <Modal showModal={showModal} setShowModal={setShowModal} />

    </div>
  );
}

export default App;
