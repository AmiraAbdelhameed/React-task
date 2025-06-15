import React, { useEffect, useState } from "react";
import VideoContext from "./VideosContext";

const VideoProvider = ({ children }) => {
    const [video, setVideo] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const getVideo = async () => {
        const url = '/db.json'
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();

            setVideo(result.videos)
            // console.log(result.videos)
            setLoading(false)

        } catch (error) {
            console.error(error.message);
            setLoading(false)
        }
    }
    setTimeout(() => {
        getVideo()
    }, 2000)
 
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return (
        <>
            <VideoContext value={{ video, setVideo }}>
                {children}
            </VideoContext>
        </>
    )
}
export default VideoProvider ;

