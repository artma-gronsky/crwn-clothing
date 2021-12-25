import React from 'react';

import './header.styles.scss';
import {NavLink,} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/images/084 crown.svg";
import {auth} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import {mapStateToProps} from "../../redux/user/user.maps";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {mapDispatchToProps} from "../../redux/common/common.maps";

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.props.setLoading(true);
    }

    componentDidMount() {
        this.props.setLoading(false);
    }

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
                <CartIcon/>
            </div>
            <CartDropdown/>
        </div>)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);