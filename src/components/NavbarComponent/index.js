import React, { Component } from "react";

export default class index extends Component {
  onBankHome = () => {
    this.props.onBankHome()
  }
  onLogout = () => {
    this.props.onClickLogout()
  }
  onLogin=()=>{
    this.props.onClickLogin()
  }
  render() {
    return (
      <nav className="navbar navbar-dark navbar-primary navbar-dark)">
        <div className="container">
          <button
            className="navbar-toggler order-1"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse order-3" id="navbarCollapse">
            <ul className="navbar-nav">
              <li class="nav-item d-none d-sm-inline-block">
                <button className="btn nav-link" onClick={() => this.onBankHome()}>
                  {this.props.home}
                </button>
              </li>
            </ul>

            <form className="form-inline ml-0 ml-md-3">
              <div className="input-group input-group-sm">
                <input
                  className="form-control form-control-navbar"
                  type="search"
                  placeholder="ຄົ້ນຫາ"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <button className="btn btn-navbar" type="submit">
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
            </form>
          </div>

          <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
            <li className="nav-item">
              <button className="btn nav-link">
                {this.props.userName || null}
              </button>
            </li>
            <li className="nav-item">
              {this.props.userName ?
                <button className="btn nav-link" onClick={() => this.onLogout()}>
                  {this.props.Logout}
                </button> :
                <button className="btn nav-link" onClick={() => this.onLogin()}>
                  {this.props.Login}
                </button>}

            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
