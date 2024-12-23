import {useContext} from 'react'
import {ThemeContext} from '../../themeContext.js';
import {NavLink} from 'react-router-dom';

const Link = (props) => {
    const [theme] = useContext(ThemeContext);

    const {children, href} = props;

    return (
        <NavLink to={href}
                 className={`header_list_item ${theme.color === 'dark' ? 'dark-link' : 'light-link'}`}>{children}</NavLink>
    )
}

export default Link;