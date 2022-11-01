import React, { Component } from "react";
import { connect } from "react-redux";
import { requestLoginAction } from "../../actions/loginActions";
import { LOGIN_SUCCESS, LOGIN_FAILED } from "../../utils/commonType.js";
import { requestBodyLogin } from "../../api/bodyReq";
import { LoadingComponet } from "../../components";
import Cookie from "js-cookie";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { withTranslation } from "react-i18next";
const MySwal = withReactContent(Swal);
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessToken: null,
      userName: null,
      password: null,
      isLoginSuccess: false,
      isRegister: false,
      loading: false,
    };

    this.pressClickSignIn = this.pressClickSignIn.bind(this);
    this.onTextChangeUserName = this.onTextChangeUserName.bind(this); //input text
    this.onTextChangePassword = this.onTextChangePassword.bind(this); //input text
  }
  componentWillReceiveProps(nextProps) {
    const { t } = this.props;
    const { isLoginSuccess } = this.state;
    if (isLoginSuccess) {
      switch (nextProps.actionType) {
        case LOGIN_SUCCESS:
          const userInfo = Cookie.getJSON("userInfo") || null;
          console.log("userInfo:", userInfo);
          MySwal.fire({
            icon: "success",
            title: t("LoginSuccessfully"),
            text: t("welcome") + userInfo.auth[0].user_name,
            confirmButtonText: t("Login"),
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/dashboard";
            }
          });
          this.setState({ isLoginSuccess: false, loading: false });
          break;
        case LOGIN_FAILED:
          MySwal.fire({
            icon: "error",
            title: t("info"),
            text: t("error"),
            footer: `<a href="">${t("YouContactDeveloper")}</a>`,
          });
          this.setState({ isLoginSuccess: false, loading: false });
          break;
        default:
          break;
      }
    }
  }

  onTextChangeUserName(event) {
    this.setState({ userName: event.target.value });
  }

  onTextChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  pressClickSignIn() {
    const { t } = this.props;
    const { userName, password } = this.state;
    if (userName && password) {
      let data = requestBodyLogin(userName, password);
      this.props.requestLoginAction(data);
      this.setState({ isLoginSuccess: true, loading: true });
    } else {
      MySwal.fire({
        icon: "error",
        title: t("info"),
        text: t("EnterInfo"),
        footer: `<a href="">${t("YouContactDeveloper")}</a>`,
      });
    }
  }

  render() {
    const { t, i18n } = this.props;
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
    const { loading } = this.state;
    return (
      <div>
        {loading ? <LoadingComponet /> : null}
        <div className="wrapper">
          <nav className="navbar navbar-expand-md navbar-light navbar-white">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a className="nav-link" data-toggle="dropdown" href="#">
                  <i className="flag-icon flag-icon-la" />
                </a>
                <div className="dropdown-menu dropdown-menu-right p-0">
                  <button
                    className="dropdown-item active"
                    onClick={() => changeLanguage("lo")}
                  >
                    <i className="flag-icon flag-icon-la mr-2" /> LAO
                  </button>

                  <button
                    className="dropdown-item"
                    onClick={() => changeLanguage("en")}
                  >
                    <i className="flag-icon flag-icon-us mr-2" /> English{" "}
                  </button>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className="login-page">
          <div className="login-box">
            <div className="card card-outline ">
              <div className="card-header text-center">
                <b>{t("login")}</b>
              </div>
              <div className="card-body login-card-body">
                <p className="login-box-msg"></p>
                <div>
                  <div className="input-group mb-3">
                    <input
                      type="userName"
                      className="form-control"
                      placeholder={t("userName")}
                      onChange={this.onTextChangeUserName}
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-user" />
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder={t("password")}
                      onChange={this.onTextChangePassword}
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-lock" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="social-auth-links text-center mb-3">
                  <button
                    type="submit"
                    onClick={this.pressClickSignIn}
                    className="btn btn-block btn-success"
                  >
                    {t("login")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    actionType: state.loginReduce.actionType,
    message: state.loginReduce.message,
    success: state.loginReduce.success,
    userInfo: state.loginReduce.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestLoginAction: (data) => dispatch(requestLoginAction(data)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(index));
