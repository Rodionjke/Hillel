import {useDispatch} from "react-redux";
import {counter} from "../../redux/slice/counterSlice";

const ButtonsBlock = () => {
    const dispatch = useDispatch();
    const addValue = () => {
        dispatch(counter.actions.increment());
    }
    const decreaseValue = () => {
        dispatch(counter.actions.decrement());
    }

    return (<>
        <button onClick={addValue} className="margin-right">+</button>
        <button onClick={decreaseValue}>-</button>
    </>)
}

export default ButtonsBlock;