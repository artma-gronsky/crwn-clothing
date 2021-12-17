import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";

import {HomePage} from "./pages/homepage/homepage.component";

const HatsPage = () => (
    <div>
        <h1>HATS PAGE </h1>
    </div>
)


function App() {
    return (
        <div>
            <Routes>
                <Route exact={true} path='/' element={(<HomePage/>)}/>
                <Route path='/shop/hats' element={(<HatsPage/>)}/>
                <Route path='*' element={(<div><h1>404</h1></div>)}/>
            </Routes>

        </div>
    );
}

export default App;
