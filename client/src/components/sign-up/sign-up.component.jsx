import React, {useState} from "react";

import {connect} from "react-redux";

import {signUpStart} from "../../redux/user/user.actions";

import {FormInput} from "../form-input/form-input.component";
import {CustomButton} from "../custom-button/custom-button.component";

import './sign-up.styles.scss';

const SignUp = ({signUpStart}) => {
    const [signUpData, setSignUpData] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (event) => {
        const {name, value} = event.target;

        setSignUpData({
            ...signUpData,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = signUpData;

        if (password !== confirmPassword) {
            alert("Passwords don't match!");
        }

        signUpStart({email, password, displayName});
    }
    return (<div className='sign-up'>
        <h2 className='title'>I don't have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form  ' onSubmit={handleSubmit.bind(this)}>
            <FormInput name='displayName' type='text' value={signUpData.displayName} required
                       onChange={handleChange.bind(this)} label="Display Name"/>
            <FormInput name='email' type='email' value={signUpData.email} required
                       onChange={handleChange.bind(this)} label="Email"/>
            <FormInput name='password' type='password' value={signUpData.password} required
                       onChange={handleChange.bind(this)} label='Password'/>
            <FormInput name='confirmPassword' type='password' value={signUpData.confirmPassword} required
                       onChange={handleChange.bind(this)} label='Confirm Password'/>

            <CustomButton type='submit'>Sign Up</CustomButton>
        </form>
    </div>)
}

export default connect(null, dispatch => ({
    signUpStart: ({email, password, ...additionalData}) => dispatch(signUpStart({email, password, ...additionalData}))
}))(SignUp);