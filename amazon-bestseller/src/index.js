import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const Booklist = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src="./images/book1.jpg"
    alt="Atomic Habits: An Easy & Proven Way to Build"
  />
)

const Title = () => <h3>Atomic Habits: An Easy & Proven Way to Build</h3>
const Author = () => <h4>James Clear</h4>

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Booklist />)

export default Booklist
