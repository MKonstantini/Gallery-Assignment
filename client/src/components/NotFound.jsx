import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="centered-div text-center">
                <h1 className="display-1">Page Not Found!</h1>
                <button className="custom-small-button mt-5" onClick={() => navigate('/')}>Return</button>
            </div>
        </>
    )
}

export default NotFound