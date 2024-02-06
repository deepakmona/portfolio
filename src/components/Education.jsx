import './Education.css'
import { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Education() {
  useEffect(()=>{
    Aos.init({duration:3000})
  },[])

  return (
    <div>
       
       <div className="educa">
          <h1 id='secofedu'>This is My Education Section @@@@@</h1>
          <div data-aos="fade-down" className="edusmall">
            <h2 id='instu'>Heigh Secondary School :---</h2>
            <h2 id='collage'>Sanskar Science School Gudha-Gorji Jhunjhunu</h2>
            <p id='year'>Year of Completion: 2019</p>
            <h2 id='percent'>I have 79% </h2>
          </div>

          <div data-aos="fade-down" className="edusmall">
            <h2 id='instu'>BA Graduation :---</h2>
            <h2 id='collage'>Shekhawati University Sikar</h2>
            <p id='year'>Year of Completion: 2021 to 2024</p>
            <h2 id='percent'>I have 60% </h2>
          </div>
        </div>

    </div>
  )
}
