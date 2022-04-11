import { useDispatch } from "react-redux";
import { updateTuit } from "../../actions/TuitsActions";

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();
    return (
        <div className="row">
      <span className="col-3">
        <i className="far fa-comment"/> {tuit.stats.comments}
      </span>
            <span className="col-3">
        <i className="fas fa-retweet"/> {tuit.stats.retuits}
      </span>
            <span className="col-4">
        <span
            onClick={() =>
                updateTuit(dispatch, {
                    ...tuit,
                    liked: !tuit.liked,
                    stats: {
                        ...tuit.stats,
                        likes: tuit.stats.likes + (tuit.liked ? -1 : 1),
                    },
                })
            }
        >
          {tuit.liked && (
              <i className="fas fa-thumbs-up" style={{color: "#0dcaf0"}}/>
          )}
            {!tuit.liked && <i className="fas fa-thumbs-up"/>}{" "}
            {tuit.stats.likes}
        </span>
        <span
            onClick={() =>
                updateTuit(dispatch, {
                    ...tuit,
                    disliked: !tuit.disliked,
                    stats: {
                        ...tuit.stats,
                        dislikes: tuit.stats.dislikes + (tuit.disliked ? -1 : 1),
                    },
                })
            }
        >
          {tuit.disliked && (
              <i className="fas fa-thumbs-down me-1" style={{marginLeft: 5, color: "red"}}/>
          )}
            {!tuit.disliked && (
                <i className="fas fa-thumbs-down me-1" style={{marginLeft: 5}}/>
            )}

            {tuit.stats.dislikes}
        </span>
      </span>
            <span className="col-2">
        <i className="fas fa-external-link-alt"/>
      </span>
        </div>
    );
};
export default TuitStats;