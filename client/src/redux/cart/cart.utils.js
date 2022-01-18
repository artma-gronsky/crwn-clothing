export const addItemToCart = (cartItems, newItem) => {
    const existItem = cartItems.find(x => x.id === newItem.id)

    if (existItem) {
        existItem.count++;
        return [existItem, ...cartItems.filter(x => x.id !== existItem.id)]

    }

    return [{...newItem, count: 1}, ...cartItems];
}