import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
    };
  }
  componentDidMount() {
    const userInfo = Cookies.getJSON("userInfo") || null;
    let token = userInfo ? userInfo.token : null;
    let user_id = userInfo.auth[0].user_id;
    let createBy = userInfo ? userInfo.auth[0].username : null;
    this.setState({ token, user_id , Name: createBy });

}
  onLogout() {
    const { t } = this.props;
    Cookies.remove('userInfo'); // fail!
    MySwal.fire({
      icon: "success",
      title: t("Alert"),
      text: t("logoutSuccessfully"),
      confirmButtonText: t("Confirm"),
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/";
      }
    });
  }
  render() {
    const { t } = this.props;
    const { Name } = this.state;
    return (
      <nav className="main-header navbar navbar-expand navbar-light" style={{backgroundColor: '#FFF'}}>
        <ul className="navbar-nav">
          
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link"
              data-widget="control-sidebar"
              data-slide="true"
              to={"/dashboard"}
              role="button">
              {t('Home')}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"
              data-widget="control-sidebar"
              data-slide="true"
              to={"/dashboard"}
              role="button">
              {Name ? Name : null}
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link
              className="nav-link"
              data-widget="control-sidebar"
              data-slide="true"
              to={"/"}
              role="button"
              onClick={() => this.onLogout()}
            >
              <i class="fas fa-sign-out-alt" />
              {t("logout")}
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, null)(withTranslation()(Header));
