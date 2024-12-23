import {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Main from "./components/Main/Main.jsx";
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import NotFound from './components/NotFound/NotFound';
import {ThemeContext, themes} from './themeContext';
import About_me from "./components/About_me/About_me.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";

const App = () => {
    const [theme, setTheme] = useState(themes.light);
    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            <BrowserRouter>
                <ErrorBoundary>
                    <div className={theme.color}>
                    <Header/>
                    <Routes>
                        <Route path="*" element={<NotFound/>}/>
                        <Route path='/' element={<Main/>}/>
                        <Route path='/about-me' element={<About_me/>}/>
                        <Route path='/contacts' element={<Contacts/>}/>
                    </Routes>
                    </div>
                </ErrorBoundary>
            </BrowserRouter>
        </ThemeContext.Provider>
    )
}

export default App