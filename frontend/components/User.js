import { gql, useQuery } from '@apollo/client';

const CURRENT_USER_QUERY = gql``;

export default function useUser(){
    const { data } = useQuery(CURRENT_USER_QUERY);
}