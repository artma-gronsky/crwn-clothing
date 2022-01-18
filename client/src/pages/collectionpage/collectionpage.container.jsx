import {compose} from "redux";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectIsFetching} from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "./collectionpage.component";

const CollectionsPageContainer =
    compose(
        connect(createStructuredSelector({
            isLoading: selectIsFetching
        })),
        WithSpinner
    )(CollectionPage);

export default CollectionsPageContainer;