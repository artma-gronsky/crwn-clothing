import React from "react";
import './collectionpage.styles.scss';
import {useSearchParams} from "react-router-dom";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {COLLECTION_ID_MAP, selectShopCollections} from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({collections}) => {
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");

    //todo: COLLECTION_ID_MAP - use shop.selectors for get collection items
    const {title, items} =
        collections.find(item => item.id === COLLECTION_ID_MAP[name]);

    return (<div className='collection-page'>
        <h1 className='title'>
            {title}
        </h1>
        <div className='items'>
            {
                items.map(item =>
                    (<CollectionItem key={item.id} {...item}/>)
                )
            }
        </div>
    </div>);
}

export default connect(createStructuredSelector({
    collections: selectShopCollections
}))(CollectionPage);


