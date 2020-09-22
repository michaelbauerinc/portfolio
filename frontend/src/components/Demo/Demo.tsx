import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import './Demo.css'
import axios from 'axios';


interface ContactInfo {
    name: string,
    sender: string;
    subject: string,
    content: string
}

export const Demo: FC = () => {
    const [success, setSuccess] = useState(Boolean);
    const { register, handleSubmit, errors } = useForm<ContactInfo>()
    const onSubmit = handleSubmit(async (data: ContactInfo) => {
        await axios.post('http://api.localhost/email', data)
            .then((response) => {
                if (response.status === 200) {
                    setSuccess(true);
                }
            }, (error) => {
                // TODO: Error handling
                // console.log(error);
            });
    })
    return (
        <div className="demo-container">
            <div className="demo-container-content">
                <div className="top-container">
                    <h1>Demo</h1>
                </div>
                <div className="bottom-container">

                </div>
            </div>
        </div>
    )
}

export default Demo
