import React from 'react';

import './sign-in.styles.scss';
import {FormInput} from "../form-input/form-input.component";
import {CustomButton} from "../custom-button/custom-button.component";
import {singInWithGoogle} from "../../firebase/firebase.utils";


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState((prevState, props) => {
            return {...prevState, email: '', password: ''}
        })
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState(prevState => ({...prevState, [name]: value}));
    }

    render() {
        return (<div className='sign-in'>
            <h2 className='title'>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput name='email' type='email' value={this.state.email} required
                           onChange={this.handleChange.bind(this)} label="Email"/>
                <FormInput name='password' type='password' value={this.state.password} required
                           onChange={this.handleChange.bind(this)} label='Password'/>
                <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton isGoogleSignIn onClick={(event) => {
                        event.preventDefault();
                        return singInWithGoogle(event);
                    }}>{' '}
                        Sign In With Google
                        {' '}</CustomButton>
                </div>
            </form>
        </div>)
    }
}

export default SignIn;