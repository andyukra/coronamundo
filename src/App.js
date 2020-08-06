import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import { CssBaseline } from '@material-ui/core';

const App = () => {

    return (
        <Provider store={store}>
            <CssBaseline>
                <Header />
                <Main />
            </CssBaseline>
        </Provider>
    )

}

export default App;