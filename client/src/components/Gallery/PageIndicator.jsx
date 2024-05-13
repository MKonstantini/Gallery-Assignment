import { Button } from 'react-bootstrap'
import { setPage } from '../../redux/pixabay'
import { useDispatch, useSelector } from 'react-redux'

const PageIndicator = () => {
  const { page } = useSelector((state) => state.pixabay)
  const dispatch = useDispatch()

  return (
    <div className='d-flex gap-1'>
      {page == 1 ? (
        <>
          <Button variant='link' className='fw-bold text-black fw-light'>
            1
          </Button>
          <Button
            variant='link'
            className='text-black fw-light'
            onClick={() => dispatch(setPage(2))}
          >
            2
          </Button>
          <Button
            variant='link'
            className='text-black fw-light'
            onClick={() => dispatch(setPage(3))}
          >
            3
          </Button>
        </>
      ) : (
        <>
          <Button
            variant='link'
            className='text-black fw-light'
            onClick={() => dispatch(setPage(page - 1))}
          >
            {page - 1}
          </Button>
          <Button variant='link' className='fw-bold text-black fw-light'>
            {page}
          </Button>
          <Button
            variant='link'
            className='text-black fw-light'
            onClick={() => dispatch(setPage(page + 1))}
          >
            {page + 1}
          </Button>
        </>
      )}
    </div>
  )
}

export default PageIndicator
