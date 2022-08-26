import './index.css'
import state, {subscribe} from './redux/state.js'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import './index.css'
import App from './components/App/App'
import {addPost, updatePostText} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'))
const rerenderTree = (state) => {
    root.render(
        <BrowserRouter><App state={state} addPost={addPost} updatePostText={updatePostText}/></BrowserRouter>)
}
rerenderTree(state)

subscribe(rerenderTree)

