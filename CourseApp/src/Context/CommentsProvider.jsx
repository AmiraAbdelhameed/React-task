import React, { useState, useEffect } from "react";
import CommentsContext from "./CommentsContext";

const CommentsProvider =({children})=>{

    const [comments , setComments]=useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const getComment = async () => {
        const url = 'https://dummyjson.com/comments'
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();

            setComments(result.comments)
            setLoading(false)

        } catch (error) {
            console.error(error.message);
            setLoading(false)
        }
    }
    setTimeout(() => {
        getComment()
    }, 2000)
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return(
        <>
        <CommentsContext value={{comments , setComments}}>
            {children}
        </CommentsContext>
        </>
    )
}
export default CommentsProvider