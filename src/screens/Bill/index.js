import React, { Component } from 'react'
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }
    componentDidMount(){

    }
    render() {
        const { data }=this.props
        console.log('dara:', data)
        return (
            <div>
                <h2>bopby</h2>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTranslation()(index));