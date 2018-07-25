import React from 'react';
import "./categorypagestyles.css"

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {requestApiData} from "./actions";

export class CategoryPage extends React.Component {

    render() {
        const {data} = this.props;

        return (
            <div className="Category">
                <button onClick={() => this.props.requestApiData("ayyyy")}>
                    open
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
        data: state.data
    }
);

const mapDispatchToProps = dispatch =>
    bindActionCreators({requestApiData}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);

