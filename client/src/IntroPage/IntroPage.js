import React, {useRef}  from "react";
import "./IntroPage.css";
import { Player } from "video-react";


function Intro() {
    const myRef = useRef(null);
    return(
        <div className="introPage" style={{backgroundColor: "#26f7b2", display: "flex", height: "100vh", width: "100%"}}>
            {/* #29323C */}
            {/* #38F9D7 */}

            
            
            <div className="container" >
            
            <div className="row">
              <div className="col-sm-9">
              <h2>Welcome to </h2>
              </div>

              <div className="col-sm-3">
                <a href="#">Log In</a>
                <a href="#">Sign UP</a>
              </div>
            </div>
            
            <div className="row">
              
              <div className="col-sm-2">
              </div>

              <div className="col-sm-8">
                <div className="monsters">
                  <video  height="700px"  width="auto" ref={myRef} autoPlay>
                     <source src="/images/hodgepodmonsters.mp4"  />
                  </video>
                </div>
              
              </div>
              
             <div className="col-sm-2">
             </div>

             </div>


            
        
            
             
             
         {/* closing container div */}
         </div> 
         
        {/* main div closing  */}
        </div>
    )
}


export default Intro;