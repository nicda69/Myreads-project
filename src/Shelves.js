import React from "react";
import {Link} from "react-router-dom"
import PropTyes from "prop-types";
import Shelf from "./components/Shelf"

function Shelves({books, setView, inputShelf}) {
    const shelvesDetail = [
                        {id: "shelf1", title:"Current Reading", filter: "currentlyReading"},
                        {id: "shelf2", title:"Want to Read", filter: "wantToRead"},
                        {id: "shelf3", title:"Read", filter:"read"}
                    ]
        return (
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {shelvesDetail.map(s => (
                            <div key = {s.id}>
                                <Shelf title = {s.title} books = {books.filter(book.shelf === s.filter)} inputShelf={inputShelf} setView={setView}/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className = "open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        </div>
        )
}
Shelves.prototype = {
    books: PropTyes.array.isRequired,
    inputShelf: PropTyes.func.isRequired,
    setView: PropTyes.func.isRequired
}

export default Shelves