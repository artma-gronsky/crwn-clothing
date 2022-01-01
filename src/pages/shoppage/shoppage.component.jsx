import './shoppage.styles.scss';
import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.compinent";
import {Route, Routes} from "react-router-dom";
import CollectionPage from "../collectionpage/collectionpage.component";
import {fetchData} from "./shoppage.utils";
import {connect} from "react-redux";
import {setLoading, setShopData} from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import {createStructuredSelector} from "reselect";
import {selectLoading} from "../../redux/shop/shop.selectors";


const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    componentDidMount() {
        this.props.setLoader(true)

        fetchData((data) => {
            this.props.setShopData(data)
            this.props.setLoader(false)
        });
    }

    render() {
        return (
            <div className="shop-page">
                <Routes>
                    <Route exact path='/'
                           element={(<CollectionOverviewWithSpinner isLoading={this.props.isLoading}/>)}/>
                    <Route path='/:name' element={(<CollectionPageWithSpinner isLoading={this.props.isLoading}/>)}/>
                </Routes>
            </div>);
    }

}

export default connect(createStructuredSelector({
    isLoading: selectLoading
}), dispatch => ({
    setShopData: (data) => dispatch(setShopData(data)),
    setLoader: (flag) => dispatch(setLoading(flag))
}))(ShopPage);