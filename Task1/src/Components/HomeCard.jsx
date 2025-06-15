import React from "react";
import { CiStar } from "react-icons/ci";
const HomeCard = ({ thumbnail, title, url }) => {

    return (
        <>
            <div className="homecard">
                <figure>
                    <video src={url} 
                     autoPlay
                      loop
                        muted
                        playsInline
                        controls />
                    {/* <img src={thumbnail} alt="" /> */}
                </figure>
                <div className="content">
                    <h3>{title}</h3>
                    <button>Watch</button>
                </div>
            </div>
        </>
    )
}
export default HomeCard;