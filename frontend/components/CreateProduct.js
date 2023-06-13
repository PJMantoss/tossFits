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
                <button type="submit" onClick={resetForm}>+ Add Product</button>
            </fieldset>
        </Form>
    );
}

export default CreateProduct;
