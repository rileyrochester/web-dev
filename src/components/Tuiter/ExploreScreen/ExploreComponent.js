import React from "react";
import PostSummaryList from "../PostSummaryList/index.js";
import Searchbar from "./searchbar";

const ExploreComponent = () => {
    return (
        <div>
            <Searchbar/>

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

