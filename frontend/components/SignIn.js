import Form from './styles/Form';

export default function SignIn(){
    return (
        <Form>
            <fieldset>
                <label>
                    Email
                    <input 
                        type="password" 
                        name="password" 
                        placeholder='Your Email Address' 
                    />
                </label>
            </fieldset>
        </Form>
    )
}