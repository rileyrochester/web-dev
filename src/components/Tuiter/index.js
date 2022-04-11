import React from "react";
import { Outlet } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import NavigationSidebar from "./NavigationSidebar/index";
import WhoToFollowList from "./WhoToFollowList/index";
import whoReducer from "./reducers/WhoReducer";
import tuitsReducer from "./reducers/TuitsReducer";

const reducer = combineReducers({ tuits: tuitsReducer, who: whoReducer });
const store = createStore(reducer);

const Tuiter = () => {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active={Outlet.className}/>
                </div>
                <div className="col-10 col-lg-7 col-xl-6 wd-max-612">
                    <Outlet />
                </div>
                <div className="d-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList />
                </div>
            </div>
        </Provider>
    );
};
export default Tuiter;

