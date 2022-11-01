import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";
import { withTranslation } from "react-i18next";
import Cookie from "js-cookie";
import Manage from "./menu/Manage";
import Report from "./menu/Report";
import Service from "./menu/Service";
import background from '../img/bg.jpeg'
const SectionStyle = {
  width: "100%",
  height: "200px",
  backgroundImage: "url(" + { background } + ")"
};
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Role: null,
    };
  }

  componentDidMount() {
    const userInfo = Cookie.getJSON("userInfo") || null;
    console.log('userInfo:', userInfo)
    let role = userInfo ? userInfo.auth[0].role : null;
    this.setState({ Role: role });
  }

  render() {
    const { t } = this.props;
    const { Role } = this.state
    return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4 myFont" style={{ backgroundColor: '#2596be' }}>
        <div style={{
          backgroundImage: `url(${background})`, width: '100%', height: 100, backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}>


        </div>
        <div className="sidebar">
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {
                Role == 1 ?
                  <li className="nav-item menu-open">
                    <a href="#" className="nav-link">
                      <i className="fas fa-book mr-1" />
                      <p>
                        {t("Manage")}
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      {Manage.map((item) => (
                        <li className="nav-item">
                          <Link to={item.path} className="nav-link">
                            <i className={item.icon} />
                            <p>{t(item.title)}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  : null
              }

              {
                Role == 1 || Role == 2 ?
                  <li className="nav-item menu-open">
                    <a href="#" className="nav-link">
                      <i className="fas fa-book mr-1" />
                      <p>
                        {t("service")}
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      {Service.map((item) => (
                        <li className="nav-item">
                          <Link to={item.path} className="nav-link">
                            <i className={item.icon} />
                            <p>{t(item.title)}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>

                  </li> : null
              }

              {
                Role == 1 ?
                  <li className="nav-item menu-open">
                    <a href="#" className="nav-link">
                      <i className="fas fa-book mr-1" />
                      <p>
                        {t("Report")}
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      {Report.map((item) => (
                        <li className="nav-item">
                          <Link to={item.path} className="nav-link">
                            <i className={item.icon} />
                            <p>{t(item.title)}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  : null
              }


            </ul>
          </nav>
        </div>
      </aside>
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
export default connect(mapStateToProps, null)(withTranslation()(index));
