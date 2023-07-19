import Form from './styles/Form';

export default function SignIn(){
    return (
        <Form method="POST">
            <fieldset>
                <label>
                    Email
                    <input 
                        type="email" 
                        name="email" 
                        placeholder='Your Email Address' 
                        autocomplete='email'
                    />
                </label>

                <label>
                    Password
                    <input 
                        type="password" 
                        name="password" 
                        placeholder='Your Password'
                        autocomplete='password'
                    />
                </label>

                <button type="submit">Sign In</button>
            </fieldset>
        </Form>
    )
}