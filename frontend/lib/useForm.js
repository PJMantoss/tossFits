import { useState } from 'react';

function useForm(initial = {}) {
    // create a state object for input
    const [state, setstate] = useState(initial);
}

function handleChange(){
    setInputs({
        // Copy existing state
        ...inputs,
    })
}

export default useForm;