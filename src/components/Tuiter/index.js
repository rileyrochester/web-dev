import React from "react";
import {Link} from "react-router-dom";
import ExploreScreen from "./ExploreScreen/ExploreScreen";

import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList/index";
import PostSummaryItem from "./PostSummaryList/PostSummaryItem";
import PostSummaryList from "./PostSummaryList/index";

const Tuiter = () => {
    return(
        <div>
            <ExploreScreen/>
        </div>
        /*<>
            <PostSummaryList/>
            <h1>Tuiter</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/labs">
                Labs
            </Link>
            <NavigationSidebar active="home"/>
            <br/>
            <WhoToFollowList/>
        </>*/
    )
};

export default Tuiter;
