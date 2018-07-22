import React, {Component} from 'react';

import './App.css';
import HomePage from "./HomePage"

import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

const Home = () => (
    <div>
        <div className="App">
            <HomePage/>
        </div>
    </div>
);

const Project = (projectName) => {
    switch (projectName) {
        case 'Crypto':
            // return <CryptoTrader/>;
            return "";
        default:
            return ""
    }
};


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Route exact={true} path="/" component={Home}/>
                    <ScrollToTop>
                        <Route path="/cryptotrader" component={() => Project('Crypto')}/>
                    </ScrollToTop>


                </div>
            </BrowserRouter>
        );
    }
}

export default App;
