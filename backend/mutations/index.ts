import { graphQLSchemaExtension } from '@keystone-next/keystone/schema';

export const exportGraphQLSchema = graphQLSchemaExtension({
    typeDefs:`
        type mutation {
            addToCart(productID: ID)
        }
    `
    //resolvers
})