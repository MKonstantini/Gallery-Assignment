import { useSelector } from "react-redux"

const PageIndicator = () => {
    // Variables
    const { page } = useSelector(state => state.pixabay);

    return (
        <>
            {
                (page == 1) ? 
                <p><b>1</b> 2 3</p> :
                <p>{page-1} <b>{page}</b> {page+1}</p>
            }
        </>
    )
}

export default PageIndicator