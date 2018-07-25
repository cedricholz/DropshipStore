import React, {Component} from 'react';

import './App.css';
import Navigation from "./components/Navigation/Navigation"
import scrollToComponent from 'react-scroll-to-component';
import BurgerMenu from 'react-burger-menu';
import AdBar from "./components/AdBar/AdBar";
import Banner from "./components/Banner/Banner";
import Categories from "./components/Categories/Categories";
import Trending from "./components/Trending/Trending";
import SectionHeader from "./components/SectionHeader/SectionHeader";
import Footer from "./components/Footer/Footer";

class MenuWrap extends Component {

    render() {
        return (
            <div className={this.props.side}>
                {this.props.children}
            </div>
        );
    }
}

export default class HomePage extends Component {

    scrollToComponents = (componentName) => {
        this.setState({open: false});
        switch (componentName) {
            case 'EXPERIENCE':
                scrollToComponent(this.Experience, {offset: 0, align: 'top', duration: 1500});
                break;
            case 'PROJECTS':
                scrollToComponent(this.Projects, {offset: 0, align: 'top', duration: 1500});
                break;
            default:
                break
        }
    };

    constructor(props) {
        super(props);
        this.state = {open: false};
        const myName = "\n" +
            " __   ___  __   __     __  \n" +
            "/  ` |__  |  \\ |__) | /  ` \n" +
            "\\__, |___ |__/ |  \\ | \\__, \n" +
            "                           \n" +
            "      __       __          \n" +
            "|__| /  \\ |     /          \n" +
            "|  | \\__/ |___ /_          \n" +
            "                           \n";
        console.log(myName)
    }

    getMenu(menuItems) {
        const Menu = BurgerMenu['pushRotate'];
        var items =  menuItems.map((item, i) =>
            <div key={i} className="MenuContainer" onClick={() => this.scrollToComponents("EXPERIENCE")}>
                <span className="MenuItem">{item}</span>
            </div>
        );

        return (
            <MenuWrap wait={20} side={'right'}>
                <Menu isOpen={this.state.open} id={'pushRotate'} pageWrapId={'page-wrap'}
                      outerContainerId={'outer-container'} right>
                    <h2 key="0"><i className="fa fa-fw fa-inbox fa-2x"/><span>Navigation</span></h2>
                    {items}
                </Menu>
            </MenuWrap>
        );

    }

    render() {

        const menuItems = ["Shop", "Faqs", "Products", "Sale", "Track Package"];

        const deviceWidth = window.innerWidth;

        return (
            <div className="App">

                <AdBar/>
                <div id="outer-container">
                    {deviceWidth < 600? this.getMenu(menuItems) : ''}
                    <main id="page-wrap">
                        <header className="header">
                            <Navigation menuItems={menuItems} scrollToComponents={this.scrollToComponents}/>
                            <Banner/>
                        </header>
                    </main>
                    <Categories/>
                    <SectionHeader title={"Trending"}/>
                    <Trending/>
                    <Footer/>
                </div>

            </div>

        );
    }
}
