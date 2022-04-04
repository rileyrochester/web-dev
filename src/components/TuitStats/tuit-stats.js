import { useDispatch } from "react-redux";

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({ type: "like-tuit", tuit });
    };
    return (
        <div className="row wd-height-32">
            <span className="col-3">
                <i className="far fa-comment"/> {tuit.stats.comments}
            </span>
            <span className="col-3">
                <i className="fas fa-retweet"/> {tuit.stats.retuits}
            </span>
            <span className="col-3" onClick={likeTuit}>
                {tuit.liked && (
                    <i className="fas fa-heart" style={{color: "red"}}/>
                )}
                {!tuit.liked && <i className="far fa-heart me-1"/>}{" "}
                {tuit.stats.likes}
            </span>
            <span className="col-3">
            <i className="fas fa-external-link-alt"/>
            </span>
        </div>
    );
};
export default TuitStats;