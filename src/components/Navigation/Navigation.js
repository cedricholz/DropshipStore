import React from 'react';
import "./navigationstyles.css"
import {Link} from 'react-router-dom';


export default class Navigation extends React.Component {

    render() {
        const {menuItems, scrollToComponents} = this.props;

        return (
            <div className="NavigationBar">


                <Link to={"/"} className="Link">
                    <div className="CompanyName">Generic Store</div>
                </Link>

                <a href={"https://github.com/cedricholz"} target="_blank" rel="noopener noreferrer">
                    {/*<img alt="" src={github} className="NavigationButtons Pad"/>*/}
                </a>
                <a href={"https://www.linkedin.com/in/cedricholz/"} target="_blank" rel="noopener noreferrer">
                    {/*<img alt="" src={linkedIn} className="NavigationButtons Pad"/>*/}
                </a>


                <div className="MenuItems">
                    {menuItems.map((item, i) =>
                        <div key={i} className="MenuItem" onClick={() => scrollToComponents(item)}>
                            <span>{item}</span>
                        </div>
                    )}
                </div>


            </div>
        )
    }
}