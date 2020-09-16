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
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Works</a></li>
            </ul>
        </nav>
    )
}

export default SideDrawer
