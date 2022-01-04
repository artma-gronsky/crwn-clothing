import React from 'react';

import './sign-in.styles.scss';
import {FormInput} from "../form-input/form-input.component";
import {CustomButton} from "../custom-button/custom-button.component";
import {connect} from "react-redux";
import {emailSignInStart, googleSignInStart} from "../../redux/user/user.actions";


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {emailSignInStart} = this.props;
        const {email, password} = this.state;
        emailSignInStart({email, password});
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
                        this.props.googleSignInStart();
                    }}>{' '}
                        Sign In With Google
                        {' '}</CustomButton>
                </div>
            </form>
        </div>)
    }
}

export default connect(null, dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: ({email, password}) => dispatch(emailSignInStart({email, password}))
}))
(SignIn);