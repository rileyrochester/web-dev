const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item d-flex">
        
            <img src="${who.avatarIcon}" 
                 class="wd-suggestion-avatar"
                 height="48px"
                 width="48px"/>
                 
            <span class="wd-inpost-name align-self-center">
                <b>${who.userName}</b> 
                <i class="fas fa-check-circle"></i>
                </br>
                <span class="wd-suggestion-handle">@${who.handle}</span>
            </span>
            
            <div class="pe-2 align-self-center wd-follow-btn" style="z-index:1;">
                <button class="btn btn-primary wd-tweet-btn">
                    <a href="../tuit.html">
                        <div class="wd-text-color-white">
                            Follow
                        </div>
                    </a>
                </button>
            </div>
            
        </li>
    `);
}

export default WhoToFollowListItem;