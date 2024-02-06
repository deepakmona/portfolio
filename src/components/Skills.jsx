
import './Skills.css'
import { useEffect } from 'react';
import { FaCircleCheck } from "react-icons/fa6";
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Exprience() {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])


  return (
    <div>
      <div className="exprience">
        <div className="expr-small">

      <div data-aos="flip-down"  className="half-ex">
      <h2>Frontend-Skills</h2>
      <div className="forthpart"><FaCircleCheck id='icon00' /><h3>HTML</h3><br/><p>Advance</p></div>
      <div className="forthpart"><FaCircleCheck id='icon00' /><h3>CSS</h3><br/><p>Advance</p></div>
      <div className="forthpart"><FaCircleCheck id='icon00' /><h3>JAVASCRIPT</h3><br/><p>Intermediate</p></div>
      <div className="forthpart"><FaCircleCheck id='icon00' /><h3>BOOTSTRAP</h3><br/><p>Intermediate</p></div>
      </div>


      <div data-aos="flip-up" className="half-ex">
      <h2>Devops & Framworks</h2>
      <div className="forthpart"><FaCircleCheck id='icon00' /><h3>REACT JS</h3><br/><p>Intermediate</p></div>
      <div className="forthpart"><FaCircleCheck id='icon00' /><h3>NODE JS</h3><br/><p>Basic</p></div>
      <div className="forthpart"><FaCircleCheck id='icon00' /><h3>GIT</h3><br/><p>Basic</p></div>
      <div className="forthpart"><FaCircleCheck id='icon00' /><h3>TAILWIND</h3><br/><p>Intermediate</p></div>
      </div>




        </div>
      </div>
    </div>
  )
}
