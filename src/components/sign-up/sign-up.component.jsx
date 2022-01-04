import React from "react";

import {connect} from "react-redux";

import {signUpStart} from "../../redux/user/user.actions";

import {FormInput} from "../form-input/form-input.component";
import {CustomButton} from "../custom-button/custom-button.component";

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange(event) {
        const {name, value} = event.target;

        this.setState(prev => ({...prev, [name]: value}));
    }

    async handleSubmit(event) {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert("Passwords don't match!");
        }

        this.props.signUpStart({email, password, displayName});
    }


    render() {
        return (<div className='sign-up'>
            <h2 className='title'>I don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form  ' onSubmit={this.handleSubmit.bind(this)}>
                <FormInput name='displayName' type='text' value={this.state.displayName} required
                           onChange={this.handleChange.bind(this)} label="Display Name"/>
                <FormInput name='email' type='email' value={this.state.email} required
                           onChange={this.handleChange.bind(this)} label="Email"/>
                <FormInput name='password' type='password' value={this.state.password} required
                           onChange={this.handleChange.bind(this)} label='Password'/>
                <FormInput name='confirmPassword' type='password' value={this.state.confirmPassword} required
                           onChange={this.handleChange.bind(this)} label='Confirm Password'/>

                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
        </div>)
    }

}

export default connect(null, dispatch => ({
    signUpStart: ({email, password, ...additionalData}) => dispatch(signUpStart({email, password, ...additionalData}))
}))(SignUp);