import React, {useState} from 'react';
import './App.css';
import Comments from './Comments';
import Counter from './Counter';
import Form from './Form';

export default function App() {

    const [score, setScore] = useState(0);

    const incrementScore = () => {
        setScore(score+1);
    }

    return (
      <div className="App container">
        {/* <Comments /> */}
        <Form />
      </div>
    );
}


