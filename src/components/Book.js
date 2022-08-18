import React from "react";
import {update} from "../BooksAPI";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";


function Book({book, setView, inputShelf}) {
  async function updateBook(e){
    try{
      await update(book, e.target.value)
      inputShelf(e.target.value, book)
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      {(book.authors && book.imageLinks) && <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}>
            </div>
              <div className="book-shelf-changer">
                <select defaultValue = {book.shelf} onChange = {updateBook}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <Link exact to = "/detail">
              <div className="book-title" onClick = {() => setView(book)}>
                {book.title}
              </div>
            </Link>
            {book.authors.map(author => (
              <div key = {book.id + author}>
                <div className="book-authors">{author}</div>
              </div>
            ))}
        </div>}
    </div>
  )
}
Book.prototype = {
  book: PropTypes.object.isRequired,
  inputShelf: PropTypes.func.isRequired,
  setView: PropTypes.func.isRequired
}
export default Book