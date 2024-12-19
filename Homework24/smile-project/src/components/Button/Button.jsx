const Button = (props) => {
    const {buttonText, onClick} = props;
    return (
        <button
            className="btn btn-primary"
            style={{height: '50px', width: 'auto'}}
            onClick={onClick}
        >
            {buttonText}
        </button>
    );
}

export default Button;
