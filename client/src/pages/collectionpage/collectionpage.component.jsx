import React from "react";
import './collectionpage.styles.scss';
import {useParams} from "react-router-dom";
import CollectionItem from "../../components/collection-item/collection-item.component";
import {selectShopCategory} from "../../redux/shop/shop.actions";
import {useDispatch, useSelector} from "react-redux";
import {selectShopSelectedCollectionItems, selectShopSelectedCollectionTitle} from "../../redux/shop/shop.selectors";

const CollectionPage = () => {
    const {name} = useParams();

    const dispatch = useDispatch();
    dispatch(selectShopCategory(name.toLowerCase()));
    
    const collectionItems = useSelector(selectShopSelectedCollectionItems);
    const title = useSelector(selectShopSelectedCollectionTitle);


    if (collectionItems && collectionItems.length) {
        return (<div className='collection-page'>
            <h1 className='title'>
                {title}
            </h1>
            <div className='items'>
                {
                    collectionItems.map(item =>
                        (<CollectionItem key={item.id} {...item}/>)
                    )
                }
            </div>
        </div>);
    }
    return null;
}

export default CollectionPage;


