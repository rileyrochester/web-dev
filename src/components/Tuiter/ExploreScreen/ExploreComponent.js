import React from "react";
import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (
        <div>
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
               
           <div className="row mb-2">
                <div className="wd-hyps-container w-100">
                    <ul className="nav nav-tabs" style={{"width":"100%"}}>
                        <li className="nav-item"><a href="#" className="nav-link active">For You</a></li>
                        <li className="nav-item"><a href="#" className="nav-link ">Trending</a></li>
                        <li className="nav-item"><a href="#" className="nav-link ">News</a></li>
                        <li className="nav-item"><a href="#" className="nav-link ">Sports</a></li>
                        <li className="nav-item d-none d-md-block"><a href="#" className="nav-link ">Entertainment</a></li>
                    </ul>
                </div>
           </div>
           
           <div className="row">
               <div className="wd-suggested-posts-container list-group wd-list-group-p-override">
               
                   <div className="list-group-item wd-suggested-post wd-padding-0">
                        <div className="wd-post-as-image d-sm-inline-flex" role="link">
                            <div>
                                <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"
                                     height="100%"
                                     width="100%"
                                     alt="pig picture post"/>
                            </div>
                            <div>
                                <span>SpaceX's Starship</span>
                            </div>
                        </div>
                   </div>
                   
                   {PostSummaryList()}
                   
               </div>
           </div>
        </div>
    );
}
export default ExploreComponent;

