import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
            <div class="row">
               <!-- search field and cog -->
               <div class="wd-search-form-container">
                    <form class="wd-search-form wd-rounded-corners-all-around"
                          id="search-tuiter" role="search" action="#" aria-label="Search Tuiter">
                        <div class="">
                            <label class="wd-search-box-form-input-label pos-relative">
                                <div class="wd-button-container pos-absolute"  style="z-index:1;">
                                    <i class="fa fa-search"></i>
                                </div>
                                <div class="wd-input-container" style="z-index:20;">
                                    <div>
                                        <input class="wd-search-form-input wd-rounded-corners-all-around"
                                               id="searchbar-input"
                                               type="search"
                                               placeholder="Search Tuiter"/>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </form>
    
                    <div class="wd-settings-container">
                        <a href="explore-settings.html" aria-label="Settings" role="link">
                            <div>
                                <i class="fas fa-cog"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
               
           <div class="row mb-2">
                <!--- bar of hyperlinks --->
                <div class="wd-hyps-container w-100">
                    <ul class="nav nav-tabs" style="width:100%">
                        <li class="nav-item"><a href="#" class="nav-link active">For You</a></li>
                        <li class="nav-item"><a href="#" class="nav-link ">Trending</a></li>
                        <li class="nav-item"><a href="#" class="nav-link ">News</a></li>
                        <li class="nav-item"><a href="#" class="nav-link ">Sports</a></li>
                        <li class="nav-item d-none d-md-block"><a href="#" class="nav-link ">Entertainment</a></li>
                    </ul>
                </div>
           </div>
           
           <!-- suggested posts -->
           <div class="row">
               <div class="wd-suggested-posts-container list-group wd-list-group-p-override">
               
                   <!-- image with overlaid text -->
                   <div class="list-group-item wd-suggested-post wd-padding-0">
                        <div class="wd-post-as-image d-sm-inline-flex" role="link">
                            <div>
                                <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"
                                     height="100%"
                                     width="100%"/>
                            </div>
                            <div>
                                <span>SpaceX's Starship</span>
                            </div>
                        </div>
                   </div>
                   
                   <!--- rest of suggested posts --->
                   ${PostSummaryList()}
                   
               </div>
           </div>
    `);
}
export default ExploreComponent;

