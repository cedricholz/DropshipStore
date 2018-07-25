import React from 'react';
import "./sectionheaderstyles.css"

export default class SectionHeader extends React.Component {

    render() {
        return (
            <div className="SectionHeader">
                <h2 className="head">{this.props.title}</h2>
            </div>
        )
    }
}