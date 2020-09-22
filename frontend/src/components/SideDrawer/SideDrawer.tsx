import React, { FC } from 'react'
import './SideDrawer.css'
import { SideDrawerProps } from './SideDrawerProps.Interface'

export const SideDrawer: FC<SideDrawerProps> = ({ show }) => {
    let drawerClasses: string = 'side-drawer';
    if (show) {
        drawerClasses = 'side-drawer open'
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/demo">Demo</a></li>
                <li><a href="https://github.com/michaelbauerinc" rel="noopener noreferrer" target="_blank">Github</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default SideDrawer
