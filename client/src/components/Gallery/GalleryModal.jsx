import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTags, faCloudDownload, faEye, faThumbsUp, faComment, faBoxArchive } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const GalleryModal = ({ show, handleClose, data }) => {
    return (
        data &&
        <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
            <Modal.Body className='py-5 px-0 px-sm-5 w-75 m-auto' >
                    {/* Title */}
                    <h1 className='mb-4'>Image Details</h1>
                    <hr className='mb-4'/>
                    {/* Image */}
                    <div>
                        <img src={data.webformatURL} alt="selected image" className='w-auto' />
                    </div>
                    <a href={data.pageURL} target='_blank' className='btn btn-light mb-0'>Pixabay</a>         
                    {/* Details */}
                    <hr className='mt-0'/>                    
                    <div className='text-start ms-2'>
                        <div className='d-sm-flex align-items-center gap-3 mb-3'>
                            <FontAwesomeIcon icon={faUser} />
                            <b className='ms-2 ms-sm-0'>Uploaded By:</b>
                            <p className='m-0'>{data.user}</p>
                        </div>
                        <div className='d-sm-flex align-items-center gap-3 mb-3'>
                            <FontAwesomeIcon icon={faTags} />
                            <b className='ms-2 ms-sm-0'>Tags:</b>
                            <p className='m-0'>{data.tags}</p>
                        </div>
                        <div className='d-sm-flex align-items-center gap-3 mb-3'>
                            <FontAwesomeIcon icon={faCloudDownload} />
                            <b className='ms-2 ms-sm-0'>Downloads:</b>
                            <p className='m-0'>{data.downloads}</p>
                        </div>
                        <div className='d-sm-flex align-items-center gap-3 mb-3'>
                            <FontAwesomeIcon icon={faEye} />
                            <b className='ms-2 ms-sm-0'>Views:</b>
                            <p className='m-0'>{data.views}</p>
                        </div>
                        <div className='d-sm-flex align-items-center gap-3 mb-3'>
                            <FontAwesomeIcon icon={faThumbsUp} />
                            <b className='ms-2 ms-sm-0'>Likes:</b>
                            <p className='m-0'>{data.likes}</p>
                        </div>
                        <div className='d-sm-flex align-items-center gap-3 mb-3'>
                            <FontAwesomeIcon icon={faComment} />
                            <b className='ms-2 ms-sm-0'>Comments:</b>
                            <p className='m-0'>{data.comments}</p>
                        </div>
                        <div className='d-sm-flex align-items-center gap-3 mb-3'>
                            <FontAwesomeIcon icon={faBoxArchive} />
                            <b className='ms-2 ms-sm-0'>Collection:</b>
                            <p className='m-0'>{data.collections}</p>
                        </div>
                    </div>
                    <hr />
                    {/* Close Button */}
                    <Button variant="light" onClick={handleClose} className='w-100 my-2'>
                        Close
                    </Button>          
                <div className='centered-div'>                    
                </div>
            </Modal.Body>
        </Modal>
    );
}

GalleryModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    data: PropTypes.object
};

export default GalleryModal;
