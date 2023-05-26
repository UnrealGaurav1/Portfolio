import React from "react";
import './css/SkillBar.css';

function SkillsBar (props) {
   return (
    <>
    <h1 className="title-text">{props.title}</h1>
       <div className="container">
           <div className="skill-box">
               <span className="title">{props.skill1}</span>
               <div className="skill-bar">
                   <span className="skill-per html">
                       <span className="tooltip">95%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">{props.skill2}</span>
               <div className="skill-bar">
                   <span className="skill-per css">
                       <span className="tooltip">80%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">{props.skill3}</span>
               <div className="skill-bar">
                   <span className="skill-per javascript">
                       <span className="tooltip">60%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">{props.skill4}</span>
               <div className="skill-bar">
                   <span className="skill-per nodejs">
                       <span className="tooltip">40%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">{props.skill5}</span>
               <div className="skill-bar">
                   <span className="skill-per reactjs">
                       <span className="tooltip">35%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">{props.skill6}</span>
               <div className="skill-bar">
                   <span className="skill-per expressjs">
                       <span className="tooltip">45%</span>
                   </span>
               </div>
           </div>
       </div>
       </>
   )
}

export default SkillsBar;