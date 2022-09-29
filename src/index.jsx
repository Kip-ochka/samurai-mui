import './index.css'
import {store} from './redux/state.js'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import './index.css'
import App from './components/App/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
const rerenderTree = (state) => {
    root.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>)
}
rerenderTree(store.getState())

store.subscribe(rerenderTree)

