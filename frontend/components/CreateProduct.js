import React from 'react';
import useForm from '../lib/useForm';

const CreateProduct = () => {
    const {inputs, handleChange} = useForm({
        name: "Big Shoes"
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
                    type="text"
                    placeholder="Price"
                    value={price}
                    onChange={handleChange}
                />
            </label>
        </form>
    );
}

export default CreateProduct;
