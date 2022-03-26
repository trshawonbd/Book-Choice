import React from 'react';
import './Selection.css'

const Selection = (props) => {
    const {picture, name} = props.item;
    return (
        <div className='d-flex ms-5'>
            <div className='pic d-flex justify-content-start'>
                <img src={picture} alt="" srcset="" />
            </div>
            <div className='title'>
                {name}
            </div>
        </div>
    );
};

export default Selection;