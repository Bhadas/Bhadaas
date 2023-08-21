import React, { useEffect } from 'react'
import './Test1.css'

const Test1 = () => {
    useEffect(()=>{
        document.addEventListener('DOMContentLoaded', () => {
            const fireContainer = document.querySelector('.fire');
            const parts = 40;
        
            for (let p = 1; p <= parts; p++) {
              const particle = document.createElement('div'); 
              particle.classList.add('particle');
              particle.style.animationDelay = `${500 * Math.random()}ms`;
              particle.style.left = `calc((100% - 0.9em) * ${p - 1}/${parts})`;
              fireContainer.appendChild(particle);
            }
          });

    })
  return (
    <div class="wood">
    <div class="moon"></div>
    <div class="fire">
    </div>
  </div>
  )
}

export default Test1