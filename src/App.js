import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './components/Tuiter/styles/general.css';

import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs/index";
import Tuiter from "./components/Tuiter/index";
import HomeScreen from "./components/Tuiter/HomeScreen/index";
import ExploreScreen from "./components/Tuiter/ExploreScreen/ExploreComponent";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/" >
                        <Route index element={<HelloWorld />} />
                        <Route path="labs" element={<Labs />} />
                        <Route path="hello" exact={true} element={<HelloWorld />} />
                        <Route path="tuiter" element={<Tuiter />} >
                            <Route index element={<HomeScreen />} />
                            <Route path="explore" element={<ExploreScreen />} />
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;