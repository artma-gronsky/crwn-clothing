import React from "react";
import './collectionpage.styles.scss';
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectShopSelectedCollectionItems, selectShopSelectedCollectionTitle} from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";
import {selectShopCategory} from "../../redux/shop/shop.actions";

const CollectionPage = ({collectionItems, title, dispatch}) => {
    const {name} = useParams();
    dispatch(selectShopCategory(name.toLowerCase()));


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

export default connect(createStructuredSelector({
    collectionItems: selectShopSelectedCollectionItems,
    title: selectShopSelectedCollectionTitle
}))(CollectionPage);


