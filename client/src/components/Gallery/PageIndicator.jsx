import { useSelector } from "react-redux";

const PageIndicator = () => {
    const { page } = useSelector(state => state.pixabay);

    return (
        <div className="d-flex gap-3">
            {
                (page == 1) ? 
                <>
                    <p className="fw-bold">1</p>
                    <p>2</p>
                    <p>3</p>
                </> :
                <>
                    <p>{page - 1}</p>
                    <p className="fw-bold">{page}</p>
                    <p>{page + 1}</p>
                </>                
            }
        </div>
    )
}

export default PageIndicator;