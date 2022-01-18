import './App.css';
import React, {useEffect} from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import {HomePage} from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";
import {useDispatch, useSelector} from "react-redux";
import PreLoader from "./components/pre-loader/pre-loader.component";
import CheckoutPage from "./pages/checkoutpage/checkoutpage.component";
import {selectCurrentUser} from "./redux/user/user.selectors";
import {checkUserSession} from "./redux/user/user.actions";

const App = () => {
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkUserSession())
    }, [dispatch]);

    return (
        <div>
            <PreLoader/>
            <Header/>
            <Routes>
                <Route exact={true} path='/' element={(<HomePage/>)}/>
                <Route exact path='/shop/*' element={(<ShopPage/>)}/>
                <Route path='/sign'
                       element={currentUser ? (<Navigate to="/"/>) : (<SignInAndSignUpPage/>)}/>
                <Route path='/checkout' element={<CheckoutPage/>}/>

                <Route path='*' element={(<h1>404 Wrong page address! </h1>)}/>
            </Routes>
        </div>
    );
}

export default App;
