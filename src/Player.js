import React from 'react'

// props ->
/*
{
    firstname: "jean-michel",
    lastname: "apeupré"
}
*/
export default function Player({firstname, lastname}) {
    return (
        <div>
            Bonjour, je suis {firstname} {lastname}
        </div>
    )
}
