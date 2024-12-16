import {Component} from 'react';

class Button extends Component {

    render() {

        const {buttonText, onClick} = this.props;
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
}

export default Button;
