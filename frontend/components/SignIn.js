import Form from './styles/Form';
import useForm from '../lib/useForm';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';

const SIGNIN_MUTATION = gql`
    mutation SIGNIN_MUTATION ($email: String!, $password: String!){
        authenticateUserWithPassword(email: $email, password: $password){
            ... on UserAuthenticationWithPasswordSuccess{
                item {
                    id
                    email
                    name
                }
            }
        }
    }
`;

export default function SignIn(){
    const { inputs, handleChange, resetForm } = useForm({
        email: '',
        password: ''
    });

    const [signin, {error, loading}] = useMutation(SIGNIN_MUTATION, {
        variables: inputs,
        refetchQueries: [{ query: CURRENT_USER_QUERY }]
    })

    function handleSubmit(e){
        e.preventDefault();
        console.log(inputs);
    }

    return (
        <Form method="POST" onSubmit={handleSubmit}>
            <fieldset>
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