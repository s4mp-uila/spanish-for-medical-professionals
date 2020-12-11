import React from "react"
import "./Home.scss"
import seal from '../../Resources/Spanish_Seal.png';

function Home() {
   
    return (
       <div className="homeContainer">
           <section className="sectionTop">
               <div className="marginEd">
                    <div>
                        <h1 className="titleText">Spanish for Medical Professionals</h1>
                    </div>
                    <div>
                        <img className="imageResponsive" src={seal} alt="Spanish Seal"></img>
                    </div>
               </div>
           </section>
           <section className="sectionMiddle">
                <div className="marginEd">
                    <h1>Try our intercative Courses, and learn Spanish in a fun and motivating way!</h1>
                </div>
           </section>
           <section className="sectionBottom"></section>
       </div>
    )
}

export default Home 