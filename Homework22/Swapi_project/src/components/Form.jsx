const Form = () => {
    return (
        <div className="mb-3 mt-3">
            <h1  className="text-center mb-3 main_title">Try it now!</h1>
            <div className="input-group">
                <span className="input-group-text">https://swapi.dev/api/</span>
                <input
                    type="text"
                    className="form-control"
                />
                <button className="btn btn-primary" type="submit" id="button-addon2">Request</button>
            </div>
            <p className="form-text">Need a hint? try people/1/ or planets/3/ or starships/9/</p>
        </div>
    )
        ;
};

export default Form;
