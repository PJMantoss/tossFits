import React from 'react';
import useForm from '../lib/useForm';
import Form from './styles/Form';
import gql from 'graphql-tag';

const CREATE_PRODUCT_MUTATION = gql`
    mutation CREATE_PRODUCT_MUTATION(
        # Variables getting passed in and their types
        $name: String!
        $description: String!
        $price: Int!
        $image: Upload
    ) {
        createProduct (
            data:{
            name: $name,
            description: $description,
            price: $price,
            status: "AVAILABLE"
            photo: { create: { image: $image, altText: $name } }
        }
        ){
            id
            price
            description
            status
        }
    }
`;

const CreateProduct = () => {
    const {inputs, handleChange, resetForm, clearForm} = useForm({
        name: "Big Shoes",
        price: 4000,
        description: "Nice shoes"
    });

    const [ createProduct, { loading, error, data } ] = useMutation(
        CREATE_PRODUCT_MUTATION,
        {
            variables: inputs
        }
    );

    return (
        <Form
            onSubmit={e => { e.preventDefault(); console.log(inputs);}}
        >
            <fieldset>
                <label htmlFor="image">
                    Image
                    <input 
                        id="image"
                        name="image"
                        type="file"
                        onChange={handleChange}
                    />
                </label>
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
                <button type="submit">+ Add Product</button>
            </fieldset>
        </Form>
    );
}

export default CreateProduct;
