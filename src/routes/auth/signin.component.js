import SignInForm from '../../components/sign-in/sign-in-form.component';

import { AuthenticationContainer } from './authentication.styles';

const SignIn = () => {
    return (
        <AuthenticationContainer>
            <SignInForm />
        </AuthenticationContainer>
    );
};

export default SignIn;
