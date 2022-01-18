import React from 'react';
import {ReactComponent as Logo} from "../../assets/images/084 crown.svg";
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {HeaderContainer, LogoContainer, OptionDiv, OptionLink, OptionsContainer} from "./header.styles";
import {signOutStart} from "../../redux/user/user.actions";

class Header extends React.Component {
    render() {
        return (
            <HeaderContainer>
                <LogoContainer to='/'>
                    <Logo/>
                </LogoContainer>
                <OptionsContainer>
                    <OptionLink to='/shop'>SHOP</OptionLink>
                    <OptionLink to='/contact'>CONTACT</OptionLink>

                    {!this.props.currentUser ?
                        (<OptionLink to='/sign'>SIGN UP</OptionLink>) :
                        (<OptionDiv onClick={() => this.props.dispatch(signOutStart())}>SIGN OUT</OptionDiv>)
                    }
                    <CartIcon/>
                </OptionsContainer>
                <CartDropdown/>
            </HeaderContainer>
        )
    }
}

export default connect(createStructuredSelector({
    currentUser: selectCurrentUser
}))(Header);