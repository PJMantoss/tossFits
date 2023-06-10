import React, { useState } from 'react';

const CreateProduct = () => {
    const [name, setName] = useState('Toss');
    return (
        <form>
            <label htmlFor="name">
                Name
                <input 
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={e => console.log(e.target.value)}
                />
            </label>
            <label htmlFor="price">
                Price
                <input 
                    id="price"
                    name="price"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={e => console.log(e.target.value)}
                />
            </label>
        </form>
    );
}

export default CreateProduct;
