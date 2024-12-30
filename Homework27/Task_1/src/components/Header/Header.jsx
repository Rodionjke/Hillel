import {useSelector} from "react-redux";
import selectors from "../../redux/slice/selectors";

const Header = () => {
    const value = useSelector(selectors.counter.value);
    return (
        <h1>Value: {value}</h1>
    )
}
export default Header