import React, { useContext } from "react";
import VideoContext from "../Context/VideosContext";
import { Carousel } from 'primereact/carousel';
import HomeCard from "../Components/HomeCard";
import CommentsContext from "../Context/CommentsContext";
import CommentsCards from "../Components/CommentsCard";

const Home = () => {
    const { video, setVideo } = useContext(VideoContext);
    const { comments, setComments } = useContext(CommentsContext)


    return (
        <>
            <div className="courses_section section">
                <div className="courses">
                    <h2 className="text-center font-bold text-primary text-2xl my-4">Courses</h2>
                </div>
                <Carousel
                    value={video?.slice(0, 5)}
                    numVisible={4}
                    numScroll={1}
                    circular
                    autoplayInterval={3000}
                    showIndicators
                    showNavigators
                    itemTemplate={(item) => (
                        <HomeCard
                            title={item.title}
                            thumbnail={item.thumbnail}
                            url={item.url}

                        />
                    )}
                />
            </div>

<div className="comments_section section">
    <div className="reviews">
        <h2 className="text-center font-bold text-primary text-2xl my-4">Reviews </h2>
    </div>
                <Carousel
                    value={comments?.slice(0, 5)}
                    numVisible={1}
                    numScroll={1}
                    circular
                    autoplayInterval={2000}
                    showIndicators
                    showNavigators
                    itemTemplate={(item) => (
                        <CommentsCards
                            body={item.body}
                            

                        />
                    )}
                />
</div>
        </>
    )
}
export default Home