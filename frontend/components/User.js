import { gql, useQuery } from '@apollo/client';

export const CURRENT_USER_QUERY = gql`
    query {
        authenticatedItem {
            ... on User {
                id
                email
                name
                # Query the Cart once its created
                cart {
                    id
                    quantity
                    product {
                        id
                        price
                        photo {
                            image {

                            }
                        }
                    }
                }
            }
        }
    }
`;

export function useUser(){
    const { data } = useQuery(CURRENT_USER_QUERY);
    return data?.authenticatedItem;
}