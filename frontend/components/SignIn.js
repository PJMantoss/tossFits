import Form from './styles/Form';

export default function SignIn(){
    return (
        <Form>
            <fieldset>
                <label>
                    Email
                    <input 
                        type="email" 
                        name="email" 
                        placeholder='Your Email Address' 
                    />
                </label>

                <label>
                    Password
                    <input 
                        type="password" 
                        name="password" 
                        placeholder='Your Password' 
                    />
                </label>
            </fieldset>
        </Form>
    )
}