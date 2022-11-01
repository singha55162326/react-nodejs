import React, { Component } from 'react'
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import { LoadingComponet } from "../../components";
import Cookie from "js-cookie";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
    GET_ALL_REPORT_FAILED,
    GET_ALL_REPORT_SUCCESS,

} from "../../utils/commonType";
import { formatNumber } from '../../utils/Formater'
import { requestGetReport } from '../../actions/reportAction'
import ReactToPrint from "react-to-print";
import logo from '../../img/11_PTT.png';
import Moment from 'react-moment';
// import Lottie from "lottie-web";

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

    }

    loaderOrder(token) {
        this.props.requestGetAllOrder(token);
        this.setState({
            isCallGetOrder: true,
        });
    }
    componentWillReceiveProps(nextProps) {
        const { t } = this.props;
        const { onGetInfo } = this.state;
        if (onGetInfo) {
            if (nextProps.dataResultReport) {
                switch (nextProps.actionType) {
                    case GET_ALL_REPORT_SUCCESS:
                        switch (nextProps.dataResultReport.responseCode) {
                            case "00000":
                                let a = nextProps.dataResultReport.reportValueSell;

                                this.setState({ onGetInfo: false, loading: false, data: a });
                                break;
                            case nextProps.responseCode:
                                MySwal.fire({
                                    icon: "error",
                                    title: t("info"),
                                    text: nextProps.dataResultReport.message,
                                    footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                                });
                                this.setState({ onGetInfo: false, loading: false });
                                break;

                            default:
                                break;
                        }
                        break;
                    case GET_ALL_REPORT_FAILED:
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

    onChangeTextstartDate = (text) => {
        const value = text.target.value;
        const errorstartDate =
            !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
        this.setState({ startDate: value, errorstartDate, Date: value });
    };

    onChangeTextendDate = (text) => {
        const value = text.target.value;
        const errorendDate =
            !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
        this.setState({ endDate: value, errorendDate, Date: value });
    };
    onClickScrach = () => {
        const { t } = this.props;
        const { endDate, startDate, token } = this.state
        if (endDate && startDate) {
            let data = 'REPORT_SELL' + '&' + startDate + '&' + endDate
            this.props.requestGetReport(data, token);
            this.setState({ loading: true, onGetInfo: true })
        } else {
            MySwal.fire({
                icon: "error",
                title: t("info"),
                text: t("InformationOncomplete"),
                footer: `<a href="">${t("YouContactDeveloper")}</a>`,
            });
        }
    }


    render() {
        const { t } = this.props;
        const { loading, startDate, errorstartDate, endDate, errorendDate, data } = this.state

        return (
            <div>
                {loading ? <LoadingComponet /> : null}
                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h3>{t('SalesReport')}</h3>
                                </div>
                                <div className="col-sm-6">
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-3">
                                    <div class="form-group">

                                        <input
                                            name="date"
                                            value={startDate}
                                            type="date"
                                            className={
                                                errorstartDate === undefined
                                                    ? "form-control"
                                                    : errorstartDate
                                                        ? "form-control is-invalid"
                                                        : "form-control is-valid"
                                            }
                                            onChange={(text) => this.onChangeTextstartDate(text)}
                                        />
                                        {errorstartDate ? (
                                            <p class="text-danger">{errorstartDate}</p>
                                        ) : null}
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div class="form-group">

                                        <input
                                            name="date"
                                            value={endDate}
                                            type="date"
                                            className={
                                                errorendDate === undefined
                                                    ? "form-control"
                                                    : errorendDate
                                                        ? "form-control is-invalid"
                                                        : "form-control is-valid"
                                            }
                                            onChange={(text) => this.onChangeTextendDate(text)}
                                        />
                                        {errorendDate ? (
                                            <p class="text-danger">{errorendDate}</p>
                                        ) : null}
                                    </div>

                                </div>
                                <div className="col-md-6">
                                    <div class="form-group">
                                        <button
                                            type="button"
                                            className="btn btn-info"
                                            onClick={() => this.onClickScrach()}
                                        >

                                            {t("search")}
                                        </button>
                                    </div>
                                </div>
                            </div>


                            {data.length > 0 ?
                                <div className="container-fluid" ref={el => (this.componentRef = el)}>
                                    <br></br>
                                    <p className="text-center">{t('textHeader')}</p>
                                    <p className="text-center">{t('textDetail')}</p>
                                    <h4 className="text-center">{t('SalesReport')}</h4>
                                    <h4 className="text-center">-----------------</h4>
                                    <p className="text-center"><Moment format='MMMM Do YYYY, h:mm:ss a'>{new Date()}</Moment></p>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <img
                                                src={logo}
                                                className="img-circle"
                                                style={{ width: 100, height: 50 }}
                                            />
                                            <h5>{t('companyaName')}</h5>
                                            <h6>{t('ContactInfo')}</h6>
                                            <h6>{t('location')}</h6>
                                        </div>

                                    </div>
                                    <div className="row">


                                        <div className="col-12">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h3 className="card-title">{t("Description")}</h3>
                                                    <div className="card-tools">
                                                        <div className="input-group input-group-sm">
                                                            <ReactToPrint
                                                                trigger={() => <button type="submit" className="btn btn-success btn-xs">
                                                                    <i className="fas fa-sync-alt" />
                                                                </button>}
                                                                content={() => this.componentRef}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card-body table-responsive p-0">
                                                    <table className="table table-hover table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th>{t("Level")}</th>
                                                                <th>{t("car_id")}</th>
                                                                <th>{t("oil_name")}</th>
                                                                <th>{t("qty")}</th>
                                                                <th>{t("price")}</th>
                                                                <th>{t("Total")}</th>
                                                                <th>{t("createdAt")}</th>
                                                                <th>{t("username")}</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {data.map((item, i) => (
                                                                <tr>
                                                                    <td>{i + 1}</td>
                                                                    <td>{item.sales_id}</td>
                                                                    <td>{item.oil_name}</td>
                                                                    <td>{formatNumber(item.Qty + '')}</td>
                                                                    <td>{formatNumber(item.Price + '')}</td>
                                                                    <td>{formatNumber(item.total + '')}</td>
                                                                    <td>
                                                                        <Moment format="YYYY/MM/DD">{item.createdAt}</Moment>
                                                                    </td>
                                                                    <td>{item.username}</td>
                                                                </tr>
                                                            ))
                                                            }
                                                        </tbody>
                                                    </table>
                                                    {
                                                        data.length > 0 ?
                                                            <div className="row">
                                                                <div className="col-3">
                                                                </div>
                                                                <div className="col-9">
                                                                    <div className="table-responsive">
                                                                        <table className="table">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <th>{t('qty')}</th>
                                                                                    <td>{formatNumber(data.reduce((a, v) => a = a + parseInt(v.Qty), 0) + "")}</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th>{t('Total')}</th>
                                                                                    <td>{formatNumber(data.reduce((a, v) => a = a + v.total, 0) + "")}</td>
                                                                                </tr>
                                                                            </tbody></table>
                                                                    </div>

                                                                </div>

                                                            </div> : null
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : <div className="row">
                                    <div className="col-md-4"></div>
                                    <div className="col-md-4">
                                        <h3 className="text-center">{t('Nodata')}</h3>

                                    </div>
                                    <div className="col-md-4"></div>
                                </div>}

                        </div>

                    </section>
                </div>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {

        dataResultReport: state.reportReducer.dataResultReport,
        actionType: state.reportReducer.actionType,
        responseCode: state.reportReducer.responseCode,

    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        requestGetReport: (data, token) => dispatch(requestGetReport(data, token)),
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTranslation()(SellSrceen));