import React from 'react';

import './sign-in.styles.scss';
import {FormInput} from "../form-input/form-input.component";
import {CustomButton} from "../custom-button/custom-button.component";

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

                <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton style={{marginLeft: '20px', flexGrow: '1'}} type='submit'>Sign In With
                        Google</CustomButton>
                </div>
            </form>
        </div>)
    }
}

export default SignIn;