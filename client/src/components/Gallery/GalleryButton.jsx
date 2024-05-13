import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const GalleryButton = ({text, onClickFunc}) => {   
    return (
        <Button className='custom-small-button' onClick={onClickFunc}>{text}</Button>
    )    
}

// Prop safety checks
GalleryButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClickFunc: PropTypes.func
};

export default GalleryButton;