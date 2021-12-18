import {Component} from "react";

import './shoppage.styles.scss';
import SHOP_DATA from "./shoppage.data";
import {PreviewCollection} from "../../components/preview-collection/preview-collection.component";

class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collection: SHOP_DATA
        };

    }

    render() {
        return (<div className='shop-page'><h1>SHOP PAGE</h1>
            {this.state.collection.map(x => (<div>
                <PreviewCollection title={x.title} items={x.items} key={x.id}/>
            </div>))}
        </div>)
    }
}

export default ShopPage;