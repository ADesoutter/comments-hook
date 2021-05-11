import React, {useState} from 'react'

export default function Comment() {
    const [pseudo, setPseudo] = useState("Jean-Paul");
    const [message, setMessage] = useState("Lorem ipsum");


    // La même que : 
    // function revealSecretMessage() {}
    const revealSecretMessage = () => {
        setMessage("Je suis un message secret");
    }

    return (
        // La même que <li onClick={revealSecretMessage}>
        <li onClick={() => setMessage("Je suis un message secret")}>
            <strong>{pseudo}</strong> <br/>
            {message}
        </li>
    )
}
