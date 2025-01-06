import {useSelector} from "react-redux";
import {selectSwapiData, selectSwapiLoading, selectSwapiError} from "../../redux/slices/selectors.js";

const InfoBlock = () => {
    const data = useSelector(selectSwapiData);
    const loading = useSelector(selectSwapiLoading);
    const error = useSelector(selectSwapiError);

    if (loading) {
        return <p className="form-text">Wait please...</p>;
    }

    if (error) {
        return <p className="form-text">Error: {error}</p>;
    }

    if (data) {
        return (
            <div>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        );
    }

    return null;
};

export default InfoBlock;
