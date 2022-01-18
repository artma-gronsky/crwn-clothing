import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectIsFetching} from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import {compose} from "redux";
import CollectionsOverview from "./collections-overview.compinent";

const CollectionsOverviewContainer =
    compose(
        connect(createStructuredSelector({
            isLoading: selectIsFetching
        })),
        WithSpinner
    )(CollectionsOverview);

export default CollectionsOverviewContainer;