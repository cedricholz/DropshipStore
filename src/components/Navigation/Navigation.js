import React from 'react';
import "./navigationstyles.css"
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

export default class Navigation extends React.Component {

    render() {
        return (
            <div className="NavigationBar">

                <Fade left>
                    <Link to={"/"} className="Link">
                        <div className="Name Pad">Generic Store</div>
                    </Link>

                    <a href={"https://github.com/cedricholz"} target="_blank" rel="noopener noreferrer">
                        {/*<img alt="" src={github} className="NavigationButtons Pad"/>*/}
                    </a>
                    <a href={"https://www.linkedin.com/in/cedricholz/"} target="_blank" rel="noopener noreferrer">
                        {/*<img alt="" src={linkedIn} className="NavigationButtons Pad"/>*/}
                    </a>

                </Fade>
            </div>
        )
    }
}