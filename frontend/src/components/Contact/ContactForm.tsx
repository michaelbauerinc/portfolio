import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import './ContactForm.css'
import { AxiosResponse } from 'axios';
import { HttpService } from '../../services/HttpService';


// interface ContactInfo {
//     name: string,
//     sender: string;
//     subject: string,
//     content: string
// }

export const ContactForm: FC = () => {
    const service = HttpService;
    const [success, setSuccess] = useState<boolean>(false);
    const { register, handleSubmit, errors } = useForm<Record<string, string>>()
    const onSubmit = (data: Record<string, string>) => service.post("/email", data)
        .then((response: AxiosResponse) => {
            if (response.status === 200) {
                setSuccess(true);
            }
            else {
                // TODO: error handling
                // console.log(response.message)
            }
        }
        );

    if (!success) {
        return (
            <div className="contact-form-container">
                <h1>Let's chat.</h1>
                < form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name">Name</label>
                    <input ref={register({ required: true })} className="name" name="name" type="text"></input>

                    {
                        errors.name && <div className="error">Please enter a name</div>
                    }
                    <label htmlFor="name">Subject</label>
                    <input ref={register({ required: true })} className="subject" name="subject" type="text"></input>

                    {
                        errors.subject && <div className="error">Please enter a subject</div>
                    }
                    <label htmlFor="email">Email</label>
                    <input ref={register({
                        required: true,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        }
                    })} className="email" name="sender" type="text"></input>
                    {
                        errors.sender && <div className="error">Please enter a valid email</div>
                    }
                    <label htmlFor="message">Message</label><br />
                    <textarea ref={register({ required: true })} name="content" ></textarea>
                    {
                        errors.content && <div className="error">Please enter a message.</div>
                    }
                    <button type="submit">Send</button>
                </form >
            </div >
        )
    } else {
        return <div className="contact-form-container">
            <h1>Message sent - Thanks. Ill be in touch.</h1>
        </div>
    }
}

export default ContactForm
