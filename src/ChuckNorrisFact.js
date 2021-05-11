// http://api.icndb.com/jokes/random
// API qui vous renvoie une punchline aléatoire

import axios from 'axios'
import React, {useState, useEffect} from 'react'

export default function ChuckNorrisFact() {
    const [fact, setFact] = useState("");

    // componentDidMount() {} -> useEffect(()=> {}, [])
    useEffect(() => {
        axios.get('http://api.icndb.com/jokes/random')
        .then(res => {
            console.log(res.data.value);
            setFact(res.data.value.joke);
        })

    }, [])


    return (
        <div>{fact}</div>
    )
}
