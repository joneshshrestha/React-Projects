const Book = (props) => {
  const { img, author, title, id, getBook } = props
  //   const getSingleBook = () => {
  //     getBook(id)
  //   }

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <button onClick={() => getBook(id)}>GET BOOK</button>
      <h4>{author}</h4>
    </article>
  )
}

export default Book
