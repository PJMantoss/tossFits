import { useState, useEffect } from 'react';

function useForm(initial = {}) {
    // create a state object for input
    const [inputs, setInputs] = useState(initial);

    const initialValues = Object.values(initial).join('');

    useEffect(() => {
        
    }, [initialValues]);

    function handleChange(e){
        let {name, value, type} = e.target;
        if(type === "number"){
            value = parseInt(value);
        }
        if(type === "file"){
            [value] = e.target.files;
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