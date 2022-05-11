import RegisterForm from '../../components/register/register-form.component';

import { AuthenticationContainer } from './authentication.styles';

const Register = () => {
    return (
        <AuthenticationContainer>
            <RegisterForm />
        </AuthenticationContainer>
    );
};

export default Register;
