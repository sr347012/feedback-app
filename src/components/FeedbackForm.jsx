import React from 'react'
import { useState } from 'react';

function FeedbackForm(props) {
    const [formRating, setRating] = useState(0);
    const [formText, setText] = useState('');

    const addNew = () => {
        console.log(formRating, formText);
        let newObj = {rating: formRating, text: formText}
        props.handleList(newObj);
    }

    const handleRating = (evt) => {
        setRating (()=> {
            return evt.target.value;
        })
    }
    const handleText = (evt) => {
        setText (()=> {
            return evt.target.value.toString();
        })
    }

    return (
        <div>
            <h3>Feedback Form</h3>
            <input type="text" onChange={handleRating} /> Rating 
            <input type="text" name="" id="" onChange={handleText}/> Text
            <button onClick={addNew}> add</button>
        </div>
    )
}

export default FeedbackForm
