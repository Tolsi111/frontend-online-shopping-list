import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import {BrowserRouter} from "react-router-dom";
import {ShoppingListContextProvider} from "./context/ShoppingListFormContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ShoppingListContextProvider>
        <React.StrictMode>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </React.StrictMode>
    </ShoppingListContextProvider>
);
