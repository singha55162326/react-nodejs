import React, { Component } from "react";
import PropTypes from "prop-types";
import { Spinner } from '../../components'
export default class index extends Component {
  static propTypes = {
    prop: PropTypes,
  };
  onClickHistory = () => {
    this.props.onClickHistory()
  }
  render() {
    const { dateResult } = this.props
    console.log('dateResult:', dateResult)
    return (
      <div>
        <div className="content">
          <div className="container">
            <div className="row">
              {dateResult ?
                <div className="col-lg-12">
                  
                  <div class="card card-primary card-outline">
                    <div class="card-header">
                      <h3 className="card-title txt1">XỔ SỐ TRUYỀN THỐNG</h3>

                      <div class="card-tools">
                        <h3 className="card-title txt1">Ngày: 10/12/2021</h3>
                      </div>
                    </div>
                    <div className="card-body">
                      <table
                        className="table table-bordered table-hover table-sm"
                        style={{ textAlign: "center", tableLayout: "fixed" }}
                      >
                        <tbody>
                          <tr data-widget="expandable-table">
                            <td>Ký tự</td>
                            <td colSpan={4}>5NV-11NV-8NV-3NV-4NV-9NV</td>
                          </tr>
                          <tr data-widget="expandable-table">
                            <td>Đặt biệt</td>
                            <td colSpan={4}>
                              <h4 className="display-5" style={{ color: "#ff0000" }}>
                                {dateResult != null ? dateResult.g_zero : <Spinner />}
                              </h4>
                            </td>
                          </tr>
                          <tr data-widget="expandable-table">
                            <td>Giải nhất</td>
                            <td colSpan={4}>
                              <h6 className="display-7">{dateResult != null ? dateResult.g_one : <Spinner />}</h6>
                            </td>
                          </tr>
                          <tr data-widget="expandable-table">
                            <td>Giải nhỉ</td>
                            <td colSpan={2}>
                              <h6 className="display-7">{dateResult != null ? dateResult.g_two_one : <Spinner />}</h6>
                            </td>
                            <td colSpan={2}>
                              <h6 className="display-7">{dateResult != null ? dateResult.g_two_two : <Spinner />}</h6>
                            </td>
                          </tr>
                          <tr data-widget="expandable-table">
                            <td rowSpan={2}>Giải ba</td>
                            <td colSpan={1}>

                              <h6 className="display-7">{dateResult != null ? dateResult.g_three_one : <Spinner />}</h6>
                            </td>
                            <td colSpan={2}>

                              <h6 className="display-7">{dateResult != null ? dateResult.g_three_two : <Spinner />}</h6>
                            </td>
                            <td colSpan={1}>

                              <h6 className="display-7">{dateResult != null ? dateResult.g_three_three : <Spinner />}</h6>
                            </td>
                          </tr>
                          <tr data-widget="expandable-table">
                            <td colSpan={1}>

                              <h6 className="display-7">{dateResult != null ? dateResult.g_three_four : <Spinner />}</h6>
                            </td>
                            <td colSpan={2}>

                              <h6 className="display-7">{dateResult != null ? dateResult.g_three_five : <Spinner />}</h6>
                            </td>
                            <td colSpan={1}>

                              <h6 className="display-7">{dateResult != null ? dateResult.g_three_six : <Spinner />}</h6>
                            </td>
                          </tr>
                          <tr data-widget="expandable-table">
                            <td>Giải tư</td>
                            <td colSpan={1}>

                              <h6 className="display-7">{dateResult != null ? dateResult.g_four_one : <Spinner />}</h6>
                            </td>
                            <td colSpan={1}>

                              <h6 className="display-7">{dateResult != null ? dateResult.g_four_two : <Spinner />}</h6>
                            </td>
                            <td colSpan={1}>

                              <h6 className="display-7">{dateResult != null ? dateResult.g_four_three : <Spinner />}</h6>
                            </td>
                            <td colSpan={1}>

                              <h6 className="display-7">{dateResult != null ? dateResult.g_four_four : <Spinner />}</h6>
                            </td>
                          </tr>
                          <tr data-widget="expandable-table">
                            <td rowSpan={2}>Giải năm</td>
                            <td colSpan={1}>

                              <h6 className="display-7">{dateResult != null ? dateResult.g_five_one : <Spinner />}</h6>
                            </td>
                            <td colSpan={2}>

                              <h6 className="display-7">{dateResult != null ? dateResult.g_five_two : <Spinner />}</h6>
                            </td>
                            <td colSpan={1}>

                              <h6 className="display-7">{dateResult != null ? dateResult.g_five_three : <Spinner />}</h6>
                            </td>
                          </tr>
                          <tr data-widget="expandable-table">
                            <td colSpan={1}>

                              <h6 className="display-7">{dateResult != null ? dateResult.g_five_four : <Spinner />}</h6>
                            </td>
                            <td colSpan={2}>

                              <h6 className="display-7">{dateResult != null ? dateResult.g_five_five : <Spinner />}</h6>
                            </td>
                            <td colSpan={1}>

                              <h6 className="display-7">{dateResult != null ? dateResult.g_five_six : <Spinner />}</h6>
                            </td>
                          </tr>
                          <tr data-widget="expandable-table">
                            <td>Giải sau</td>
                            <td colSpan={1}>

                              <h6 className="display-7">{dateResult != null ? dateResult.g_six_one : <Spinner />}</h6>
                            </td>
                            <td colSpan={2}>

                              <h6 className="display-7">{dateResult != null ? dateResult.g_six_two : <Spinner />}</h6>
                            </td>
                            <td colSpan={1}>

                              <h6 className="display-7">{dateResult != null ? dateResult.g_six_three : <Spinner />}</h6>
                            </td>
                          </tr>
                          <tr data-widget="expandable-table">
                            <td>Giải bày</td>
                            <td colSpan={1}>
                              <h4
                                className="display-5"
                                style={{ color: " #ff0000" }}
                              >
                                {dateResult != null ? dateResult.g_seven_one : <Spinner />}
                              </h4>
                            </td>
                            <td colSpan={1}>
                              <h4
                                className="display-5"
                                style={{ color: " #ff0000" }}
                              >
                                {dateResult != null ? dateResult.g_seven_two : <Spinner />}
                              </h4>
                            </td>
                            <td colSpan={1}>
                              <h4
                                className="display-5"
                                style={{ color: " #ff0000" }}
                              >
                                {dateResult != null ? dateResult.g_seven_three : <Spinner />}
                              </h4>
                            </td>
                            <td colSpan={1}>
                              <h4
                                className="display-5"
                                style={{ color: " #ff0000" }}
                              >
                                {dateResult != null ? dateResult.g_seven_four : <Spinner />}
                              </h4>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>
                : null}

            </div>
          </div>
        </div>
      </div>
    );
  }
}
