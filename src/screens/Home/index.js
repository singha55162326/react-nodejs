import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import { requestLoginAction } from "../../actions/loginActions";
import images from '../../themes/img'
// import imgg from '../../img/01_icon.png'
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadPage: false,
    };
  }

  componentDidMount() {
    // window.location.reload(false);
  }

  componentWillReceiveProps(nextProps) {
    console.log("<<<<< NextProps Login >>>>>", nextProps);
    if (nextProps !== null) {
      console.log(nextProps.userInfo);
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Menu />
        <div className="content-wrapper body">
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>ຫນ້າຫລັກ</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                  </ol>
                </div>
              </div>
            </div>
          </section>
          <section className="content">
            <div className="container-fluid">

              <div className="row">

                {/* {images.map(({ id, src, title, number }) =>
                  <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">
                      <span className="info-box-icon">
                        <img key={id} src={imgg} />
                      </span>
                      <div className="info-box-content">
                        <span className="info-box-text">{title}</span>
                        <span className="info-box-number">
                          {number}
                        </span>
                      </div>
                    </div>
                  </div>)} */}
              </div>


            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    actionType: state.loginReduce.actionType,
    success: state.loginReduce.success,
    userInfo: state.loginReduce.userInfo,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    requestLoginAction: (data) => dispatch(requestLoginAction(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(index);
