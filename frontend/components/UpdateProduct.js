import { useMutation, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Form from "./styles/Form";
import useForm from "../lib/useForm";
import DisplayError from "./ErrorMessage";

const SINGLE_PRODUCT_QUERY = gql`
    query SINGLE_PRODUCT_QUERY($id: ID!) {
        Product(where: {id: $id}){
            name
            price
            description
            id
            photo {
                image {
                    publicUrlTransformed
                }
                altText
            }
        }
    }
`;

const UPDATE_PRODUCT_MUTATION = gql`
    mutation UPDATE_PRODUCT_MUTATION(
        $id: ID!
        $name: String
        $description: String
        $price: Int
    ){
        updateProduct(
            id: $id,
            data: {
                id: $id,
                name: $name,
                description: $description,
                price: $price
            }
        )
    }
`;

export default function UpdateProduct({ id }){
    //Get the specific product
    const {data, error, loading} = useQuery(SINGLE_PRODUCT_QUERY, {
        variables: {
            id
        }
    });

// use mutation to update the product
    const [updateProduct, {
        data: updateData, 
        error: updateError, 
        loading: updateLoading
    }] = useMutation(UPDATE_PRODUCT_MUTATION, {
        variables: {
            id,
        }
    });

    //console.log(data)

    //create state for the form inputs
    const {inputs, handleChange, resetForm, clearForm} = useForm(data?.Product);

    //If loading 
    if(loading) return <p>Loading...</p>

    return (
        <Form
            onSubmit={
               async e => {
                    e.preventDefault(); 
                    console.log(inputs);
                    // Submit the input fields to the backend
                    const res = await updateProduct();
                    //console.log(res);
                    // clearForm();
                    // // Go to that product's page
                    // Router.push({
                    //     pathname: `/product/${res.data.createProduct.id}`
                    // })
                }
            }
        >
            <DisplayError error={error || updateError} />

            <fieldset disabled={updateLoading} aria-busy={updateLoading}>
                <label htmlFor="name">
                    Name
                    <input 
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Name"
                        value={inputs.name}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="price">
                    Price
                    <input 
                        id="price"
                        name="price"
                        type="number"
                        placeholder="Price"
                        value={inputs.price}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="description">
                    Description
                    <textarea 
                        id="description"
                        name="description"
                        placeholder="Description"
                        value={inputs.description}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">+ Update Product</button>
            </fieldset>
        </Form>
    );
}