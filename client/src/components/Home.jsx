import TopicButton from "./TopicSelection/TopicButton"
import Gallery from "./Gallery/GallerySection"

const Home = () => {
    return (
        <>
            <TopicButton />
            <div className="centered-div text-center">
                <img src="../../public/Logo_GalleryAssignment.svg" alt="logo" className="logo-img w-50" />
                <header>
                    <h1 className="display-5 text-primary fw-bold mb-3">Gallery Assignment</h1>
                </header>
                <Gallery />                            
            </div> 
        </>
    )
}

export default Home