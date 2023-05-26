import React from 'react'
import me from '../../src/Images/me.jfif'
import './css/home.css'
import {Link} from 'react-router-dom'
import '../../src/transition.css'

function Home() {Z
  return (
    <div className='Home'>
      <div className='left-hand-side'>
        <div className="details">
          <h1>Hi,I'm Gourav Goyal</h1>
          <h2>Full-Stack Developer</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis amet sequi asperiores harum eum. Rerum doloribus impedit, maiores, rem inventore fugit necessitatibus aspernatur illo nesciunt culpa assumenda sequi possimus, praesentium vero suscipit repellendus nobis? Velit odio illum nemo pariatur provident.</p>
        </div>
        <div className="buttons">
          <button><Link to='#' id='hire'>Hire Me</Link></button>
          <button><Link to='#' id='talk'>Let's Talk</Link></button>
          
        </div>
      </div>
      <div className='right-hand-side'>
        <div className="image-container">
          <img src={me} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home