import SHOP_DATA from "../../pages/shoppage/shoppage.data";

const INITIAL_STATE = {
    collections: SHOP_DATA
}

function shopReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default shopReducer;