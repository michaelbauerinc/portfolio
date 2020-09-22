import React, { Component } from 'react'
import Backdrop from '../Backdrop/Backdrop'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import SideDrawer from '../SideDrawer/SideDrawer'
import './Navbar.css'
import { NavBarConditions } from './Navbar.Interface'

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
                                <li><a href="/home">Home</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/demo">Demo</a></li>
                                <li><a href="https://github.com/michaelbauerinc" rel="noopener noreferrer" target="_blank">Github</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Navbar
