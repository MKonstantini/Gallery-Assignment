import { useDispatch, useSelector } from "react-redux"
import { getData } from "../redux/apiData"
import TopicButton from "./TopicButton"
import Gallery from "./Gallery/Gallery"

const Home = () => {
    const { topic } = useSelector(state => state.apiData);

    const dispatch = useDispatch()
    dispatch(getData({topic: 'flowers', page: 1}))    

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