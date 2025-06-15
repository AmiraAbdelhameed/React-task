import React from "react";
import { FaUser } from "react-icons/fa";

const CommentsCards =({body})=>{
    return(
        <>
            <div className="card  ">
            <div className="userImage">
                    <FaUser />
            </div>
            <h3 className="text-center">{body}</h3>
        </div>
        </>
    )
}
export default CommentsCards;
// box - shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
