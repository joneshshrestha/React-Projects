//@ts-check

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const books = [
  {
    author: 'James Clear',
    title: 'Atomic Habits: An Easy & Proven Way to Build',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg',
    id: 1,
  },
  {
    author: 'Bonnie Garmus',
    title: 'Lessons in Chemistry: A Novel',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71yNgTMEcpL._AC_UL600_SR600,400_.jpg',
    id: 2,
  },
]

const BookList = () => {
  const getBook = (id) => {
    console.log(books.find((book) => book.id === id))
  }

  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, author, title, id, getBook } = props
  const getSingleBook = () => {
    getBook(id)
  }

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <button onClick={getSingleBook}>GET BOOK</button>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)

export default BookList
