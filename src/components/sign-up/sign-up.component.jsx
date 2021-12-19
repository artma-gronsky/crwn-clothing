import React from "react";

import './sign-up.styles.scss';
import {FormInput} from "../form-input/form-input.component";
import {CustomButton} from "../custom-button/custom-button.component";


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

    handleSubmit(event) {
        event.preventDefault();

        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    }


    render() {
        return (<div className='sign-up'>
            <h2 className='title'>I don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput name='displayName' type='text' value={this.state.displayName} required
                           onChange={this.handleChange.bind(this)} label="Email"/>
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


export default SignUp;