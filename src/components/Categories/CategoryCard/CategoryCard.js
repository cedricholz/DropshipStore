import React from 'react';
import "./categorycardstyles.css"

export default class CategoryCard extends React.Component {

    render() {
        const {cardTitle, imageName, size} = this.props;
        let img = require(`../../../images/${imageName}`);
        let height = "550px";
        let width = "550px";

        if (size === "Small") {
            height = "255px";
            width = "255px";
        }

        return (
            <div className="CategoryCard" style={{
                backgroundImage: `url(${img})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: height,
                width: width
            }}>
                <div className="CardTitle">
                    {cardTitle}
                </div>
            </div>
        )
    }
}