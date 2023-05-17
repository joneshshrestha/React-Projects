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
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

const EventExamples = () => {
  const handleFormInput = () => {
    console.log('handle form input')
  }

  const handleButtonClick = () => {
    alert('handle button click')
  }

  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
      </form>
      <button onClick={handleButtonClick}>Click Me!</button>
    </section>
  )
}

const Book = (props) => {
  const { img, author, title } = props
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
