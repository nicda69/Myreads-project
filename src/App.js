import "./App.css";
import { useEffect, useState } from "react";
import Search from "./components/Search";
import Shelves from "./Shelves";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {getAll} from "./BooksAPI"
import Detail from "./components/Bookinfo";

function App() {
  const [books, setBooks] = useState([])
  const [bookView, setBookView] = useState({})
  
  const setData = () => {
      getAll().then(data => {
        if(data) setBooks(data) 
      }).catch(e => console.log(e))
    }

  function inputShelf(shelf, book){
    const b = books.filter(b => b.id === book.id)
    if(b.length > 0){
      const other = books.filter(b => b.id !== book.id)
      b[0].shelf = shelf
      setBooks([...other,...b])
    } else {
      book.shelf = shelf
      setBooks([...books,book])
    }
  }

  useEffect(() => {
    setData();
  }, [])

  return(
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Shelves books={books} inputShelf={inputShelf} setView={setBookView}/>} />
          <Route exact path="/search" element={<Search books={books} inputShelf={inputShelf} setView={setBookView}/>} />
          <Route exact path="/bookinfo" element={<Detail book={bookView}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

