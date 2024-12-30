import {Provider} from "react-redux";
import Header from "./components/Header/Header";
import ButtonsBlock from "./components/ButtonsBlock/ButtonsBlock.jsx";
import {store} from "./redux/store";
import './index.css'

function App() {
    return (
        <Provider store={store}>
            <Header/>
            <ButtonsBlock/>
        </Provider>
    );
}

export default App;
