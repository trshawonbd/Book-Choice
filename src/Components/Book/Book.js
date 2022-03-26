import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Book.css'

const Book = (props) => {
    /* console.log(props) */
    const {name, picture, price} = props.book;
    return (
            <div class="col">
                <div class="card h-100">
                    <img src={picture} class="card-img-top card-pic" alt="" srcset="" />
                    <div class="card-body">
                        <h5 class="card-title">Book Name:{name}</h5>
                        <p class="card-text">Price: {price} BDT</p>
                        <div>
                        <button onClick={() => props.handler(props.book)} className='add-to-read'>Add To Read <FontAwesomeIcon icon={faBookOpen} /> </button>

                        </div>

                    </div>
                    
                </div>
            </div>
        
    );
};

export default Book;