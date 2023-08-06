import { graphQLSchemaExtension } from '@keystone-next/keystone/schema';

// fake graphql tagged template literal string
const graphql = String.raw;
export const exportGraphQLSchema = graphQLSchemaExtension({
    typeDefs: gql`
        type mutation {
            addToCart(productID: ID)
        }
    `
    //resolvers
})