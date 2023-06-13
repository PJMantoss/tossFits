import React from 'react';
import useForm from '../lib/useForm';
import Form from './styles/Form';

const CreateProduct = () => {
    const {inputs, handleChange, resetForm, clearForm} = useForm({
        name: "Big Shoes",
        price: 4000,
        description: "Nice shoes"
    });
    return (
        <Form>
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
            </fieldset>
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
            <button type="button" onClick={resetForm}>Reset Form</button>
            <button type="button" onClick={clearForm}>Clear Form</button>
        </Form>
    );
}

export default CreateProduct;
