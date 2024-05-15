import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="centered-div text-center">
      <h1 className="display-1">Page Not Found!</h1>
      <Button
        className="custom-small-button mt-5"
        onClick={() => navigate('/')}
      >
        Return
      </Button>
    </div>
  );
};

export default NotFound;
