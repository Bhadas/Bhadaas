import React, { useEffect } from 'react'
import './BgAnimation.css'

const BgAnimation = () => {
    useEffect(()=>{
        const colors = ["#A02A19", "#A02A19", "#A02A19", "#A02A19", "#A02A19"];

const numBalls = 20;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}ex`;
  ball.style.height = ball.style.width;

  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 10
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});

//set vars
const fireFrontContainer = document.getElementById('fireFront');
const fireMidContainer = document.getElementById('fireMid');
const fireBackContainer = document.getElementById('fireBack');

var NPFireFront = rand(10, 15);
var arrayPFireFront = [];
var NPFireMid = rand(80, 100);
var arrayPFireMid = [];
var NPFireBack = rand(100, 140);
var arrayPFireBack = [];

while (arrayPFireFront.length < NPFireFront) {
  var fireParticle = new FireParticle('front');
  arrayPFireFront.push(fireParticle);
  fireFrontContainer.innerHTML += fireParticle.html;
}

while (arrayPFireMid.length < NPFireMid) {
  var fireParticle = new FireParticle('mid');
  arrayPFireMid.push(fireParticle);
  fireMidContainer.innerHTML += fireParticle.html;
}

while (arrayPFireBack.length < NPFireBack) {
  var fireParticle = new FireParticle('back');
  arrayPFireBack.push(fireParticle);
  fireBackContainer.innerHTML += fireParticle.html;
}

function FireParticle(type) {
  if (type === 'front') {
    this.radius = rand(1, 15);
    this.margin = this.radius;
    this.spped = randInt(1, 1.5);
    this.delay = randInt(1, 2);
    this.y = randInt(0.5, 1);
    this.x = randInt(40, 60);
  } else if (type === 'mid') {
    this.radius = rand(10, 30);
    this.margin = this.radius / 2;
    this.spped = randInt(0.2, 0.6);
    this.delay = randInt(0.5, 1);
    this.y = randInt(0.25, 0.5);
    this.x = randInt(35, 65);
  } else if (type == 'back') {
    this.radius = rand(10, 40);
    this.margin = this.radius;
    this.spped = randInt(0.6, 0.);
    this.delay = randInt(0, 0.4);
    this.y = randInt(0, 0.5);
    this.x = randInt(35, 85);
  }
  this.html = '<span style="width: ' + this.radius + 'px; height: ' + this.radius + 'px; left: ' + this.x + '%; bottom: ' + this.y + '%; margin-left: -' + this.margin + 'px; animation-delay: ' + this.delay + 's; animation-speed: ' + this.speed + 's"></span>';
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function randInt(min, max) {
  return Math.random() * (max - min) + min;
}
}

)
  return (
    <div className='bg-blue-950'>
        <div className="container">
<div className="fire">
<div id="fireFront" className="fire-front"></div>
<div id="fireMid" className="fire-mid"></div>
<div id="fireBack" className="fire-back"></div>
<div className="fireplace"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/751678/fireplace.svg" alt="Fire Place" /></div>
</div>
</div>
<div className="background"></div>
<div className="moon"></div>
    </div>
  )
}

export default BgAnimation