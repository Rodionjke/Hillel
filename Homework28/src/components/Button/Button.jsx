import {useDispatch} from "react-redux";
import {clearData} from "../../redux/slices/swapiSlice.js";

const Button = () => {
    const dispatch = useDispatch();
    const handleClear = () => {
        dispatch(clearData());
    };

    return (
        <button
            className="btn btn-danger mt-3"
            onClick={handleClear}
        >
            Clear Data
        </button>
    );
};

export default Button;
