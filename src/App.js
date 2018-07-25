import React, {Component} from 'react';

import './App.css';
import HomePage from "./HomePage"

import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import CategoryPage from "./components/CategoryPage/CategoryPage";

import {Provider} from 'react-redux';
import store from "./store";

const Home = () => (
    <div>
        <div className="App">
            <HomePage/>
        </div>
    </div>
);

const getRoutes = (categories) => {
    return categories.map((item, i) =>
        <ScrollToTop key={i}>
            <Route path={`/${item}`} component={() => <CategoryPage type={item}/>}/>
        </ScrollToTop>)
};

class App extends Component {
    render() {

        const categories = ['lightsabers', 'watches', 'tvaccessories', 'lights', 'gps', 'retrogamingsystems', '3dprinters'];
        const routes = getRoutes(categories);
        return (
            <Provider store={store}>
                <BrowserRouter>

                    <div className="App">
                        <Route exact={true} path="/" component={Home}/>
                        {routes}
                    </div>
                </BrowserRouter>
            </Provider>
        );

    }
}

export default App;
