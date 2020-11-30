import React from 'react';
import "./BookDetails.scss"
import {Book} from "../types"

function BookDetails(props:Book) {

    const {book} = props
    return (
        <div className="book-details">
            <img src={book.imageUri} alt="cover" className="book-cover"/>
            <h3>{book.name}</h3>
            <div className="description">
                <h4>By: {book.author}</h4>
                <h4>{`Price: $${book.price}`}</h4>
            </div>
        </div>
    )
}

export default BookDetails
