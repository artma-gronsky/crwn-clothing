import './App.css';
import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import {HomePage} from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "./redux/user/user.maps";

class App extends React.Component {
    unsubscribeFromAuth = null;


    componentDidMount() {
        const {setCurrentUser} = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth?.multiFactor?.user);
                userRef.onSnapshot(snapshot => {
                    setCurrentUser(snapshot.data())
                });
            }

            setCurrentUser(null);
        });
    }

    componentWillUnmount() {
        if (!!this.unsubscribeFromAuth) {
            this.unsubscribeFromAuth();
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <Routes>
                    <Route exact={true} path='/' element={(<HomePage/>)}/>
                    <Route exact path='/shop' element={(<ShopPage/>)}/>

                    <Route path='/sign'
                           element={this.props.currentUser ? (<Navigate to="/"/>) : (<SignInAndSignUpPage/>)}/>


                    <Route path='*' element={(<h1>404 Wrong page address! </h1>)}/>
                </Routes>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
