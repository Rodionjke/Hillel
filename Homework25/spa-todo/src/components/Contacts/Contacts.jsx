import {useContext} from "react";
import {ThemeContext} from "../../themeContext.js";

const Contacts = () => {
    const [theme] = useContext(ThemeContext);
    return <div className='container'>
        <p className='text-center mb-5'>My Contacts</p>
        <ul className='d-flex justify-content-between list-unstyled'>
            <li className='text-center'>
                <a href='tel:+12433253' target='_blank'
                   className={`header_list_item ${theme.color === 'dark' ? 'dark-link' : 'light-link'}`}>
                    <img src='../../../src/assets/phone.svg' height='50' width='50' alt="phone"/>
                    <div>+12433253</div>
                </a>
            </li>
            <li className='text-center'>
                <a href='https://web.telegram.org' target='_blank'
                   className={`header_list_item me-3 ${theme.color === 'dark' ? 'dark-link' : 'light-link'}`}>
                    <img src='../../../src/assets/telegram.svg' height='50' width='50' alt="telegram"/>
                    <div>Telegram</div>
                </a>
            </li>
            <li className='text-center'>
                <a href='mailto: someone@example.com' target='_blank'
                   className={`header_list_item me-3 ${theme.color === 'dark' ? 'dark-link' : 'light-link'}`}>
                    <img src='../../../src/assets/mail.svg' height='50' width='50' alt="email"/>
                    <div>My Email</div>
                </a>
            </li>
        </ul>
    </div>;

};
export default Contacts;
