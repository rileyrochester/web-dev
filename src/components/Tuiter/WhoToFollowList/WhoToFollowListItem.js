import React from "react";

const WhoToFollowListItem = (
    {
         who = {
             avatarIcon: '../tuiter/imgs/nasa.png',
             userName: 'NASA',
             handle: 'NASA',
         }
     }) => {
    return (
        <li className="list-group-item d-flex">
        
            <img src={who.avatarIcon}
                 className="wd-suggestion-avatar"
                 height="48px"
                 width="48px"
                 alt="User Profile Picture"/>
                 
            <span className="wd-inpost-name align-self-center">
                <b>{who.userName}</b>
                <i className="fas fa-check-circle"/>
                <br/>
                <span className="wd-suggestion-handle">@{who.handle}</span>
            </span>
            
            <div className="pe-2 align-self-center wd-follow-btn wd-zindex1">
                <button className="btn btn-primary wd-tweet-btn">
                    <a href="../tuit.html">
                        <div className="wd-color-white">
                            Follow
                        </div>
                    </a>
                </button>
            </div>
            
        </li>
    );
}

export default WhoToFollowListItem;