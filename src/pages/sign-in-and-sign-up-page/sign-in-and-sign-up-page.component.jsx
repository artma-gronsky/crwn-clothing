import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import './sign-in-and-sign-up-page.scss';
import {useNavigate} from "react-router-dom";

const SignInAndSignUpPage = (prop) => {
    const navigate = useNavigate();
    return (

        <div className='sing-in-and-sign-up'>
            <div className='sign-in-container'><SignIn/></div>
            <div className='sign-up-container'><SignUp navigate={navigate}/></div>
        </div>
    )
}


export default SignInAndSignUpPage;