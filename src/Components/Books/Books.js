import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Selection from '../Selection/Selection';
import './Books.css'

const Books = () => {
    const [books, setBooks] = useState ([]);
    const [cart, setCart] = useState([])
    console.log(cart)

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    const handler = (book) =>{
        const newCart = [...cart, book];
        setCart(newCart)

    }

    return (
        <div>
            <h2>All Books:{books.length} </h2>
            <div className="full-container">
                <div class="row row-cols-1 row-cols-md-3 g-4 ">
                    {
                        books.map((book)=> <Book
                        key={book._id}
                        book = {book}
                        handler = {handler}
                        ></Book>)
                    }
                </div>
                <div className="order-container">
                    <h2>order Summary</h2>
                        {
                        cart.map((item)=> <Selection
                        key={item._id}
                        item = {item}
                        >Name:{item.name}</Selection>)
                        }

                </div>
            </div>               
        </div>
    );
};

export default Books;