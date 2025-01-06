import Form from './components/Form/Form.jsx';
import InfoBlock from './components/InfoBlock/InfoBlock.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Button from "./components/Button/Button.jsx";
const App = () => {
    return (
        <Provider store={store}>
            <main className="container">
                <Form />
                <InfoBlock />
                <Button/>
            </main>
        </Provider>
    )
}

export default App

