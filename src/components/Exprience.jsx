import './Exprience.css';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Exprience = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[]);

  return (
    <div>
      <div className="container-exe">
        <h2 id='exhead'>I completed my Internships that is :--</h2>
        <div data-aos="flip-left" className="excard">
        <h2 id='heading-role'> Role :-- Frontend Developer</h2>
        <p id='para-bio'>I completed my internship from samyak Istution Jaipur as a Frontend-developer.I work there techinical skills as -- HTML , CSS , JAVASCRIPT , BOOTSTRAP . I completed this internship from August 2022 to Feburary 2023 .</p>
        <button id="btnpdf"><a href="">Click For Certificate</a></button>
        </div>


        <div data-aos="flip-right" className="excard">
            <h2 id="heading-role2">Role :-- Frontend Developer</h2>
            <p id="paro-bio2">I completed my internship from Proactive Digital Marketing Jaipur as a Frontend-developer.I work there techinical skills as -- HTML , CSS , JAVASCRIPT , BOOTSTRAP, REACT JS . I completed this internship from Octomber 2023 to December 2023 .</p>
        </div>

      </div>
    </div>
  )
}

export default Exprience
