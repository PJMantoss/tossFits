import Form from './styles/Form';
import useForm from '../lib/useForm';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import { useMutation } from '@apollo/client';
import Error from './ErrorMessage';

const SIGNUP_MUTATION = gql`
    mutation SIGNUP_MUTATION ($name: String! $email: String!, $password: String!){
        createUser(data: {name: $name, email: $email, password: $password}){
            id
            email
            name
        }
    }
`;

export default function SignUp(){
    const { inputs, handleChange, resetForm } = useForm({
        name: '',
        email: '',
        password: ''
    });

    const [signup, {data, loading, error}] = useMutation(SIGNUP_MUTATION, {
        variables: inputs,
        //refetchQueries: [{ query: CURRENT_USER_QUERY }]
    })

    async function handleSubmit(e){
        e.preventDefault();
        console.log(inputs);
        const res = await signup();
        console.log(res);
        resetForm();
        console.log(error);
    }

    // const error = data?.authenticateUserWithPassword.__typename ===
    //             'UserAuthenticationWithPasswordFailure' ?
    //             data?.authenticateUserWithPassword : undefined;

    return (
        <Form method="POST" onSubmit={handleSubmit}>
            <h2>Register for an Account</h2>
            <Error error={error} />
            <fieldset>
                {data?.createUser &&(
                    <p>
                        Signed Up with {data.createUser.email} - Please Go ahead and Sign in!
                    </p>
                )}
                <label htmlFor='name'>
                    Name
                    <input 
                        type="name" 
                        name="name" 
                        placeholder='Your Name' 
                        autocomplete='name'
                        value={inputs.name}
                        onChange={handleChange}
                    />
                </label>

                <label htmlFor='email'>
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

                <label htmlFor='password'>
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