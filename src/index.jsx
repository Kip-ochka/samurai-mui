import './index.css'
import {store} from './redux/reduxStore';
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import './index.css'
import App from './components/App'
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'))
const rerenderTree = () => {
    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>)
}
rerenderTree()

store.subscribe(() => {
    const state = store.getState()
    rerenderTree(state)
})

