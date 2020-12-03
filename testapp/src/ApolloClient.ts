import {ApolloClient,InMemoryCache,gql} from '@apollo/client';
import {Book} from  "./types"

export const apolloClient = new ApolloClient({
    uri:"http://localhost:4000/books",
    cache: new InMemoryCache(),
})


export const getThumbnails = gql`
    query GetThumbnails {
        listBooks {
            id
            thumbnail
        }
    }
`;

export const getBook = gql`
    query GetBook($id:Int) {
        getBook(id:$id) {
            name
            author
            imageUri
            price
        }
    }
`;


export const addbook = gql`
    mutation AddBook($id:Int!,
        $name:String!,
        $thumbnail:String!,
        $imageUri:String!,
        $author:String!,
        $price:Float!
        ){
        addBook(
            id:$id,
            name:$name,
            thumbnail:$thumbnail,
            imageUri:$imageUri,
            author:$author,
            price:$price
        ) {
            id
            name  
        }
    }
`;