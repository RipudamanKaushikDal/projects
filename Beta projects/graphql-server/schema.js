const { GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLSchema } = 
require('graphql');

const axios = require('axios');


const customers = [
    {id:'1', name:"Ripudaman",email:"abc@tou.com",age:24},
    {id:"2", name:"John",email:"123@tou.com",age:23},
    {id:"3", name:"Sarah",email:"Whatsup@tou.com",age:22},
];

const CustomerType = new GraphQLObjectType ({
    name:'Customer',
    fields:() => ({
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        age:{type:GraphQLInt}
    })
});

const RootQuery = new GraphQLObjectType ( {

    name:'RootQueryType',
    fields:{
        customer: {
            type:CustomerType,
            args:{
                id:{type:GraphQLString},
            },
            resolve:(parent,args)  => {
               
                return axios.get("http://localhost:3000/customers/" + args.id)
                            .then(res => res.data)                
                    }
                       
            },

        customers: {
            type: new GraphQLList(CustomerType),
            resolve: () => (
                axios.get("http://localhost:3000/customers")
                            .then(res => res.data)    
            )
        }

    }
    

});

const Mutation = new GraphQLObjectType ( {
    
        name:"mutation",
        fields:{
            addCustomer:{
            type:CustomerType,
            args:{
                name:{type:new GraphQLNonNull(GraphQLString)},
                age:{type:new GraphQLNonNull(GraphQLInt)},
                email:{type:new GraphQLNonNull(GraphQLString)}
            },

            resolve:(parent,args) => (
                axios.post("http://localhost:3000/customers", {

                    name: args.name,
                    age:args.age,
                    email:args.email
                }). then( res => res.data)
            )
        },

        deleteCustomer:{
            type:CustomerType,
            args:{
                id:{type: new GraphQLNonNull(GraphQLString)}
            },

            resolve:(parent,args) => (
                axios.delete("http://localhost:3000/customers/" + args.id)
                    . then( res => res.data)
            )
        },

        editCustomer:{
            type:CustomerType,
            args:{
                id:{type: new GraphQLNonNull(GraphQLString)},
                name:{type:GraphQLString},
                age:{type:GraphQLInt},
                email:{type:GraphQLString}
            },

            resolve:(parent,args) => (
                axios.patch("http://localhost:3000/customers/" + args.id, args)
                    .then( res => res.data)
            )
        },
        
        
    }
    
})

 module.exports= new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation
})


