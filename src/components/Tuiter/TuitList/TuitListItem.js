import React from "react";
import { useDispatch } from "react-redux";
import TuitStats from "../../TuitStats/tuit-stats";

const TuitListItem = ({ tuit }) => {
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        console.log("DELETING");
        console.log(tuit._id);
        dispatch({ type: "delete-tuit", tuit });
    };

    return (
        <div>
            <li className="list-group-item d-flex">
                <img
                    className="wd-suggestion-avatar me-2"
                    src={tuit.avatarImg}

                    alt="avatar"
                />
                <div className="w-100">
                    <div className="mb-1">
                        <div>
                            <i
                                onClick={() => deleteTuit(tuit)}
                                className="fas fa-times fa-pull-right"
                                />
                            <b>{tuit.postedBy.username}</b>
                            {tuit.verified && <i className="fas fa-check-circle ms-1"/>}
                            <span className="ms-1">@{tuit.handle}</span>
                        </div>
                        {tuit.tuit}
                    </div>
                    {tuit.attachments && tuit.attachments.image && (
                        <img
                            className="w-100 wd-4px-margin-bottom"
                            src={tuit.attachments.image}
                            alt="attachment"
                        />
                    )}
                    {tuit.attachments && tuit.attachments.video && (
                        <iframe
                            className="w-100 wd-4px-margin-bottom"
                            height="300px"
                            src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                            title="Embed_Video"
                            />
                    )}
                    <TuitStats tuit={tuit}/>
                </div>
            </li>
        </div>

    );
};

export default TuitListItem;