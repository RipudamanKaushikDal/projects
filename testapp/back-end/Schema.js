import { GraphQLObjectType, GraphQLList,GraphQLString, GraphQLInt, GraphQLSchema, GraphQLEnumType} from "graphql";
import {bookData} from './Data.js';


const BookType = new GraphQLObjectType({
    name:'Book',
    fields:() => ({
        id:{type:GraphQLInt},
        name:{type:GraphQLString},
        thumbnail:{type:GraphQLString},
        imageUri:{type:GraphQLString},
        price:{type:GraphQLInt},
        author:{type:GraphQLString},
    })
});

const PropertiesType = new GraphQLEnumType({
    name:'Properties',
    values:{
        id:{value:0},
        name:{value:1},
        thumbnail:{value:2},
        imageUri:{value:3},
        price:{value:4},
        author:{value:5},
    }
});

const MainQueryType = new GraphQLObjectType({
    name:'MainQuery',
    fields:{
        getBook:{
            type:BookType,
            args:{
                id:{type:GraphQLInt}
            },
            resolve:(parent,args) => {
                const bookSearch= bookData.filter(book => book.id === args.id)
                return bookSearch[0]
            }
            
        },

        listBooks:{
            type:GraphQLList(BookType),
            resolve:() => bookData,
        },


      
    }
});

const Schema = new GraphQLSchema({
    query:MainQueryType,
});

export default Schema;