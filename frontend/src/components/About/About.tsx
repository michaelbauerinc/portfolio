import React, { FC } from 'react'
import './About.css'
import { Bar } from "react-chartjs-2";

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
                    <h1>Picture Here</h1>
                </div>
                <div className="bottom-container">
                    <p>I was born and raised in Wadsworth, Ohio - a small suburb right outside Akron. I currently live in Gainesville, FL. Growing up, I had a very organic love affair with computers and technology.
                    From hacking my dad's password with the terminal in order to partition the family computer's drive to modding and creating video games, my attraction to tech has always been insatiable.
                    </p>
                    <p>
                        In 2019, I graduated with my bachelor's degree and have been working as a professional developer for over a year. I have a great passion for learning new things, and I am always looking for new opportunities.
                        I thrive in environments that require creativity, problem solving, communication, and a sickening work ethic. If this sounds like something you can get behind, you can contact me <span><a href="/contact">here</a></span>.
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
                </div>
            </div>
        </div>
    )
}

export default About
