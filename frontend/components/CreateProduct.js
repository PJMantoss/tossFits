import React from 'react';
import useForm from '../lib/useForm';

const CreateProduct = () => {
    const {inputs, handleChange, resetForm, clearForm} = useForm({
        name: "Big Shoes",
        price: 4000,
        description: "Nice shoes"
    });
    return (
        <form>
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
        </form>
    );
}

export default CreateProduct;
