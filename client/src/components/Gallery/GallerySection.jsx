import { setPage, setDataAsync  } from "../../redux/pixabay";
import { useDispatch, useSelector } from "react-redux";
import PageIndicator from "./PageIndicator";
import GalleryButton from "./GalleryButton";
import GalleryGrid from './GalleryGrid';
import { useEffect } from "react";

const GallerySection = () => {
    const { topic, page, loading, error } = useSelector(state => state.pixabay);
    const dispatch = useDispatch();

    // Update data on topic or page change
    useEffect(() => {
        dispatch(setDataAsync(topic, page));
    }, [dispatch, topic, page]);

    // Previous/Next button functions
    const onPrevious = () => {
        if (page > 1) {
            dispatch(setPage(page - 1));
        }
    };
    const onNext = () => {
        dispatch(setPage(page + 1));
    };

    return (
        <>
            {
                loading ? 
                (
                    <div className="text-center spaced-div d-flex align-items-center justify-content-center">
                        <p>Loading...</p>
                    </div>
                ) 
                : error ? 
                (
                    <div className="text-center">
                        <p>Error: {error}</p>
                        <p>Sorry! Try reloading the page.</p>
                    </div>     
                ) 
                : (
                    <section className="gallery-section">
                        <p className="fst-italic mb-4">Current Topic: {topic.toUpperCase()}</p>
                        {/* Previous/Next Buttons */}
                        <div className="gallery-buttons mb-3">
                            <GalleryButton text={'Previous'} onClickFunc={onPrevious}/>
                            <GalleryButton text={'Next'} onClickFunc={onNext}/>
                        </div>
                        {/* Images Grid */}
                        <GalleryGrid />      
                        {/* Page Indicator */}
                        <PageIndicator />
                    </section>
                )
            }        
        </>        
    )
}

export default GallerySection;