import {useSelector} from "react-redux";
import selectors from "../../redux/slice/selectors.js";

const Footer = () => {
    const todoCount = useSelector(selectors.items).length;
    return (<p className="main-title">
        All todos count: {todoCount}
    </p>)
}
export default Footer