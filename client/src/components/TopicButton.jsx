import { useDispatch, useSelector } from "react-redux"
import { changeTopic } from "../redux/apiData"

const TopicButton = () => {
    //const { data, topic } = useSelector(state => state.apiData)
    const dispatch = useDispatch()

    function onClick() {
        dispatch(changeTopic('flowers'))
    }

    return (
        <button onClick={onClick} className='topic-button'> 
            Choose Topic
        </button>    
    )
}

export default TopicButton