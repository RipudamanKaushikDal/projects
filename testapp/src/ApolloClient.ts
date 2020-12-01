import {ApolloClient,InMemoryCache,gql} from '@apollo/client';

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