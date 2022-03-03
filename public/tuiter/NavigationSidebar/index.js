const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                <a class="list-group-item list-group-item-action" href="/">
                    <i class="fab fa-twitter fa-fw"></i></a>
                <a class="list-group-item list-group-item-action" href="../home.html">
                    <i class="fas fa-home"></i>
                    <span class="d-none d-xl-inline">Home</span>
                </a>
                <a class="list-group-item list-group-item-action active" href="../ExploreScreen/explore.html">
                    <i class="fas fa-hashtag fa-fw"></i>
                    <span class="d-none d-xl-inline">Explore</span>
                </a>
                <a class="list-group-item list-group-item-action" href="../notifications.html">
                    <i class="fas fa-bell fa-fw"></i>
                    <span class="d-none d-xl-inline">Notifications</span>
                </a>
                <a class="list-group-item list-group-item-action" href="../messages.html">
                    <i class="fas fa-envelope fa-fw"></i>
                    <span class="d-none d-xl-inline">Messages</span>
                </a>
                <a class="list-group-item list-group-item-action" href="../bookmarks.html">
                    <i class="fas fa-bookmark fa-fw"></i>
                    <span class="d-none d-xl-inline">Bookmarks</span>
                </a>
                <a class="list-group-item list-group-item-action" href="../lists.html">
                    <i class="fas fa-list fa-fw"></i>
                    <span class="d-none d-xl-inline">Lists</span>
                </a>
                <a class="list-group-item list-group-item-action" href="../profile.html">
                    <i class="fas fa-user fa-fw"></i>
                    <span class="d-none d-xl-inline">Profile</span>
                </a>
                <a class="list-group-item list-group-item-action" href="../more.html">
                    <span class="fa-stack small fa-fw">
                        <i class="fas fa-circle fa-stack-2x fa-fw"></i>
                        <i class="fas fa-ellipsis-h fa-stack-1x fa-fw wd-color-black"></i>
                    </span>
                    <span class="d-none d-xl-inline">More</span>
                </a>
            </div>
            
            <div class="d-grid mt-2">
                <a href="../tuit.html" class="btn btn-primary btn-block rounded-pill">
                    Tuit
                </a>
            </div>
    `);
}
export default NavigationSidebar;