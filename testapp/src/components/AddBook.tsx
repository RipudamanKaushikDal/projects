import React from 'react';
import { useState,useContext } from 'react';
import BookContext from '../BookContext';
import "./AddBook.scss";
import {addbook} from "../ApolloClient"
import {useMutation} from "@apollo/client"
import { Book } from '../types';

function AddBook() {

    const [book, setBook] = useState({} as Book);
    const {showForm, setShowForm}  = useContext(BookContext)
    const [addBook,{data}] = useMutation(addbook)


    const  handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setBook(prevState => {
            return {
                ...prevState,[e.target.name] : e.target.value
            }
        })
    }

    const submitForm = () => {
        setShowForm(!showForm)
        addBook({
            variables:{
                id:Number(book.id),
                author:book.author,
                name:book.name,
                thumbnail:book.thumbnail,
                imageUri:book.imageUri,
                price:Number(book.price)

            }
        })

        console.log(data)
    }

    return (
        <div className="form_container">
            <form onSubmit={submitForm} className="form">
                <label>ID:</label>
                <input name="id" type="text" onChange={handleInputChange}  className="fields" />
                <label>Name:</label>
                <input name="name" type="text" onChange={  handleInputChange}className="fields" />
                <label>Author:</label>
                <input name="author" type="text" onChange={  handleInputChange}className="fields" />
                <label>Thumbnail:</label>
                <input name="thumbnail" type="text" onChange={  handleInputChange}className="fields" />
                <label>ImageUri:</label>
                <input name="imageUri" type="text" onChange={  handleInputChange}className="fields" />
                <label>Price:</label>
                <input name="price" type="text" onChange={  handleInputChange}className="fields" />
                <input name="button" type="submit" className="submit_button" />
            </form>
        </div>
    )
}

export default AddBook
