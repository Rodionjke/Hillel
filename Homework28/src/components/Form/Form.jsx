import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchData, setEndpoint} from "../../redux/slices/swapiSlice.js";
import {selectSwapiEndpoint} from "../../redux/slices/selectors.js";

const Form = () => {
    const dispatch = useDispatch();
    const endpoint = useSelector(selectSwapiEndpoint);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (endpoint) {
            dispatch(fetchData(endpoint));
            dispatch(setEndpoint(""));
        }
    };

    const handleChange = (event) => {
        dispatch(setEndpoint(event.target.value));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="text-center mb-3 main_title">Try it now!</h1>
            <div className="input-group">
                <span className="input-group-text">https://swapi.dev/api/</span>
                <input
                    type="text"
                    className="form-control"
                    value={endpoint}
                    onChange={handleChange}
                    placeholder="Enter SWAPI endpoint (e.g., people/1)"
                />
                <button className="btn btn-primary" type="submit">
                    Request
                </button>
            </div>
            <p className="form-text">Need a hint? Try people/1/ or planets/3/ or starships/9/</p>
        </form>
    );
};

export default Form;
