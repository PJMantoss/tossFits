import Head from "next/head";
import PaginationStyles from "./styles/PaginationStyles";

export default function Pagination({ page }){
    return (
        <PaginationStyles>
            <Head>
                <title>
                    TossFits - Page { page } of ___
                </title>
            </Head>
        </PaginationStyles>
    );
}