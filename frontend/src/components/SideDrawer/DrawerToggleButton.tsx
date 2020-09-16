import React, { FC } from 'react'
import './DrawerToggleButton.css';
import { DrawerToggleButtonProps } from './DrawerToggleButtonProps.Interface'

export const DrawerToggleButton: FC<DrawerToggleButtonProps> = ({ click }) => {
    return (
        <button className="toggle-button" onClick={click}>
            <span className="toggle-button-line" />
            <span className="toggle-button-line" />
            <span className="toggle-button-line" />
        </button>
    )
}

export default DrawerToggleButton
