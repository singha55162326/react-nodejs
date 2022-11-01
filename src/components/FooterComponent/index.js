import React, { Component } from "react";
import PropTypes from "prop-types";

export default class index extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      
        <footer className="footer">
        {/* To the right */}
        <div className="float-right d-none d-sm-inline">
        ທາງເລືອກທີ່ດີກວ່າ
        </div>
        {/* Default to the left */}
        <strong>Copyright ©2021 <a href="#">Lottory.com</a>.</strong> ສະຫງວນລິຂະສິດທັງໝົດ.
        </footer>

    );
  }
}
