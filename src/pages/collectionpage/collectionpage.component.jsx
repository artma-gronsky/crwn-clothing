import React from "react";
import './collectionpage.styles.scss';
import {useNavigate, useSearchParams} from "react-router-dom";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectShopSelectedCollectionItems, selectShopSelectedCollectionTitle} from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";
import {selectShopCategory} from "../../redux/shop/shop.actions";
import {CustomButton} from "../../components/custom-button/custom-button.component";

const CollectionPage = ({collectionItems, title, dispatch}) => {
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");
    const navigate = useNavigate();

    if (!title && !!name) {
        dispatch(selectShopCategory(name));
    }


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
    } else {
        return (<div className='collection-page empty'>
            <h1 className='title'>
                Collection is not selected
            </h1>
            <CustomButton onClick={() => navigate({pathname: '/'})}>SEE COLLECTIONS</CustomButton>
        </div>)
    }
}

export default connect(createStructuredSelector({
    collectionItems: selectShopSelectedCollectionItems,
    title: selectShopSelectedCollectionTitle
}))(CollectionPage);


