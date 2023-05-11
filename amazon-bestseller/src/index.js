import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const books = [
  {
    author: 'James Clear',
    title: 'Atomic Habits: An Easy & Proven Way to Build',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg',
  },
  {
    author: 'Bonnie Garmus',
    title: 'Lessons in Chemistry: A Novel',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71yNgTMEcpL._AC_UL600_SR600,400_.jpg',
  },
]

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { author, title, img } = book
        return <Book author={author} title={title} img={img} />
      })}
    </section>
  )
}

const Book = ({ author, title, img }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)

export default BookList
