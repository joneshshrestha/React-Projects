//@ts-check

import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { books } from './books'
import Book from './Book'

const BookList = () => {
  const getBook = (id) => {
    console.log(books.find((book) => book.id === id))
  }

  return (
    <>
      <h1>Best Sellers in Books</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} getBook={getBook} index={index + 1} />
        })}
      </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)

export default BookList
