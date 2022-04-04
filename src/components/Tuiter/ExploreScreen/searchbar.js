import React from "react";

const searchbar = () => {
    return (
        <div className="row">
            <div className="wd-search-form-container">
                <form className="wd-search-form wd-rounded-corners-all-around"
                      id="search-tuiter" role="search" action="#" aria-label="Search Tuiter">
                    <div className="">
                        <label className="wd-search-box-form-input-label pos-relative">
                            <div className="wd-button-container pos-absolute"  style={{"z-index":"1"}}>
                                <i className="fa fa-search"/>
                            </div>
                            <div className="wd-input-container" style={{"z-index":"20"}}>
                                <div>
                                    <input className="wd-search-form-input wd-rounded-corners-all-around"
                                           id="searchbar-input"
                                           type="search"
                                           placeholder="Search Tuiter"/>
                                </div>
                            </div>
                        </label>
                    </div>
                </form>

                <div className="wd-settings-container">
                    <a href="explore-settings.html" aria-label="Settings" role="link">
                        <div>
                            <i className="fas fa-cog"/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default searchbar;