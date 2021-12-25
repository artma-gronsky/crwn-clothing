import './collection-item.styles.scss';
import {CustomButton} from "../custom-button/custom-button.component";

import {connect} from 'react-redux';
import {addItemToCart} from "../../redux/cart/cart.actions";

const CollectionItem = ({id, name, price, imageUrl, ...otherProps}) => (
    <div className='collection-item'>
        <div className='image' style={{backgroundImage: `url(${imageUrl})`}}></div>
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton inverted onClick={() => otherProps.addItemToCart({id, name, price, imageUrl})}> Add to
            cart </CustomButton>
    </div>);

export default connect(null, (dispatch) =>
    (
        {
            addItemToCart: item => dispatch(addItemToCart(item))
        }
    )
)(CollectionItem);