import {useEffect, useState} from 'react';
import ".App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Shelves from "../pages/Shelves"
import Searchpage from './pages/Searchpage';
import {getAll} from "./BooksAPI";

function BooksApp() {
  const [books, setBooks] = useState([])
  const [bookView, setBookView] = useState({})
  const setAll = () => {
    getAll().then(all => {
      if(all) setBooks(all)
    }).catch(e => console.log(e))
  }

  function updateShelf(shelf, book) {
    const b = books.filter(b => b.id !== book.id)
    if(b.length > 0) {
      const other = books.filter(b => b.id !== book.id)
      b[0].shelf =shelf
      setBooks([...other, ...b])
    } else {
      book.shelf = shelf
      setBooks([...books, book])
    }
  }

  useEffect(() => {
    setAll();
  }, [])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Shelves books={books} updateShelf={updateShelf} setView={setBookView}/>} />
          <Route exact path="/search" element={<Search books={books} updateShelf={updateShelf} setView={setBookView}/>} />
          <Route exact path="/detail" element={<Detail book={bookView}/>} />
        </Routes>
      </div>
    </Router>
  );
}


export default BooksApp
