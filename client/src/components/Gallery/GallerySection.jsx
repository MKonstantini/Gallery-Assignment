import { setPage, setDataAsync } from '../../redux/pixabay'
import { useDispatch, useSelector } from 'react-redux'
import PageIndicator from './PageIndicator'
import GalleryGrid from './GalleryGrid'
import { useEffect } from 'react'
import { Button } from 'react-bootstrap'

const GallerySection = () => {
  const { topic, page, loading, error, data } = useSelector(
    (state) => state.pixabay,
  )
  const dispatch = useDispatch()

  // Update data on topic or page change
  useEffect(() => {
    dispatch(setDataAsync(topic, page))
  }, [dispatch, topic, page])

  console.log(data)

  // Previous/Next button functions
  const onPrevious = () => {
    if (page > 1) {
      dispatch(setPage(page - 1))
    }
  }
  const onNext = () => {
    dispatch(setPage(page + 1))
  }

  return (
    <>
      {loading ? (
        <div className="spaced-div text-center d-flex align-items-center justify-content-center">
          <p>Loading...</p>
        </div>
      ) : error ? (
        <div className="spaced-div text-center">
          <p>Error: {error}</p>
          <p>Sorry! Try reloading the page.</p>
        </div>
      ) : (
        <section className="spaced-div gallery-section">
          <p className="fst-italic mb-4">
            Current Topic: {topic.toUpperCase()}
          </p>
          {/* Previous/Next Buttons */}
          <div className="d-flex justify-content-between w-100 mb-3">
            <Button className="custom-small-button" onClick={onPrevious}>
              Previous
            </Button>
            <Button className="custom-small-button" onClick={onNext}>
              Next
            </Button>
          </div>
          {/* Images Grid */}
          <GalleryGrid />
          {/* Page Indicator */}
          <PageIndicator />
        </section>
      )}
    </>
  )
}

export default GallerySection
