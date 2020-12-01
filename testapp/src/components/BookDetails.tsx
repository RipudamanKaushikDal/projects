import React from 'react';
import "./BookDetails.scss"
import {useQuery} from '@apollo/client';
import { getBook } from '../ApolloClient';

type Proptype = {
    id:number;
}

function BookDetails(prop:Proptype) {

    const {id} = prop;

    const {loading,error,data} = useQuery(getBook,{
        variables:{id},
    },)

    console.log(error)

    return (
        <>
        {loading === true? <p>Loading ...</p>:
            <div className="book-details">
                <img src={data.getBook.imageUri} alt="cover" className="book-cover"/>
                <h3>{data.getBook.name}</h3>
                <div className="description">
                    <h4>By: {data.getBook.author}</h4>
                    <h4>{`Price: $${data.getBook.price}`}</h4>
                </div>
            </div>}
        </>
    )
}

export default BookDetails
