import {useContext} from 'react';
import {ThemeContext} from '../../themeContext.js';

const Button = (props) => {
    const {buttonText, onClick} = props;
    const [theme] = useContext(ThemeContext);
    return (
        <button
            className={`btn ${theme.color === 'dark' ? 'btn-light' : 'btn-dark'}`}
            style={{height: '50px', width: 'auto'}}
            onClick={onClick}
        >
            {buttonText}
        </button>
    );
}

export default Button;
