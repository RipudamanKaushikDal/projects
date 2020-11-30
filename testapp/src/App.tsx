import React,{useState} from 'react'
import './App.scss';
import BookDetails from './components/BookDetails'
import {Book} from './types'

function App() {

  const [showBook, setshowBook] = useState(false)
  

  const loadBook = (book:Book) => {
    setshowBook(!showBook)
  }

  return (
    <div className="app">
      <div className="shelf" >
        {BookData.map((book:Book) => ( 
            <>
              <img src={book.thumbnail} alt="preview" className="covers" onClick={() =>loadBook(book)} />
          </>
          ))}
      </div>
      {showBook && <BookDetails book={bookDetails} />}
      </div>
  );
}

export default App;

