import { graphQLSchemaExtension } from '@keystone-next/keystone/schema';
import addToCart from './addToCart';

// fake graphql tagged template literal string
const graphql = String.raw;

export const extendGraphqlSchema = graphQLSchemaExtension({
    typeDefs: graphql`
        type Mutation {
            addToCart(productID: ID): CartItem
        }
    `,
    resolvers: {
        Mutation: {
            addToCart,
        }
    }
});