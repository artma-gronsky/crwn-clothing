import React, {useState} from 'react';

import './sign-in.styles.scss';
import {FormInput} from "../form-input/form-input.component";
import {CustomButton} from "../custom-button/custom-button.component";
import {connect} from "react-redux";
import {emailSignInStart, googleSignInStart} from "../../redux/user/user.actions";


const SignIn = ({googleSignInStart, emailSignInStart}) => {
    const [userCredential, setCredential] = useState({email: '', password: ''})

    const handleSubmit = async (event) => {
        event.preventDefault();
        emailSignInStart({email: userCredential.email, password: userCredential.password});
    }

    const handleChanges = (event) => {
        const {value, name} = event.target;
        setCredential({...userCredential, [name]: value})

    }

    return (<div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput name='email' type='email' value={userCredential.email} required
                       onChange={(event) => {
                           handleChanges(event)
                       }} label="Email"/>
            <FormInput name='password' type='password' value={userCredential.password} required
                       onChange={(event) => handleChanges(event)} label='Password'/>
            <div className='buttons'>
                <CustomButton type='submit'>Sign In</CustomButton>
                <CustomButton isGoogleSignIn onClick={(event) => {
                    event.preventDefault();
                    googleSignInStart();
                }}>{' '}
                    Sign In With Google
                    {' '}</CustomButton>
            </div>
        </form>
    </div>)
}

export default connect(null, dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: ({email, password}) => dispatch(emailSignInStart({email, password}))
}))
(SignIn);