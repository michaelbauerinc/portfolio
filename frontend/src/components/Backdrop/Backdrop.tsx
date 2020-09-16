import React, { FC } from 'react'
import './Backdrop.css'
import { BackdropProps } from './Backdrop.Interface'


export const Backdrop: FC<BackdropProps> = ({ click }) => {
    return (
        <div className="backdrop" onClick={click} />
    )
}

export default Backdrop
