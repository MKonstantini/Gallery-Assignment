import { Button } from 'react-bootstrap'
import { setPage } from '../../redux/pixabay'
import { useDispatch, useSelector } from 'react-redux'

const PageIndicator = () => {
  const { page, data } = useSelector((state) => state.pixabay)
  const dispatch = useDispatch()

  // Pagination variables
  const isStart = page < 3
  const isEnd = data.length < 9

  // Generate displayed row
  const generateDisplayedRow = () => {
    const displayedRow = []

    // prefix dots
    if (!isStart) {
      displayedRow.push('dots')
    }

    // push pages
    if (page == 1 && !isEnd) {
      displayedRow.push(1, 2, 3)
    } else if (!isEnd) {
      displayedRow.push(page - 1, page, page + 1)
    } else {
      if (page - 2 > 0) displayedRow.push(page - 2)
      if (page - 1 > 0) displayedRow.push(page - 1)
      displayedRow.push(page)
    }

    // suffix dots
    if (!isEnd) {
      displayedRow.push('dots')
    }

    return displayedRow
  }

  // Map items
  return (
    <div className="d-flex gap-3 mt-1">
      {generateDisplayedRow().map((item, index) => {
        if (item == page)
          return (
            <Button
              key={index}
              variant="link"
              className="fw-bold text-black fw-light p-0"
            >
              {item}
            </Button>
          )
        else if (!isNaN(item))
          return (
            <Button
              key={index}
              variant="link"
              className="text-black fw-light p-0"
              onClick={() => dispatch(setPage(item))}
            >
              {item}
            </Button>
          )
        else if (item == 'dots')
          return (
            <div key={index} className="d-flex align-items-end">
              <p className="mb-0">. . .</p>
            </div>
          )
      })}
    </div>
  )
}

export default PageIndicator
