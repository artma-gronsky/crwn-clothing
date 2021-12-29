import './shoppage.styles.scss';
import CollectionsOverview from "../../components/collections-overview/collections-overview.compinent";
import {Route, Routes} from "react-router-dom";
import CollectionPage from "../collectionpage/collectionpage.component";

const ShopPage = () => (
    <div className="shop-page">
        <Routes>
            <Route exact path='/' element={(<CollectionsOverview/>)}/>
            <Route path='/:name' element={(<CollectionPage/>)}/>
        </Routes>

    </div>);

export default ShopPage;