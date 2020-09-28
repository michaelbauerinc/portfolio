import React, { FC } from 'react'
import './About.css'
import { Bar } from "react-chartjs-2";
import headshot from './headshot.jpg';
import typescript from "./Assets/typescript.svg";
import linux from "./Assets/linux.svg";
import nginx from "./Assets/nginx.svg";
import csharp from "./Assets/csharp.svg";
import docker from "./Assets/docker.svg";
import unity from "./Assets/unity.svg";
import python from "./Assets/python.svg";
import react from "./Assets/react-logo.svg";
import angular from "./Assets/angular.svg";
import sql from "./Assets/sql.svg";
import aws from "./Assets/aws.svg";
import gitlab from "./Assets/gitlab.svg";
import resume from "./Assets/mike_bauer_resume.pdf";

// import { AboutProps } from './About.Interface'

interface AboutProps {

}

export const About: FC<AboutProps> = () => {
    const barData: object = {
        labels: [
            "Openness",
            "Conscientiousness",
            "Extraversion",
            "Agreeableness",
            "Neuroticism"
        ],
        datasets: [
            {
                label: "Percentile",
                data: [87, 71, 94, 67, 44],
                backgroundColor: [
                    "rgba(255, 0, 0, 0.8)",
                    "rgba(255, 255, 0, 0.8)",
                    "rgba(0, 0, 255, 0.8)",
                    "rgba(0, 255, 100, 0.8)",
                    "rgba(75, 0, 130, 0.8)"
                ]
            }
        ]
    }
    return (
        <div className="about-container">
            <div className="about-container-content">
                <div className="top-container">
                    <img src={headshot} alt="headshot"></img>
                    <h3><a href={resume} target='_blank' rel="noopener noreferrer">View Resume</a></h3>
                </div>
                <div className="bottom-container">
                    <p>I was born and raised in Wadsworth, Ohio - a small suburb right outside of Akron. I currently live in Gainesville, FL. Growing up, I had an organic love affair with computers and technology.
                    Around age 4, I had my first experience with a computer - the Macintosh LCIII. From that point on, it was off to the races.
                    </p>
                    <p>
                        In 2019, I graduated with my bachelor's degree and have been working as a professional developer for over a year. I have a great passion for learning new things, and I am always looking for new opportunities.
                        I thrive in environments that require <span>creativity</span>, <span>problem solving</span>, <span>communication</span>, and a <span>sickening work ethic</span>. If this sounds like something you can get behind, contact me <span><a href="/contact">here</a></span>.
                    </p>
                    <h3>Get To Know Me:</h3>
                    <div className="personality-graph">
                        <Bar
                            data={barData}
                            options={{
                                title: {
                                    display: true,
                                    text: `"Big Five" Personality Traits`
                                },
                                tooltips: {
                                    enabled: true
                                },
                                maintainAspectRatio: false,
                                responsive: true,
                                legend: {
                                    display: false
                                }
                            }}
                        />
                    </div>
                    <h3>At A Glance:</h3>
                    <div className="skills">
                        <img src={python} title="Python" alt="skill logo" />
                        <img className="typescript" src={typescript} title="Typescript" alt="skill logo" />
                        <img src={csharp} title="C#" alt="skill logo" />
                        <img className="docker" src={docker} title="Docker" alt="skill logo" />
                        <img src={nginx} title="Nginx" alt="skill logo" />
                        <img className="react" src={react} title="React" alt="skill logo" />
                        <img src={angular} title="Angular" alt="skill logo" />
                        <img src={linux} title="Linux" alt="skill logo" />
                        <img className="unity" src={unity} title="Unity 3D/2D" alt="skill logo" />
                        <img className="sql" src={sql} title="SQL" alt="skill logo" />
                        <img src={aws} title="Amazon Web Services" alt="skill logo" />
                        <img src={gitlab} title="Gitlab CI" alt="skill logo" />


                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
