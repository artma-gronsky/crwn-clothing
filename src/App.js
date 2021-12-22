import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";

import {HomePage} from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

class App extends React.Component {
    unsubscribeFromAuth = null;

    constructor(prop) {
        super(prop);

        this.state = {
            currentUser: null
        };
    }

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth?.multiFactor?.user);
                userRef.onSnapshot(snapshot => {
                    this.setState({currentUser: snapshot.data()}, () => {
                        console.log(this.state);
                    })
                });
            }

            this.setState({currentUser: null})
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
                <Header currentUser={this.state.currentUser}/>
                <Routes>
                    <Route exact={true} path='/' element={(<HomePage/>)}/>
                    <Route exact path='/shop' element={(<ShopPage/>)}/>

                    <Route path='/sign' element={(<SignInAndSignUpPage/>)}/>


                    <Route path='*' element={(<h1>404 Wrong page address! </h1>)}/>
                </Routes>
            </div>
        );
    }
}

export default App;
