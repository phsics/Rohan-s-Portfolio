import React from 'react'
import Card from '../Card/Card'
import "./Project.css"
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

function Project() {
  useGSAP(() => {
    gsap.from("#para", {
      x:-100, 
      duration:1,
      opacity: 0,
      stagger:1,
      scrollTrigger:{
        trigger: "#para", 
        scroll: "body", 
        scrub:2, 
        start: "top 80%", 
        end: "top 30%"
      }
    })
    gsap.from(".slider", {
      x:-100, 
      duration:1,
      opacity: 0,
      stagger:1,
      scrollTrigger:{
        trigger: ".slider", 
        scroll: "body", 
        scrub:2, 
        start: "top 80%", 
        end: "top 30%"
      }
    })
  })
  return (
    <div id="projects">
        <h1 id="para">PROJECTS</h1>
        <div className="slider">
        <div className="slider">
            <Card title="CollabTalk" image={project1} link="https://collabtalk.onrender.com/"/>
            <Card title="AI Mock Interview" image={project2} link="https://ai-mock-interview-react-e1820.web.app/"/>
            <Card title="Portfolio" image={project3} link="https://rohan-s-portfolio-1zpr.vercel.app/"/>
            <Card/>
            <Card/>
        </div>
        </div>
    </div>
  )
}

export default Project
