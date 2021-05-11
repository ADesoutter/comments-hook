import React, {useState} from 'react'

export default function Comment({name, message}) {
    return (
        <li>
            <strong>{name}</strong> <br/>
            {message}
        </li>
    )
}
