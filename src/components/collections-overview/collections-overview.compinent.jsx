import './collections-overview.styles.scss';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectShopCollectionArray} from "../../redux/shop/shop.selectors";
import {CollectionPreview} from "../collection-preview/collection-preview.component";

function CollectionsOverview({collections}) {
    return (<div className='collections-overview'><h1>SHOP PAGE</h1>
        {collections.map(x => (
            <CollectionPreview key={x.id} title={x.title} items={x.items}/>))}
    </div>)
}

export default connect(createStructuredSelector({
    collections: selectShopCollectionArray
}))(CollectionsOverview);