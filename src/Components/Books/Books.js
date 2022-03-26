import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Random from '../Random/Random';
import Selection from '../Selection/Selection';
import './Books.css'

const Books = () => {
    const [books, setBooks] = useState ([]);
    const [cart, setCart] = useState([])
    const [random, setRandom] = useState(false)
    
   
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    
    const handler = (book) =>{
        setRandom(false)
        const newCart = [...cart, book];
        setCart(newCart)
       

    }


    const randomValue = (cart) =>{
     const getRandomValue = cart[Math.floor(Math.random() * cart.length)]
       setRandom(getRandomValue,true)
       setCart([])
       
        

    }

    const delete1 = (cart) =>{
        setCart([])
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
                    <Random random={random}
                        item = {cart}
                        ></Random>
                        {
                        cart.map((item)=> <Selection
                        key={item._id}
                        item = {item}
                        >Name:{item.name}</Selection>)
                        }
                        

            <div className='d-flex justify-content-center'>
            <div>
             <button onClick={()=> randomValue(cart)} className='btn-select me-3' >Select One for Me</button>
            </div>
            <div>
             <button onClick={()=> delete1(cart)} className='btn-remove'>Remove All</button>
            </div>

            </div>

                


                </div>
            </div>               
        </div>
    );
};

export default Books;