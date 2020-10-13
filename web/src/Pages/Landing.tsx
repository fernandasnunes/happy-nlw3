import React from 'react';
import "../styles/Pages/Landing.css";
import logoImg from "../images/Logo.svg";
import {FiArrowRight} from 'react-icons/fi' 

function Landing(){
    return(

<div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="happy" />
        <main>

          <h1> Leve felicidade para o mundo</h1>
          <p> Visite orfanato e mude o dia de muitas crianças. </p>
        </main>
        <div className="location">

          <strong>Mogi</strong>
          <span>São Paulo </span>
        </div>
        <a href="" className="enter-app" >
          
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
          </a> 
        
      </div>
    </div>
    );
}

export default Landing;