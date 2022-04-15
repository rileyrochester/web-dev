import React, { useEffect } from "react";
import TuitListItem from "./TuitListItem";
import { useSelector, useDispatch } from "react-redux";
import { findAllTuits } from "../../../actions/TuitsActions";

const TuitList = () => {
    const tuits = useSelector((state) => state.tuits);
    const dispatch = useDispatch();

    useEffect(() => findAllTuits(dispatch), [dispatch]);
    console.log(tuits);

    return (
        <ul className="list-group">
            {tuits.map &&
                tuits.map((tuit) => <TuitListItem key={tuit._id} tuit={tuit} />)}
        </ul>
    );
};

export default TuitList;