import React from 'react';
import './Random.css'

const Random = (props) => { 
    const {picture, name} =  props.random
    return (
        <div id='random-field' className='d-flex ms-5 '>
          <div className='pic d-flex justify-content-start'>
                <img src={picture} alt="" srcset="" />
            </div>
            <div className='title'>
                {name}
            </div>

            
        </div>
    );
};

export default Random;