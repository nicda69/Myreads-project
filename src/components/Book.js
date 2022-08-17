import React from "react";
import {update} from "../BooksAPI";
import {Link} from "react-router-dom";


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
      {(book.author && book.imageLinks) && 
        <div className="book">
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
            {book.author.map(author => (
              <div key = {book.id + author}>
                <div className="book-authors">Harper Lee</div>
              </div>
            ))}
        </div>}
    </div>
  )
}
export default Book