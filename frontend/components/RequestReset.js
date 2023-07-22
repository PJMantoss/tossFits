import Form from './styles/Form';
import useForm from '../lib/useForm';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import { useMutation } from '@apollo/client';
import Error from './ErrorMessage';

const REQUEST_RESET_MUTATION = gql`
    mutation REQUEST_RESET_MUTATION ($email: String!){
        sendUserPasswordResetLink(email: $email){
            code
            message
        }
    }
`;

export default function RequestReset(){
    const { inputs, handleChange, resetForm } = useForm({
        email: '',
    });

    const [resetRequest, {data, loading, error}] = useMutation(REQUEST_RESET_MUTATION, {
        variables: inputs,
        //refetchQueries: [{ query: CURRENT_USER_QUERY }]
    })

    async function handleSubmit(e){
        e.preventDefault();
        console.log(inputs);
        const res = await resetRequest();
        console.log(res);
        resetForm();
        console.log(error);
    }

    // const error = data?.authenticateUserWithPassword.__typename ===
    //             'UserAuthenticationWithPasswordFailure' ?
    //             data?.authenticateUserWithPassword : undefined;

    return (
        <Form method="POST" onSubmit={handleSubmit}>
            <h2>Request a Password Reset</h2>
            <Error error={error} />
            <fieldset>
                {data?.sendUserPasswordResetLink === null &&(
                    <p>
                        Success! Check Your email for a link!
                    </p>
                )}
                
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

                <button type="submit">Request Reset</button>
            </fieldset>
        </Form>
    )
}