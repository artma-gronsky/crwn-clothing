import './shoppage.styles.scss';
import React, {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import {connect} from "react-redux";
import {fetchDataStart} from "../../redux/shop/shop.actions";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionsPageContainer from "../collectionpage/collectionpage.container";


const ShopPage = ({fetchDataAsync}) => {
    useEffect(() => {
        fetchDataAsync();
    }, [fetchDataAsync]);

    return (
        <div className="shop-page">
            <Routes>
                <Route exact path='/' element={(<CollectionsOverviewContainer/>)}/>
                <Route path='/:name' element={(<CollectionsPageContainer/>)}/>
            </Routes>
        </div>);
}

export default connect(null, dispatch => ({fetchDataAsync: () => dispatch(fetchDataStart())}))(ShopPage);