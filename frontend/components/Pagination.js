import Head from "next/head";
import PaginationStyles from "./styles/PaginationStyles";
import Link from "next/link";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import ErrorMessage from "./ErrorMessage";

const PAGINATION_QUERY = gql`
    query PAGINATION_QUERY {
        _allProductsMeta{
            count
        }
    }
`;

export default function Pagination({ page }){
    const {error, loading, data} = useQuery(PAGINATION_QUERY);

    if (loading) return <p>Loading...</p>
    if (error) return <ErrorMessage error={error} />
    
    return (
        <PaginationStyles>
            <Head>
                <title>
                    TossFits - Page { page } of ___
                </title>
            </Head>
            <Link href="/">Prev</Link>
            <p>Page __ of ___</p>
            <p>___ Items Total</p>
            <Link href="/">Next</Link>
        </PaginationStyles>
    );
}