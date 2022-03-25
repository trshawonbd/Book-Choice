import React from 'react';
import './Book.css'

const Book = (props) => {
    console.log(props.book)
    const {name, picture, price} = props.book;
    return (
            <div class="col ">
                <div class="card h-100">
                    <img src={picture} class="card-img-top card-pic" alt="" srcset="" />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{price}</p>
                    </div>
                </div>
            </div>
        
    );
};

export default Book;