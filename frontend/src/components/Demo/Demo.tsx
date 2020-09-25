import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import './Demo.css'
import { AxiosResponse } from 'axios';
import { HttpService } from '../../services/HttpService';




export const Demo: FC = () => {
    const service = HttpService;
    const [success, setSuccess] = useState<boolean>(false);
    const [get, setGet] = useState<boolean>(false);
    const [post, setPost] = useState<boolean>(false);
    const [patch, setPatch] = useState<boolean>(false);
    const [responseData, setResponseData] = useState([{ id: "", name: "", message: "" }])
    const { register, handleSubmit, errors } = useForm<Record<string, string>>()


    const onPostSubmit = (data: Record<string, string>) => service.post("/demo", data)
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

    const onPatchSubmit = (data: Record<string, string>) => service.patch("/demo", data)
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

    const getRandom = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        let data = { random: true }
        service.get("/demo", data)
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
    }

    return (
        <div className="demo-container">
            <div className="demo-container-content">
                <div className="top-container">
                    <h1>Interact with the backend api and database through this guest book.</h1>
                    <p>NOTE: This is a minimal API example. This web app is under construction</p>
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
                            <button className="demo-option" onClick={() => setPatch(true)}>
                                <h1>PATCH Request</h1><br />
                                <p>( Modify an entry in the database. )</p>
                            </button>
                        </div>
                    }
                    {get &&
                        <div className="request-container">
                            {success &&
                                <div className="request-success-container">
                                    {responseData.length > 0 &&
                                        <h1>Success. Retrieved the following entries:</h1>
                                    }
                                    {responseData.length === 0 &&
                                        <h1>Hmm, no entry found. Consider adding it in a POST request, then search again.</h1>
                                    }
                                    <button onClick={() => { setGet(false); setSuccess(false) }}>Back</button>

                                    {responseData.map((item) =>
                                        <div className="request-success-item">
                                            <h2><span>ID:</span> {item.id}</h2>
                                            <h2><span>Name:</span> {item.name}</h2>
                                            <h2><span>Message:</span> <p>{item.message}</p></h2>
                                        </div>

                                    )}
                                </div>
                            }
                            {!success &&
                                < form onSubmit={handleSubmit(onGetSubmit)}>
                                    <label htmlFor="id">ID</label>
                                    <input ref={register({ required: false })} className="id" name="id" type="text"></input>
                                    <label htmlFor="name">Name</label>
                                    <input ref={register({ required: false })} className="name" name="name" type="text"></input>
                                    <button onClick={(e) => getRandom(e)}>Random</button>
                                    <button type="submit">Get</button>
                                    <button onClick={() => setGet(false)}>Back</button>
                                </form>
                            }
                        </div>
                    }
                    {post &&
                        <div className="request-container">
                            {success &&
                                <div className="request-success-container">
                                    <h1>Success. You added the following entry to the db:</h1>
                                    <button onClick={() => { setPost(false); setSuccess(false) }}>Back</button>

                                    {responseData.map((item) =>
                                        <div className="request-success-item">
                                            <h2><span>ID:</span> {item.id}</h2>
                                            <h2><span>Name:</span> {item.name}</h2>
                                            <h2><span>Message:</span> <p>{item.message}</p></h2>
                                        </div>

                                    )}
                                </div>
                            }
                            {!success &&
                                < form onSubmit={handleSubmit(onPostSubmit)}>
                                    <label htmlFor="name">Name</label>
                                    <input ref={register({ required: true })} className="name" name="name" type="text"></input>
                                    {
                                        errors.name && <div className="error">Please enter a name.</div>
                                    }
                                    <label htmlFor="message">Message</label><br />
                                    <textarea ref={register({ required: true })} className="message" name="message" ></textarea>
                                    {
                                        errors.message && <div className="error">Please enter a message.</div>
                                    }
                                    <button type="submit">Post</button>
                                    <button onClick={() => setPost(false)}>Back</button>
                                </form>
                            }
                        </div>
                    }
                    {patch &&
                        <div className="request-container">
                            {success &&
                                <div className="request-success-container">
                                    {responseData.length > 0 &&
                                        <h1>Success. Updated the following entries:</h1>
                                    }
                                    {responseData.length === 0 &&
                                        <h1>Hmm, no entry found with that ID. Consider adding it in a POST request, then try again.</h1>
                                    }
                                    <button onClick={() => { setPatch(false); setSuccess(false) }}>Back</button>

                                    {responseData.map((item) =>
                                        <div className="request-success-item">
                                            <h2><span>ID:</span> {item.id}</h2>
                                            <h2><span>Name:</span> {item.name}</h2>
                                            <h2><span>Message:</span> <p>{item.message}</p></h2>
                                        </div>

                                    )}
                                </div>
                            }
                            {!success &&
                                < form onSubmit={handleSubmit(onPatchSubmit)}>
                                    <label htmlFor="id">ID</label>
                                    <input ref={register({ required: true })} className="id" name="id" type="text"></input>
                                    {
                                        errors.id && <div className="error">Please enter an ID.</div>
                                    }
                                    <label htmlFor="name">Name</label>
                                    <input ref={register({ required: true })} className="name" name="name" type="text"></input>
                                    {
                                        errors.name && <div className="error">Please enter a name.</div>
                                    }
                                    <label htmlFor="message">Message</label><br />
                                    <textarea ref={register({ required: true })} className="message" name="message" ></textarea>
                                    {
                                        errors.message && <div className="error">Please enter a message.</div>
                                    }
                                    <button type="submit">Update</button>
                                    <button onClick={() => setPatch(false)}>Back</button>
                                </form>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Demo
