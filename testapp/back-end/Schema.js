import { GraphQLObjectType, GraphQLString,GraphQLList,GraphQLNonNull,GraphQLInt, GraphQLSchema, GraphQLFloat} from "graphql";
import axios from 'axios';


const BookType = new GraphQLObjectType({
    name:'Book',
    fields:() => ({
        id:{type:GraphQLInt},
        name:{type:GraphQLString},
        thumbnail:{type:GraphQLString},
        imageUri:{type:GraphQLString},
        price:{type:GraphQLFloat},
        author:{type:GraphQLString},
    })
});

const dataUrl = "http://localhost:5000/bookData"


const MainQueryType = new GraphQLObjectType({
    name:'MainQuery',
    fields:{
        getBook:{
            type:BookType,
            args:{
                id:{type:GraphQLInt}
            },
            resolve:(parent,args) => {
                return axios.get(dataUrl+"/"+args.id)
                    .then(res => res.data)
            }
            
        },

        listBooks:{
            type:GraphQLList(BookType),
            resolve:() => {
                return axios.get(dataUrl)
                    .then(res => res.data)
            }
        },


      
    }
});


const MutationsType = new GraphQLObjectType({
    name:"Mutations",
    fields:{
        addBook:{
          type:BookType,
          args:{
                id:{type:GraphQLNonNull(GraphQLInt)},
                name:{type:GraphQLNonNull(GraphQLString)},
                thumbnail:{type:GraphQLNonNull(GraphQLString)},
                imageUri:{type:GraphQLNonNull(GraphQLString)},
                price:{type:GraphQLNonNull(GraphQLFloat)},
                author:{type:GraphQLNonNull(GraphQLString)},
           
          },
          resolve: (parent,args) => {
              return axios.post(dataUrl,{

                  id:args.id,
                  name:args.name,
                  thumbnail:args.thumbnail,
                  imageUri:args.imageUri,
                  price:args.price,
                  author:args.author,

              })
                .then(res => res.data)
          } 
        },
    },
});

const Schema = new GraphQLSchema({
    query:MainQueryType,
    mutation:MutationsType,
});

export default Schema;