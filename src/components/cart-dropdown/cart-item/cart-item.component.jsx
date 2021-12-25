import './cart-item.component.scss';


export const CartItem = ({imageUrl, name, price, count, id}) => {
    return (
        <div className='cart-item'>
            <img src={imageUrl} alt='item'/>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{count} x ${price}</span>
            </div>
        </div>
    )
}