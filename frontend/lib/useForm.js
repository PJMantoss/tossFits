import { useState } from 'react';

function useForm(initial = {}) {
    // create a state object for input
    const [inputs, setInputs] = useState(initial);

    function handleChange(e){
        let {name, value, type} = e.target;
        if(type === "number"){
            value = parseInt(value);
        }
        if(type === "file"){
            value[0] = e.target.files;
        }

        setInputs({
            // Copy existing state
            ...inputs,
            [name]: value
        })
    }

    function resetForm(){
        setInputs(initial)
    }

    function clearForm(){
        const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, ""]));

        setInputs(blankState);
    }

    // Return what we want to surface from this custom hook
    return {
        inputs,
        handleChange,
        resetForm,
        clearForm
    }
}

export default useForm;