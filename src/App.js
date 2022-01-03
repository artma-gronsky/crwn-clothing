import './App.css';
import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import {HomePage} from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";
import {connect} from "react-redux";
import PreLoader from "./components/pre-loader/pre-loader.component";
import CheckoutPage from "./pages/checkoutpage/checkoutpage.component";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selectors";

class App extends React.Component {
    render() {
        return (
            <div>
                <PreLoader/>
                <Header/>
                <Routes>
                    <Route exact={true} path='/' element={(<HomePage/>)}/>
                    <Route exact path='/shop/*' element={(<ShopPage/>)}/>
                    <Route path='/sign'
                           element={this.props.currentUser ? (<Navigate to="/"/>) : (<SignInAndSignUpPage/>)}/>
                    <Route path='/checkout' element={<CheckoutPage/>}/>

                    <Route path='*' element={(<h1>404 Wrong page address! </h1>)}/>
                </Routes>
            </div>
        );
    }
}

export default connect(createStructuredSelector({
    currentUser: selectCurrentUser
}))(App);
