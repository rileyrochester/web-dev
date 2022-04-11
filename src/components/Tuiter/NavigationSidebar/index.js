import React from "react";

const NavigationSidebar = ({active}) => {
    return(
        <div>
            <div className="list-group">
                <a className="list-group-item list-group-item-action" href="/tuiter">
                    <i className="fab fa-twitter fa-fw"/></a>
                <a className="list-group-item list-group-item-action" href="/tuiter">
                    <i className="fas fa-home"/>
                    <span className="d-none d-xl-inline">Home</span>
                </a>
                <a className="list-group-item list-group-item-action active" href="/tuiter/explore">
                    <i className="fas fa-hashtag fa-fw"/>
                    <span className="d-none d-xl-inline">Explore</span>
                </a>
                <a className="list-group-item list-group-item-action" href="../notifications.html">
                    <i className="fas fa-bell fa-fw"/>
                    <span className="d-none d-xl-inline">Notifications</span>
                </a>
                <a className="list-group-item list-group-item-action" href="../messages.html">
                    <i className="fas fa-envelope fa-fw"/>
                    <span className="d-none d-xl-inline">Messages</span>
                </a>
                <a className="list-group-item list-group-item-action" href="../bookmarks.html">
                    <i className="fas fa-bookmark fa-fw"/>
                    <span className="d-none d-xl-inline">Bookmarks</span>
                </a>
                <a className="list-group-item list-group-item-action" href="../lists.html">
                    <i className="fas fa-list fa-fw"/>
                    <span className="d-none d-xl-inline">Lists</span>
                </a>
                <a className="list-group-item list-group-item-action" href="../profile.html">
                    <i className="fas fa-user fa-fw"/>
                    <span className="d-none d-xl-inline">Profile</span>
                </a>
                <a className="list-group-item list-group-item-action" href="../more.html">
                    <span className="fa-stack small fa-fw">
                        <i className="fas fa-circle fa-stack-2x fa-fw"/>
                        <i className="fas fa-ellipsis-h fa-stack-1x fa-fw wd-color-black"/>
                    </span>
                    <span className="d-none d-xl-inline">More</span>
                </a>
            </div>
            
            <div className="d-grid mt-2">
                <a href="../tuit.html" className="btn btn-primary btn-block rounded-pill">
                    Tuit
                </a>
            </div>
        </div>
    );
}
export default NavigationSidebar;