import React from 'react'
import SkillBar from '../Components/SkillBar.js'
import './css/Skills.css'
import '../../src/transition.css'

function Skills() {
  return (
    <div className='skills'>
    <div className='container1'>
      <SkillBar title='Coding Skills' skill1='HTML' skill2='CSS' skill3='Javascript' skill4='NodeJS' skill5='ReactJS' skill6='ExpressJS'/>
    </div>
    <div className='container2'>
      <SkillBar title='Professional Skills' skill1='Web Development' skill2='Web Design' skill3='App Development' skill4='DataBase Management' skill5='Game Development' skill6='UI/UX Design'/>
    </div>

    </div>
  )
}

export default Skills