import React from 'react';
import "./bannerstyles.css"
import ReactRevealText from "react-reveal-text";


export default class Banner extends React.Component {


    done = () => {
        this.setState({typing: false}, () => {
            this.setState({typing: true})
        });
    };

    constructor() {
        super();
        this.state = {show: false, typing: true};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({show: true});
        }, 500);
    }

    render() {
        return (
            <div>
                <div className="Banner">
                    <div>
                        <div>
                            <div>FLASH SALE UP TO 60% OFF</div>
                        </div>

                        <div className="bottomText">
                            <ReactRevealText show={this.state.show}>BUY THINGS
                            </ReactRevealText>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}