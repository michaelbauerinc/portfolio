import React, { FC } from 'react'
import './Home.css'
import flower from './flower.gif'

// import { HomeProps } from './Backdrop.Interface'

interface HomeProps {

}

export const Home: FC<HomeProps> = () => {
    return (
        <div className="home-container">
            <div className="home-container-content">
                <div className="top-container">
                    <h1>You found me.</h1>
                    <img src={flower} alt="Loading..." />
                </div>
                <div className="bottom-container">
                    <p>I'm glad you're here. This is a <span>full stack</span> web app demonstrating my passion and skills for software development.
                    It features a <span>React</span> frontend with <span>HTML and CSS from scratch</span>. The backend uses <span>Python</span>, featuring a  <span>Flask-Restful</span> api and the <span>Flask SQLAlchemy ORM</span> to interact with its database. An <span>Nginx</span> web server is used as a reverse proxy to connect the two together.
                    The whole app is <span>Dockerized</span> in <span>Ubuntu 18.04</span>. The development startup and deployment to an <span>AWS EC2 node</span> is fully automated by <span>bash</span> scripts. You can view the source code <a href="https://github.com/michaelbauerinc/portfolio" rel="noopener noreferrer" target="_blank"><span>here.</span></a></p>
                </div>
            </div>
        </div>
    )
}

export default Home
