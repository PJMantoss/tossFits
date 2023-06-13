import { useState } from 'react';

function useForm(initial = {}) {
    // create a state object for input
    const [inputs, setInputs] = useState(initial);

    function handleChange(e){
        const {name, value} = e.target;
        setInputs({
            // Copy existing state
            ...inputs,
            [name]: value
        })
    }

    // Return what we want to surface from this custom hook
    return {
        inputs,
        handleChange
    }
}

export default useForm;