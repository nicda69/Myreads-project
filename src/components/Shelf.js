import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

function Shelf ({title, books, setView, inputShelf}) {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => (
              <li key = {book.id}>
                <Book book = {book} inputShelf = {inputShelf} setView = {setView}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}
