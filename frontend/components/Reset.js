import Form from './styles/Form';
import useForm from '../lib/useForm';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import { useMutation } from '@apollo/client';
import Error from './ErrorMessage';

const RESET_MUTATION = gql`
    mutation RESET_MUTATION ($email: String!, $token: String!, $password: String!){
        redeemUserPasswordResetToken(email: $email, token: $token, password: $password){
            email
            password
            token
        }
    }
`;

export default function Reset(){
    const { inputs, handleChange, resetForm } = useForm({
        email: '',
    });

    const [reset, {data, loading, error}] = useMutation(RESET_MUTATION, {
        variables: inputs,
    });

    const secondError = data?.redeemUserPasswordResetToken?.code 
        ? data?.redeemUserPasswordResetToken 
        : undefined;

    async function handleSubmit(e){
        e.preventDefault();
        console.log(inputs);
        const res = await reset();
        console.log(res);
        resetForm();
        console.log(error);
    }

    return (
        <Form method="POST" onSubmit={handleSubmit}>
            <h2>Reset a Password</h2>
            <Error error={error || secondError} />
            <fieldset>
                {data?.redeemUserPasswordResetToken === null &&(
                    <p>
                        Success! You can now sign in
                    </p>
                )}
                
                <label htmlFor='email'>
                    Email
                    <input 
                        type="email" 
                        name="email" 
                        placeholder='Your Email Address' 
                        autoComplete='email'
                        value={inputs.email}
                        onChange={handleChange}
                    />
                </label>

                <button type="submit">Request Reset</button>
            </fieldset>
        </Form>
    )
}