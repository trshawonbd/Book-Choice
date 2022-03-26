import React from 'react';
import './Random.css'

const Random = (props) => { 
    const {name} =  props.random
    return (
        <div id='random-field' className=' ms-5 '>
            <h2 className=' d-flex justify-content-center'>
              {name}
            </h2>

            
        </div>
    );
};

export default Random;