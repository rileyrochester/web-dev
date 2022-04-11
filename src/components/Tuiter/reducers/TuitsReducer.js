import {CREATE_TUIT, FIND_ALL_TUITS, UPDATE_TUIT, DELETE_TUIT} from "../../../actions/TuitsActions";

const tuitsReducer = (state = [], action) => {
    switch (action.type) {
        case CREATE_TUIT:
            return [action.newTuit, ...state];
        case FIND_ALL_TUITS:
            return action.tuits;
        case UPDATE_TUIT:
            return state.map((tuit) =>
                tuit._id === action.tuit._id ? action.tuit : tuit
            );
        case DELETE_TUIT:
            return state.filter((tuit) => tuit._id !== action.tuit._id);
        default:
            return state;
    }
};

 export default tuitsReducer;