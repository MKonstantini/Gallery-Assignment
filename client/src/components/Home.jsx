import { useDispatch, useSelector } from "react-redux"
import { fetchData  } from "../redux/pixabay"
import TopicButton from "./TopicButton"
import Gallery from "./Gallery/Gallery"
import { useEffect } from "react"

const Home = () => {
    const dispatch = useDispatch();
    const { topic, page, data } = useSelector(state => state.pixabay);
    
    useEffect(() => {
        // Fetch data when component mounts, or when topic or page changes
        dispatch(fetchData(topic, page));
    }, [dispatch, topic, page]);

    console.log("Topic:", topic);
    console.log("Data:", data);
    console.log("Page:", page);

    return (
        <>
            <TopicButton />
            <div className="home-div text-center">
                <h1 className="display-5 text-primary fw-bold mb-3">Gallery Assignment</h1>
                <p className="fst-italic mb-4">Current Topic: {topic}</p>
                <Gallery />
            </div>                
        </>
    )
}

export default Home