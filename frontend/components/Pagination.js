import Head from "next/head";
import PaginationStyles from "./styles/PaginationStyles";
import Link from "next/link";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

const PAGINATION_QUERY = gql`
    query PAGINATION_QUERY {
        _allProductsMeta{
            count
        }
    }
`;

export default function Pagination({ page }){
    const {error, loading, data} = useQuery(PAGINATION_QUERY);
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