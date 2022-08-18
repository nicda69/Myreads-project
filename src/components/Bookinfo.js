import React from "react";
import "../App.css";
import {Link} from "react-router-dom";

function Detail({book}) {
    return (
        <div className="list-books">
            <Link to='/'className="close-search">
            Close
            </Link>
            <div className='detail-body'>
                <div className="book-cover"style={{width: 128, height: 192, marginRight: 10, backgroundImage:`url(${book.imageLinks.thumbnail})`,}}>
                </div>
                <div className='book-detail'>
                    <div className="book-detail-title">
                        {book.title}
                    </div>
                <div className="book-detail-sub">
                    {book.description}
                </div>
                <div className="book-detail-sub">
                    Author(s) {book.authors.map(a => (
                        <div key={'detail' + a + book.id}>
                            <div className="book-detail-sub">{a}</div>
                        </div>
                    ))}
                </div>
                <div className="book-detail-sub">
                    Pages:{book.pageCount}
                </div>
                <div className="book-detail-sub">
                    Average Rating:{book.averageRating}
                </div>
                <div className="book-detail-sub">
                    Publisher:{book.publisher}
                </div>
                <div className="book-detail-sub">
                    Published On:{book.publishedDate}
                </div>
                <div className="book-detail-sub">
                    Preview: <a href={book.previewLink}> {book.previewLink} </a>
                </div>
                </div>
            </div>
        </div>
  )
}

export default Detail