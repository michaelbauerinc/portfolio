import React, { Component } from 'react'
import Backdrop from '../Backdrop/Backdrop'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import SideDrawer from '../SideDrawer/SideDrawer'
import './Navbar.css'
import { NavBarConditions } from './Navbar.Interface'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    constructor(props: any) {
        super(props);
        this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
        this.handleBackdrop = this.handleBackdrop.bind(this);
        this.backdropClickHandler = this.backdropClickHandler.bind(this);
    }
    state: NavBarConditions = {
        sideDrawerOpen: false,
        backDrop: null
    };

    private drawerToggleClickHandler() {
        this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen });
        this.handleBackdrop()
    }

    private handleBackdrop() {
        this.setState({ backDrop: this.state.sideDrawerOpen ? null : <Backdrop click={this.backdropClickHandler} /> });
    }

    private backdropClickHandler() {
        this.setState({ sideDrawerOpen: false })
        this.handleBackdrop()
    }


    render() {
        return (
            <div>
                <SideDrawer show={this.state.sideDrawerOpen} />
                {this.state.backDrop}
                <header className="navbar-container">
                    <nav className="navbar-navigation">
                        <div className="navbar-toggle-button">
                            <DrawerToggleButton click={this.drawerToggleClickHandler} />
                        </div>
                        <div className="navbar-logo">
                            <a href="/">MB</a>
                        </div>
                        <span className="space-buffer" />
                        <div className="navbar-items">
                            <ul>
                                <Link to="/home">
                                    <li>Home</li>
                                </Link>
                                <Link to="/about">
                                    <li>About</li>
                                </Link>
                                <Link to="/works">
                                    <li>Works</li>
                                </Link>
                                <Link to="/contact">
                                    <li>Contact</li>
                                </Link>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Navbar
