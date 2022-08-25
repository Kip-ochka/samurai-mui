import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import './index.css'
import App from './components/App/App'
import state from './redux/state.js'
import {addPost} from "./redux/state.js";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter><App state={state} addPost={addPost}/></BrowserRouter>)



