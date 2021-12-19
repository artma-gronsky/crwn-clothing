import React from 'react';

import './header.styles.scss';
import {NavLink,} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/images/084 crown.svg";
import {auth} from "../../firebase/firebase.utils";

class Header extends React.Component {
    render() {
        return (<div className='header'>
            <NavLink className='logo-container' to='/'>
                <Logo className='logo'/>
            </NavLink>
            <div className='options'>
                <NavLink className='option' to='/shop'>SHOP</NavLink>
                <NavLink className='option' to='/contact'>CONTACT</NavLink>

                {!this.props.currentUser ?
                    (<NavLink className='option' to='/sign'>SIGN UP</NavLink>) :
                    (<span onClick={() => auth.signOut()} className='option'>SIGN OUT</span>)
                }
            </div>
        </div>)
    }
}


export default Header;