import React,{ useState } from 'react'

function Contact() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
    }
    return (
        <div>
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
            <label>
                Essay:
                <textarea value={message} onChange={(e)=> setMessage(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Contact;

