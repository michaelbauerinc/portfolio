import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import './Demo.css'
import { AxiosResponse } from 'axios';
import { HttpService } from '../../services/HttpService';




export const Demo: FC = () => {
    const service = HttpService;
    const [success, setSuccess] = useState(Boolean);
    const [get, setGet] = useState(Boolean);
    const [post, setPost] = useState(Boolean);
    const [patch, setPatch] = useState(Boolean);
    const [responseData, setResponseData] = useState([{ id: "", name: "", message: "" }])
    const { register, handleSubmit, errors } = useForm<Record<string, string>>()


    const onPostSubmit = (data: Record<string, string>) => service.post("/demo", data)
        .then((response: AxiosResponse) => {
            if (response.status === 200) {
                setSuccess(true);
            }
            else {
                // TODO: error handling
                // console.log(response.message)
            }
        });

    const onGetSubmit = (data: Record<string, string>) => service.get("/demo", data)
        .then((response: AxiosResponse) => {
            if (response.status === 200) {
                setSuccess(true);
                setResponseData(response.data)
            }
            else {
                // TODO: error handling
                // console.log(response.message)
            }
        });

    return (
        <div className="demo-container">
            <div className="demo-container-content">
                <div className="top-container">
                    <h1>Interact with the backend api and database</h1>
                    <p>NOTE: This is a minimal example, this web app is under construction</p>
                </div>
                <div className="bottom-container">
                    {!get && !post && !patch &&
                        <div>
                            <button className="demo-option" onClick={() => setGet(true)}>
                                <h1>GET Request</h1><br />
                                <p>( Retrieve an entry from the database. )</p>
                            </button>
                            <button className="demo-option" onClick={() => setPost(true)}>
                                <h1>POST Request</h1><br />
                                <p>( Add an entry to the database. )</p>
                            </button>
                            <button className="demo-option">
                                <h1>PATCH Request</h1><br />
                                <p>( Modify an entry in the database. )</p>
                            </button>
                        </div>
                    }
                    {get &&
                        <div className="request-container">
                            {success &&
                                <div className="request-success-container">
                                    <h1>Success. Retrieved the following entries:</h1>
                                    {responseData.map((item) =>
                                        <div className="request-success-item">
                                            <h2>ID: {item.id}</h2>
                                            <h2>Name: {item.name}</h2>
                                            <h2>Message: <p>{item.message}</p></h2>
                                        </div>
                                    )}

                                    {/* <h1>{responseData[0]}</h1> */}
                                    {/* <h2>ID: </h2> <p>{responseData.id}</p>
                                    <h2>Name: </h2> <p>{responseData.name}</p>
                                    <h2>Message: </h2> <p>{responseData.message}</p>
                                    <button onClick={() => setSuccess(false)}>Back</button> */}
                                </div>
                            }
                            {!success &&
                                < form onSubmit={handleSubmit(onGetSubmit)}>
                                    <label htmlFor="id">ID</label>
                                    <input ref={register({ required: false })} className="id" name="id" type="text"></input>
                                    <label htmlFor="name">Name</label>
                                    <input ref={register({ required: false })} className="name" name="name" type="text"></input>
                                    <button type="submit">Send</button>
                                    <button onClick={() => setGet(false)}>Back</button>
                                </form>
                            }
                        </div>
                    }
                    {post &&
                        <div className="request-container">
                            {success &&
                                <div className="request-success-container">
                                </div>
                            }
                            < form onSubmit={handleSubmit(onPostSubmit)}>
                                <label htmlFor="name">Name</label>
                                <input ref={register({ required: true })} className="name" name="name" type="text"></input>
                                {
                                    errors.name && <div className="error">Please enter a name.</div>
                                }
                                <label htmlFor="message">Message</label><br />
                                <textarea ref={register({ required: true })} name="message" ></textarea>
                                {
                                    errors.content && <div className="error">Please enter a message.</div>
                                }
                                <button type="submit">Send</button>
                                <button onClick={() => setPost(false)}>Back</button>
                            </form>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Demo
