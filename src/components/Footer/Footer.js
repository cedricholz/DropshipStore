import React from 'react';
import "./footerstyles.css"

export default class Footer extends React.Component {

    render() {
        const links = ['Faqs', 'Shipping', 'Return Policy', 'Privacy Policy'];
        const guarantee = ['Full refund if order is not received', 'Full refund if item is not as described', 'Full refund if item breaks within 30 days'];
        const getInTouch = ['Fake Street, Fake City FL, 555555', 'info@GenericStore.com', '(555) 555-5555'];
        const subscribe = ['Subscribe to the Generic Store newsletter!'];

        return (
            <div className="Footer">
                <div className="FooterContent">
                    <div className="Quarter">
                        <div className="QuarterHeader">LINKS</div>
                        {links.map((item, i) => <div className="ListItem" key={i}>{item}</div>)}

                    </div>
                    <div className="Quarter">
                        <div className="QuarterHeader">OUR GUARANTEE</div>
                        {guarantee.map((item, i) => <div className="ListItem" key={i}>{item}</div>)}
                    </div>
                    <div className="Quarter">
                        <div className="QuarterHeader">GET IN TOUCH</div>
                        {getInTouch.map((item, i) => <div className="ListItem" key={i}>{item}</div>)}
                    </div>
                    <div className="Quarter">
                        <div className="QuarterHeader">SUBSCRIBE</div>
                        {subscribe.map((item, i) => <div className="ListItem" key={i}>{item}</div>)}
                    </div>
                </div>
                <div className="FooterFooter">

                    Copyright Generic Store. All Rights Reserved

                </div>
            </div>
        )
    }
}