import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Books.css'

const Books = () => {
    const [books, setBooks] = useState ([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    return (
        <div>
            <h2>All Books:{books.length} </h2>
            <div className="full-container">
                <div className="book-list">
                <div class="row row-cols-1 row-cols-md-3 ">
            {
                books.map((book)=> <Book
                key={book._id}
                book = {book}
                ></Book>)
            }


            </div>

                </div>
                <div className="order">
                    <h2>order Summary</h2>

                </div>

            </div>




        </div>
    );
};

export default Books;