import './shoppage.styles.scss';
import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.compinent";
import {Route, Routes} from "react-router-dom";
import CollectionPage from "../collectionpage/collectionpage.component";
import {connect} from "react-redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import {createStructuredSelector} from "reselect";
import {selectIsFetching} from "../../redux/shop/shop.selectors";
import {fetchDataStartAsync} from "../../redux/shop/shop.actions";


const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    componentDidMount() {
        this.props.fetchDataAsync();
    }

    render() {
        return (
            <div className="shop-page">
                <Routes>
                    <Route exact path='/'
                           element={(<CollectionOverviewWithSpinner isLoading={this.props.isFetching}/>)}/>
                    <Route path='/:name' element={(<CollectionPageWithSpinner isLoading={this.props.isFetching}/>)}/>
                </Routes>
            </div>);
    }

}

export default connect(
    createStructuredSelector({
        isFetching: selectIsFetching
    }),
    dispatch => ({
        fetchDataAsync: () => dispatch(fetchDataStartAsync()),
    })
)(ShopPage);