import React from "react";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";

const Tuiter = () => {
    return(
        <div>
            <NavigationSidebar active="home"/>
            <WhoToFollowListItem/>
        </div>
    )
};
export default Tuiter;
