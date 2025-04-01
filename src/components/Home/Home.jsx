import React from 'react'
import "./Home.css"
import man from "../../assets/man.png"
import { useGSAP } from '@gsap/react';
import gsap from "gsap";

function Home() {


  const githubLink = "https://github.com/phsics";
  useGSAP(() => {
    let tl1=gsap.timeline();

    tl1.from(".line1", {
      y: 100, 
      duration:1,
      opacity:0
    })
    tl1.from(".line2", {
      y: 100, 
      duration:1,
      opacity:0
    })
    tl1.from(".line3", {
      y: 100, 
      duration:1,
      opacity:0
    })
    gsap.from(".righthome img", {
      x:200, 
      duration: 1,
    })
  })
  const driveLink = "https://drive.google.com/file/d/1O2qDtAHXMqkOk2Kj86FqMhlye5s3uHf_/view?usp=drive_link";
  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">Rohan Kumar</div>
          <div className="line3">
            WEB DEVELOPER
          </div>
          <a href={driveLink} target="_blank" rel="noopener noreferrer">
            <button className="hire-btn">HIRE ME</button>
          </a>
        </div>
      </div>
      <div className="righthome">
        <img src={man} alt="" />
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <button className="github-btn">GITHUB</button>
        </a>
      </div>
    </div>
  )
}

export default Home
