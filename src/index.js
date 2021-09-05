import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './app/layout/styles.css';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {configureStore} from "./app/store/configureStore";

const store = configureStore();

const rootEl = document.getElementById('root');

function render() {
    ReactDOM.render(
        <Provider store={store} >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
        , rootEl
    );
}

if (module.hot) {
    module.hot.accept('./app/layout/App', function() {
        setTimeout(render);
    })
}

render();
reportWebVitals();
