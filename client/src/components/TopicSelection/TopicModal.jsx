import { featuredTopics, setPage, setTopic } from '../../redux/pixabay'
import { Modal, Button, Form, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { useRef, useState } from 'react'

const TopicModal = ({ show, handleClose }) => {
  const { topic } = useSelector((state) => state.pixabay)
  const dispatch = useDispatch()

  // On select topic
  const onTopicSelect = (topic) => {
    dispatch(setTopic(topic))
    dispatch(setPage(1))
    handleClose()
  }

  // Search bar variables
  const [isSearchEmpty, setIsSearchEmpty] = useState(false)
  const inputRef = useRef(null)

  // On search topic
  const handleSearch = () => {
    const inputValue = inputRef.current.value
    if (inputValue != '') {
      setIsSearchEmpty(false)
      onTopicSelect(inputValue)
    } else {
      setIsSearchEmpty(true)
    }
  }

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <Modal show={show} onHide={handleClose} dialogClassName='custom-modal'>
      <Modal.Body className='py-5 px-0 px-sm-5 w-75 m-auto'>
        {/* Header */}
        <h1 className='mb-4'>Choose Topic</h1>
        <hr />

        {/* Featured */}
        <p className='fst-italic m-0'>Featured:</p>
        {featuredTopics.map((item, index) =>
          item == topic ? (
            <Button
              key={index}
              className='selected-styling w-100 my-2 border-0'
              variant='none'
            >
              {capitalizeFirstLetter(item)}
            </Button>
          ) : (
            <Button
              key={index}
              onClick={() => onTopicSelect(item)}
              className='w-100 my-2'
              variant='light'
            >
              {capitalizeFirstLetter(item)}
            </Button>
          ),
        )}
        <hr />

        {/* Search */}
        <p className='fst-italic mb-1'>Search Anything:</p>
        <InputGroup>
          <Form.Control placeholder='Search...' type='text' ref={inputRef} />
          <Button variant='secondary' onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </InputGroup>
        {isSearchEmpty && (
          <p className='mt-1 text-white fw-bold fst-italic'>
            Enter your search!
          </p>
        )}
        <hr />

        {/* Cancel Button */}
        <Button
          variant='light'
          onClick={() => {
            handleClose()
            setIsSearchEmpty(false)
          }}
          className='w-100 my-2'
        >
          Cancel
        </Button>
      </Modal.Body>
    </Modal>
  )
}

// Prop safety check
TopicModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default TopicModal
