import React, { Component } from 'react'
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import { LoadingComponet } from "../../components";
import Cookie from "js-cookie";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  GET_SUM_REPORT_FAILED,
  GET_SUM_REPORT_SUCCESS,

} from "../../utils/commonType";
import { formatNumber } from '../../utils/Formater'
import { requestGetSumReport } from '../../actions/reportAction'
import logo from '../../img/11_PTT.png';


const MySwal = withReactContent(Swal);
class SellSrceen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: []
    };
  }
  componentDidMount() {
    const userInfo = Cookie.getJSON("userInfo") || null;
    let token = userInfo ? userInfo.token : null;
    let user_id = userInfo.auth[0].user_id;
    this.setState({ token, user_id });
    this.loaderOrder(token)

  }

  loaderOrder(token) {
    this.props.requestGetSumReport(token);
    this.setState({ loading: true, onGetInfo: true })
  }
  componentWillReceiveProps(nextProps) {
    const { t } = this.props;
    const { onGetInfo } = this.state;
    if (onGetInfo) {
      if (nextProps.dataResultSumReport) {
        switch (nextProps.actionType) {
          case GET_SUM_REPORT_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                let a = nextProps.dataResultSumReport;
                this.setState({ onGetInfo: false, loading: false, data: a });
                break;
              case nextProps.responseCode:
                MySwal.fire({
                  icon: "error",
                  title: t("info"),
                  text: nextProps.dataResultSumReport.message,
                  footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                });
                this.setState({ onGetInfo: false, loading: false });
                break;

              default:
                break;
            }
            break;
          case GET_SUM_REPORT_FAILED:
            MySwal.fire({
              icon: "error",
              title: t("info"),
              text: nextProps.message,
              footer: `<a href="">${t("YouContactDeveloper")}</a>`,
            });
            this.setState({ onGetInfo: false, loading: false });
            break;

          default:
            break;
        }
      }
    }
  }
  render() {
    const { t } = this.props;
    const { data } = this.state
    return (
      <div>
        {/* {loading ? <LoadingComponet /> : null} */}
        <div class="content-wrapper">
          <div class="content-header">

          </div>

          <section class="content">
            <div class="container-fluid">
              <div class="row">
                {
                  data.length > 0 ?
                    data.map((item, i) => (
                      <div class="col-12 col-sm-6 col-md-3">
                        <div class="info-box">
                          <span class={item.color}>
                            <i class={item.icon}></i>
                          </span>
                          <button class="info-box-content btn">
                            <span class="info-box-text">{item.Name}</span>
                            <span class="info-box-number text-danger">{item.total ? formatNumber(item.total + '') : 0} .Kip</span>
                            <span class="info-box-number">
                              {item.qty ? formatNumber(item.qty + '') : 0}
                              <small> ລິດ</small>
                            </span>
                          </button>
                        </div>
                      </div>
                    ))
                    : null

                }



              </div>
            </div>
          </section>
        </div>
      </div>

    )
  }
}
const mapStateToProps = (state) => {
  return {

    dataResultSumReport: state.reportReducer.dataResultSumReport,
    actionType: state.reportReducer.actionType,
    responseCode: state.reportReducer.responseCode,

  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    requestGetSumReport: (token) => dispatch(requestGetSumReport(token)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(SellSrceen));