import {connect} from 'react-redux';
import {addItemToCart} from "../../redux/cart/cart.actions";
import {
    CollectionFooterContainer,
    CollectionItemContainer,
    CustomButtonContainer,
    ImageContainer,
    NameContainer,
    PriceContainer
} from "./collection-item.styles";

const CollectionItem = ({id, name, price, imageUrl, ...otherProps}) => (
    <CollectionItemContainer>
        <ImageContainer imageUrl={imageUrl}/>
        <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <CustomButtonContainer inverted onClick={() => otherProps.addItemToCart({id, name, price, imageUrl})}> Add to
            cart </CustomButtonContainer>
    </CollectionItemContainer>);

export default connect(null, (dispatch) =>
    (
        {
            addItemToCart: item => dispatch(addItemToCart(item))
        }
    )
)(CollectionItem);