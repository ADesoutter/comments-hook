import React, {useState} from 'react'

export default function Counter({score, incrementScore}) {

    return (
        <button onClick={incrementScore}>
            Bouton groupé, cliqué {score} fois
        </button>
    )
}
