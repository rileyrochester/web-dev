import React from "react";

const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "../tuiter/imgs/react.jpeg"
        }
    }) => {
    return (
        <div className="list-group-item d-flex wd-suggested-post">
            <div className="flex-fill">
                <p className="wd-trending-topic">{post.topic}</p>
                <p className="wd-trending-title">
                    <b>{post.userName}</b>
                    <i className="fas fa-check-circle wd-4px-margin-left"/> -
                    <span className="wd-trending-topic wd-4px-margin-left">{post.time}</span>
                </p>
                <p className="wd-trending-title">{post.title}</p>
            </div>
            <img src={post.image} className="wd-suggested-post-img" alt="Post Image"/>
        </div>
    );
}

export default PostSummaryItem;