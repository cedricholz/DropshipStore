import React from 'react';
import "./productcardstyles.css";

export default class ProductCard extends React.Component {

    render() {
        const {imageName, description, price} = this.props;
        let img = require(`../../images/${imageName}`);
        return (
            <div>
                <div className="ProductCard">
                    <div className="CardImage" style={{
                        backgroundImage: `url(${img})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}>
                    </div>

                    <div className="ProductDescriptionContainer">
                        <div className="ProductDescription">
                            {description}
                        </div>
                        <div className="ProductPrice">
                            {price}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}