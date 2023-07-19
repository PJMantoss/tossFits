import Form from './styles/Form';
import useForm from '../lib/useForm';

export default function SignIn(){
    const { inputs, handleChange, resetForm } = useForm({
        email: '',
        password: ''
    });

    function handleSubmit(e){
        e.preventDefault();
        console.log(inputs);
    }

    return (
        <Form method="POST" onSubmit={handleSubmit}>
            <fieldset>
                <label>
                    Email
                    <input 
                        type="email" 
                        name="email" 
                        placeholder='Your Email Address' 
                        autocomplete='email'
                        value={inputs.email}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Password
                    <input 
                        type="password" 
                        name="password" 
                        placeholder='Your Password'
                        autocomplete='password'
                        value={inputs.password}
                        onChange={handleChange}
                    />
                </label>

                <button type="submit">Sign In</button>
            </fieldset>
        </Form>
    )
}