import React from 'react';
import { useState } from 'react';

function FeedbackItem(props) {
    return (
        <>
        <div className='card'>
            <div className='numDisplay'>{props.item.rating}</div>
            <div className='textDisplay'>{props.item.text}</div>
        </div>
        </>
    )
}

export default FeedbackItem
