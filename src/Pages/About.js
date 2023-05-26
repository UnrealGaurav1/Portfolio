import React from 'react'
import '../../src/transition.css'
import './css/about.css'
import img from '../../src/Images/img.jpg'
import {Link} from 'react-router-dom'

function About() {
  return (
    <div className='About'>
      <div className="about-leftHandSide">
        <img src={img} alt="" />
      </div>
      <div className="about-rightHandSide">
        <div className="about-content">
          <h1 id='about-content-heading'>Hey, <br></br> It's Me <br></br> Gourav Goyal</h1>
          <p id='about-content-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas laborum at quas soluta. Inventore suscipit voluptatibus, adipisci, repellendus architecto accusamus cum, sunt libero rem omnis aperiam amet corrupti quia earum.</p>
          <Link to="/About-ReadMore">
            <button id='about-ReadMore'>Read More</button>
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default About