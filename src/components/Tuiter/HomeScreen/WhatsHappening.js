import React, { useState } from "react";
import { useDispatch } from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState("");

    const dispatch = useDispatch();

    const tuitClickHandler = () => {
        dispatch({ type: "create-tuit", tuit: whatsHappening });
    };
    return (
        <div>
            <div className="d-flex">
                <img
                    src="https://jackstech.net/ElonTwitter/Images/StarshipSunset.jpg"
                    className="wd-suggestion-avatar m-2"
                    alt="starship_sunset"
                />
                <textarea
                    placeholder="What's happening?"
                    className="form-control bg-black wd-textarea wd-darker-gray"
                    value={whatsHappening}
                    onChange={(event) => setWhatsHappening(event.target.value)}
                    style={{color: "white"}}
                    />
            </div>
            <div>
                <i className="fas fa-image m-2" style={{color: "#2a9fd6"}}/>
                <i
                    className="fas fa-chart-line wd-blue-color m-2"
                    style={{color: "#2a9fd6"}}
                    />
                <i
                    className="far fa-smile wd-blue-color m-2"
                    style={{color: "#2a9fd6"}}
                    />
                <i
                    className="fas fa-calendar wd-blue-color m-2"
                    style={{color: "#2a9fd6"}}
                    />
                <button
                    className="btn btn-primary rounded-pill m-2 fa-pull-right"
                    onClick={tuitClickHandler}
                >
                    Tuit
                </button>
            </div>
            <br />
        </div>
    );
};
export default WhatsHappening;