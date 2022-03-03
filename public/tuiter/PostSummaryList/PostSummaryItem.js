const PostSummaryItem = (post) => {
    return (`
    <!---<div class="list-group">--->
        <div class="list-group-item d-flex wd-suggested-post">
            <div class="flex-fill">
                <p class="wd-trending-topic">${post.topic}</p>
                <p class="wd-trending-title">
                    <b>${post.userName}</b> 
                    <i class="fas fa-check-circle"></i>&nbsp-
                    <span class="wd-trending-topic">${post.time}</span>
                </p>
                <p class="wd-trending-title">${post.title}</p>
            </div>
            <img src="${post.image}" class="wd-suggested-post-img">
        </div>
    <!---</div>--->
    `);
}

export default PostSummaryItem;