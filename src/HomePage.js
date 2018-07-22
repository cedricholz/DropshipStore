import React, {Component} from 'react';

import './App.css';
import Navigation from "./components/Navigation/Navigation"
import scrollToComponent from 'react-scroll-to-component';
import BurgerMenu from 'react-burger-menu';

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

    getMenu() {
        const Menu = BurgerMenu['pushRotate'];
        const items = [
            <h2 key="0"><i className="fa fa-fw fa-inbox fa-2x"/><span>Navigation</span></h2>,

            <div key="1" className="MenuContainer" onClick={() => this.scrollToComponents("EXPERIENCE")}>
                <span className="MenuItem">EXPERIENCE</span>
            </div>,
            <div key="2" className="MenuContainer" onClick={() => this.scrollToComponents("PROJECTS")}>
                <span className="MenuItem">PROJECTS</span>
            </div>,
            <div key="3" className="MenuContainer" onClick={() => this.scrollToComponents("EDUCATION")}>
                <span className="MenuItem">EDUCATION</span>
            </div>,
            <div key="4" className="MenuContainer" onClick={() => this.scrollToComponents("COURSES")}>
                <span className="MenuItem">COURSES</span>
            </div>,
            <div key="5" className="MenuContainer" onClick={() => this.scrollToComponents("SKILLS")}>
                <span className="MenuItem">SKILLS</span>
            </div>,
            <div key="6" className="MenuContainer" onClick={() => this.scrollToComponents("CONTACT")}>
                <span className="MenuItem">CONTACT</span>
            </div>,

        ];

        return (
            <MenuWrap wait={20} side={'right'}>
                <Menu isOpen={this.state.open} id={'pushRotate'} pageWrapId={'page-wrap'}
                      outerContainerId={'outer-container'} right>
                    {items}
                </Menu>
            </MenuWrap>
        );

    }

    render() {

        return (

            <div className="App">

                <div id="outer-container">
                    {this.getMenu()}
                    <main id="page-wrap">
                        <header className="header">
                            <Navigation/>
                        </header>
                    </main>
                </div>

            </div>

        );
    }
}
