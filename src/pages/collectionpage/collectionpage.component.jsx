import React from "react";
import './collectionpage.styles.scss';
import {useSearchParams} from "react-router-dom";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectShopSelectedCollectionItems, selectShopSelectedCollectionTitle} from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";
import {selectShopCategory} from "../../redux/shop/shop.actions";

const CollectionPage = ({collectionItems, title, dispatch}) => {
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");

    if (!title && name) {
        dispatch(selectShopCategory(name));
    }


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

export default connect(createStructuredSelector({
    collectionItems: selectShopSelectedCollectionItems,
    title: selectShopSelectedCollectionTitle
}))(CollectionPage);


