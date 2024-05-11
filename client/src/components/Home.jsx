import { useSelector } from "react-redux"
import TopicButton from "./TopicButton"
import Gallery from "./Gallery/Gallery"

const Home = () => {
    const { topic } = useSelector(state => state.apiData)
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