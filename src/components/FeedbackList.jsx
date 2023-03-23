import React from 'react'
import { useState } from 'react';
import FeedbackForm from './FeedbackForm';
import FeedbackItem from './FeedbackItem';

function FeedbackList() {
    const [fList, setFlist] = useState([{rating:1, text:'This is super'}]);

    const handleList = (newone) => {
        setFlist([...fList, newone] );
    }
    return (
        <div>
            <FeedbackForm handleList = {handleList}/>
            <h4>fList</h4> 
            {fList.map((item,index) => ( 
            <FeedbackItem key={index} 
            item={item}
            handleList = {handleList}
            />))}           
        </div>
    )
}

export default FeedbackList
