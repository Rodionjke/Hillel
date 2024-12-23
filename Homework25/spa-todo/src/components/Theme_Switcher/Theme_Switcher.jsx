import { useContext } from 'react'
import { ThemeContext, themes } from '../../themeContext.js';

const Theme_Switcher = () => {
    const [theme, setTheme] = useContext(ThemeContext);

    const handleChange = () => {
        setTheme(theme.color === 'dark' ? themes.light : themes.dark)
    }

    return (
        <div className="form-check form-switch">
            <input className="form-check-input align-items-center" onChange={handleChange} type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={theme.color === 'dark'} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                {theme.color === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            </label>
        </div>
    );
}

export default Theme_Switcher;

