import './checkpout-item.styles.scss';

const CheckoutItem = ({cartItem: {imageUrl, id, name, count, price}, removeFn}) => {
    return (<div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={imageUrl}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{count}</span>
            <span className='price'>{price} x {count} = ${price * count}</span>
            <div className='remove-button' onClick={() => removeFn(id)}>&#10005;</div>
        </div>
    );
}

export default CheckoutItem;