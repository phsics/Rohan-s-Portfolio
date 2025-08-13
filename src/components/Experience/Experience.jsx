import "./Experience.css";
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/all'
import logo from "../../assets/DocuSign.png"

gsap.registerPlugin(ScrollTrigger)

const InternshipCard = () => {
    useGSAP(() => {
    gsap.from(".internship-card", {
      x:-100, 
      duration:1,
      opacity: 0,
      stagger:1,
      scrollTrigger:{
        trigger: ".internship-card", 
        scroll: "body", 
        scrub:2, 
        start: "top 80%", 
        end: "top 30%"
      }
    })
    })
  return (
    <div id="exp">
        <div className="internship-card">
            <div className="internship-header">
                <img
                src={logo}
                className="company-logo"
                />
                <div>
                <h2>Software Engineering Intern — DocuSign</h2>
                <p className="meta">
                    <span>📅 May 2025 - Aug 2025</span>
                </p>
                </div>
            </div>

            <p className="summary">
                Contributed to building Quick Quote, an internal DocuSign app for Salesforce users to generate quotes faster by automating workflows and replacing 
                manual Google Sheets/Conga processes — reducing effort by 50% and adding ~$10M in annual value.
            </p>

            <ul className="achievements">
                <li>Collaborated with API team to integrate backend data with UI.</li>
                <li>Optimized feature performance and resolved integration issues.</li>
                <li>Gained hands-on experience with team collaboration.</li>
            </ul>

            <div className="skills">
                {["React", "Graphql", "Typescript", "Nx console"].map(
                (skill, index) => (
                    <span key={index} className="skill-tag">
                    {skill}
                    </span>
                )
                )}
            </div>
        </div>
    </div>
    
  );
};

export default InternshipCard;
