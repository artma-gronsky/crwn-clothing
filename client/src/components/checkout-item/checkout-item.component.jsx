import './checkpout-item.styles.scss';

const CheckoutItem = ({
                          cartItem: {imageUrl, id, name, count, price},
                          removeFn,
                          increaseQuantityFn,
                          decreaseQuantityFn
                      }) => {
    return (<div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={imageUrl}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <span className='change-quantity-button left' onClick={() => decreaseQuantityFn(id)}>&#10094;</span>
                {count}
                <span className='change-quantity-button right' onClick={() => increaseQuantityFn(id)}> &#10095;</span>
            </span>
            <span className='price'>{price} x {count} = ${price * count}</span>
            <div className='remove-button' onClick={() => removeFn(id)}>&#10005;</div>
        </div>
    );
}

export default CheckoutItem;