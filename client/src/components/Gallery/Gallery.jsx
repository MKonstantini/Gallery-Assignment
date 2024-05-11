import GalleryButton from "./GalleryButton"
import GalleryGrid from './GalleryGrid'

const Gallery = () => {
    return (
        <section className="gallery-section">
            {/* Buttons */}
            <div className="d-flex justify-content-between mb-3">
                <GalleryButton text={'Previous'} onClick={() => {}}/>
                <GalleryButton text={'Next'} onClick={() => {}}/>
            </div>
            {/* Grid */}
            <GalleryGrid />
        </section>
    )
}

export default Gallery