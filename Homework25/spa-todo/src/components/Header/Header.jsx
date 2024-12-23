import Link from '../Link/Link';
import Theme_Switcher from "../Theme_Switcher/Theme_Switcher.jsx";

const Header = () => (
    <header className='header'>
        <img src="../../../src/assets/react.svg" alt='react' width='48px' height='48px' className='rotate'/>
        <ul className='header_list'>
            <li>
                <Link href='/'>Main</Link>
            </li>
            <li>
                <Link href='/about-me'>About Me</Link>
            </li>
            <li>
                <Link href='/contacts'>Contacts</Link>
            </li>
        </ul>
        <Theme_Switcher/>
    </header>
);

export default Header;