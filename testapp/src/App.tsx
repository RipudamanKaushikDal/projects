import React,{useState,useContext} from 'react'
import './App.scss';
import BookDetails from './components/BookDetails'
import {Book} from './types'
import { useQuery} from '@apollo/client'
import { getThumbnails} from './ApolloClient';
import BookContext from './BookContext'
import AddBook from './components/AddBook';

function App() {

  const [showBook, setshowBook] = useState(false)
  const [bookID, setBookID] = useState(0)
  const {loading,error,data} = useQuery(getThumbnails)
  const [showForm,setShowForm]= useState(false)
  


  const loadBook = (id:number) => {
    setshowBook(!showBook)
    setBookID(id)
  }


  return (
    
    <BookContext.Provider value={{showForm,setShowForm}}>

      <div className="app">
        {loading === true?  <p>Loading ...</p>:
        <div className="shelf" >
          {data.listBooks.map((book:Book) => ( 
              
                <img src={book.thumbnail} alt="preview" className="covers" onClick={() =>loadBook(book.id)}  key={book.id}/>
            ))}
        </div>}
        {showBook ===true?<BookDetails id={bookID} />:
          <button className="add_book" onClick={() => setShowForm(!showForm)} >
            Add Book
          </button>
          }
          
         {showForm && <AddBook />}
        </div>
   
    </BookContext.Provider>
  );
}

export default App;

