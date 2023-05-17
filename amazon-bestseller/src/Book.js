const Book = (props) => {
  const { img, author, title, id, getBook, index } = props
  //   const getSingleBook = () => {
  //     getBook(id)
  //   }

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <h4>{author}</h4>
      <span className="number">{`# ${index}`}</span>
    </article>
  )
}

export default Book
