import React, {useState} from 'react'

export default function Form() {

    const [pseudo, setPseudo] = useState("");
    const [age, setAge] = useState("");

    const checkData = (e) => {
        e.preventDefault();
        let currentData = {
            pseudo: pseudo,
            age: age
        }
        console.log(currentData);

        // Clean les champs
        setPseudo("");
        setAge("");
    }


    return (
        <form onSubmit={checkData}>
            <input type="text" placeholder="ton pseudo" 
                value={pseudo} onChange={e => setPseudo(e.target.value)} />

            <input type="text" placeholder="ton âge" value={age} 
                onChange={e => setAge(e.target.value)} />

            <input type="submit" value="OK"/>
        </form>
    )
}
