import './collections-overview.styles.scss';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectShopCollections} from "../../redux/shop/shop.selectors";
import {PreviewCollection} from "../preview-collection/preview-collection.component";

function CollectionsOverview({collections}) {
    return (<div className='collections-overview'><h1>SHOP PAGE</h1>
        {collections.map(x => (
            <PreviewCollection key={x.id} title={x.title} items={x.items}/>))}
    </div>)
}

export default connect(createStructuredSelector({
    collections: selectShopCollections
}))(CollectionsOverview);