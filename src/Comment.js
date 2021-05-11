import React, {useState} from 'react'

export default function Comment({name, body}) {
    return (
        <li>
            <strong>{name}</strong> <br/>
            {body}
        </li>
    )
}
