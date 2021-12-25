import React from 'react';

import './sign-in.styles.scss';
import {FormInput} from "../form-input/form-input.component";
import {CustomButton} from "../custom-button/custom-button.component";
import {auth, singInWithGoogle} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import {mapDispatchToProps} from "../../redux/common/common.maps";


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

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);

            this.setState((prevState, props) => {
                return {...prevState, email: '', password: ''}
            })

        } catch (err) {
            console.log(err.message)
        }
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
                        this.props.setLoading(true);
                        return singInWithGoogle(event)
                            .catch(() => this.props.setLoading(false))
                    }}>{' '}
                        Sign In With Google
                        {' '}</CustomButton>
                </div>
            </form>
        </div>)
    }
}

export default connect(null, mapDispatchToProps)(SignIn);