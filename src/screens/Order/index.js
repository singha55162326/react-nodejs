import React, { Component } from 'react'
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import { LoadingComponet } from "../../components";
import {
    requestGetAllOil,
    requestGetAllOilByIdSupplier
} from "../../actions/oilAction";
import {
    requestGetAllSupplier
} from "../../actions/supplierAction";
import Cookie from "js-cookie";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
    GET_ALL_OIL_FAILED,
    GET_ALL_OIL_SUCCESS,
    GET_ALL_SUPPLIER_FAILED,
    GET_ALL_SUPPLIER_SUCCESS,
    GET_ALL_OIL_BY_ID_SUPPLIER_SUCCESS,
    GET_ALL_OIL_BY_ID_SUPPLIER_FAILED,

    INSRT_NEW_ORDER_FAILED,
    INSRT_NEW_ORDER_SUCCESS,

    GET_MAX_ID_ORDER_SUCCESS,
    GET_MAX_ID_ORDER_FAILED,

    INSRT_NEW_ORDER_DETAIL_SUCCESS,
    INSRT_NEW_ORDER_DETAIL_FAILED,

    GET_PRINT_ORDER_FAILED,
    GET_PRINT_ORDER_SUCCESS

} from "../../utils/commonType";
import { Modal } from "react-bootstrap";
import { formatNumber } from '../../utils/Formater'
import { bodyInsertOrder, bodyInsertOrderDetail } from '../../api/bodyReq'
import { requestInsertOrderDetail, requestInsertOrder, requestGetMaxIdOrder, requestGetPrintOrder } from '../../actions/order'
import Moment from 'react-moment';
import * as moment from 'moment'
import logo from '../../img/11_PTT.png';
import ReactToPrint from "react-to-print";

const MySwal = withReactContent(Swal);
let totalAmount = 0;
class SellSrceen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            showQty: false,
            listDataBuy: [],
            modelInsert: false,
            alertModelPrint: false,
            dataPrint: []
        };
    }
    componentDidMount() {
        const userInfo = Cookie.getJSON("userInfo") || null;
        let token = userInfo ? userInfo.token : null;
        let user_id = userInfo.auth[0].user_id;
        this.loader(token);
        this.setState({ token, user_id });

    }
    loader(token) {
        this.setState({ isCallGetAllDataSupplier: true });
        this.props.requestGetAllSupplier(token);
    }
    componentWillReceiveProps(nextProps) {
        const { t } = this.props;
        let listData = [];
        const { onGetInfo, onGetMaxOrder, isCallGetAllDataSupplier, onGetInfoByIdSupplier, onInsertOrder, token, onInsertOrderDetail, listDataBuy, status, onPrintOrderDetail } = this.state;
        if (onGetInfo) {
            if (nextProps.dataResultOil) {
                switch (nextProps.actionType) {
                    case GET_ALL_OIL_SUCCESS:
                        switch (nextProps.responseCode) {
                            case "00000":
                                let data = nextProps.dataResultOil;
                                this.setState({ onGetInfo: false, loading: false, data });
                                break;
                            case nextProps.responseCode:
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
                        break;
                    case GET_ALL_OIL_FAILED:
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
        if (isCallGetAllDataSupplier) {
            console.log("dataResultSupplier:", nextProps.dataResultSupplier);
            console.log("actionTypeSupplier:", nextProps.actionTypeSupplier);
            if (nextProps.dataResultSupplier) {
                switch (nextProps.actionTypeSupplier) {
                    case GET_ALL_SUPPLIER_SUCCESS:
                        this.setState({
                            isCallGetAllDataSupplier: false,
                            dataComboSupplier: nextProps.dataResultSupplier,
                        });
                        break;
                    case GET_ALL_SUPPLIER_FAILED:
                        this.setState({
                            isCallGetAllDataSupplier: false,
                            dataComboSupplier: null,
                        });
                        break;

                    default:
                        break;
                }
            }
        }
        if (onGetInfoByIdSupplier) {
            if (nextProps.dataResultOilByIdSupplier) {
                switch (nextProps.actionType) {
                    case GET_ALL_OIL_BY_ID_SUPPLIER_SUCCESS:
                        switch (nextProps.responseCode) {
                            case "00000":
                                let data = nextProps.dataResultOilByIdSupplier;
                                this.setState({ onGetInfoByIdSupplier: false, loading: false, data });
                                break;
                            case nextProps.responseCode:
                                MySwal.fire({
                                    icon: "error",
                                    title: t("info"),
                                    text: nextProps.message,
                                    footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                                });
                                this.setState({ onGetInfoByIdSupplier: false, loading: false });
                                break;

                            default:
                                break;
                        }
                        break;
                    case GET_ALL_OIL_BY_ID_SUPPLIER_FAILED:
                        MySwal.fire({
                            icon: "error",
                            title: t("info"),
                            text: nextProps.message,
                            footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                        });
                        this.setState({ onGetInfoByIdSupplier: false, loading: false });
                        break;

                    default:
                        break;
                }
            }
        }
        if (onInsertOrder) {
            if (nextProps.dataResultOrderNew) {
                switch (nextProps.actionTypeOrderNew) {
                    case INSRT_NEW_ORDER_SUCCESS:
                        switch (nextProps.responseCode) {
                            case "00000":
                                this.props.requestGetMaxIdOrder(token)
                                this.setState({ onInsertOrder: false, onGetMaxOrder: true, status: 'INSERT' });
                                break;
                            case nextProps.responseCode:
                                MySwal.fire({
                                    icon: "error",
                                    title: t("info"),
                                    text: nextProps.message,
                                    footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                                });
                                this.setState({ onInsertOrder: false, loading: false });
                                break;

                            default:
                                break;
                        }
                        break;
                    case INSRT_NEW_ORDER_FAILED:
                        MySwal.fire({
                            icon: "error",
                            title: t("info"),
                            text: nextProps.message,
                            footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                        });
                        this.setState({ onInsertOrder: false, loading: false });
                        break;

                    default:
                        break;
                }
            }
        }
        if (onGetMaxOrder) {
            if (nextProps.dataResultMaxIdOrder) {
                switch (nextProps.actionTypeMaxIdOrder) {
                    case GET_MAX_ID_ORDER_SUCCESS:
                        switch (nextProps.responseCode) {
                            case "00000":
                                console.log('nextProps.dataResultMaxIdOrder:', nextProps.dataResultMaxIdOrder)
                                let maxId = nextProps.dataResultMaxIdOrder.orders_id
                                if (status === 'INSERT') {
                                    console.log('Max:', maxId)
                                    for (let i = 0; i < listDataBuy.length; i++) {
                                        listData.push({
                                            "Qty": listDataBuy[i].qty_cus,
                                            "Price": listDataBuy[i].price,
                                            "oils_id": listDataBuy[i].oils_id,
                                            "orders_id": maxId
                                        })
                                    }
                                    let data = bodyInsertOrderDetail(listData)
                                    this.props.requestInsertOrderDetail(data, token)
                                    this.setState({ onGetMaxOrder: false, onInsertOrderDetail: true });
                                } else if (status === 'PRINT') {
                                    console.log('----ok-PRINT ORDER----')
                                    this.props.requestGetPrintOrder(maxId, token);
                                    this.setState({ onGetMaxOrder: false, onPrintOrderDetail: true });
                                }

                                break;
                            case nextProps.responseCode:
                                MySwal.fire({
                                    icon: "error",
                                    title: t("info"),
                                    text: nextProps.message,
                                    footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                                });
                                this.setState({ onGetMaxOrder: false, loading: false });
                                break;

                            default:
                                break;
                        }
                        break;
                    case GET_MAX_ID_ORDER_FAILED:
                        MySwal.fire({
                            icon: "error",
                            title: t("info"),
                            text: nextProps.message,
                            footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                        });
                        this.setState({ onGetMaxSell: false, loading: false });
                        break;

                    default:
                        break;
                }
            }
        }
        if (onInsertOrderDetail) {
            if (nextProps.dataResultOrderDetailNew) {
                switch (nextProps.actionTypeOrderDetailNew) {
                    case INSRT_NEW_ORDER_DETAIL_SUCCESS:
                        switch (nextProps.responseCode) {
                            case "00000":
                                MySwal.fire({
                                    icon: "success",
                                    title: t("info"),
                                    text: nextProps.message,
                                    footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        this.onPrintBill(token);
                                    }
                                });
                                this.setState({ onInsertOrderDetail: false, loading: false });
                                break;
                            case nextProps.responseCode:
                                MySwal.fire({
                                    icon: "error",
                                    title: t("info"),
                                    text: nextProps.message,
                                    footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                                });
                                this.setState({ onInsertOrderDetail: false, loading: false });
                                break;

                            default:
                                break;
                        }
                        break;
                    case INSRT_NEW_ORDER_DETAIL_FAILED:
                        MySwal.fire({
                            icon: "error",
                            title: t("info"),
                            text: nextProps.message,
                            footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                        });
                        this.setState({ onInsertOrderDetail: false, loading: false });
                        break;

                    default:
                        break;
                }
            }
        }
        if (onPrintOrderDetail) {
            if (nextProps.dataResultPrintOrder) {
                switch (nextProps.actionTypeOrderPrint) {
                    case GET_PRINT_ORDER_SUCCESS:
                        switch (nextProps.responseCode) {
                            case "00000":
                                let datar = nextProps.dataResultPrintOrder
                                console.log('------dcccc-----', datar)
                                this.setState({ onPrintOrderDetail: false, loading: false, alertModelPrint: true, dataPrint: datar });
                                break;
                            case nextProps.responseCode:
                                MySwal.fire({
                                    icon: "error",
                                    title: t("info"),
                                    text: nextProps.message,
                                    footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                                });
                                this.setState({ onPrintOrderDetail: false, loading: false });
                                break;

                            default:
                                break;
                        }
                        break;
                    case GET_PRINT_ORDER_FAILED:
                        MySwal.fire({
                            icon: "error",
                            title: t("info"),
                            text: nextProps.message,
                            footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                        });
                        this.setState({ onPrintOrderDetail: false, loading: false });
                        break;

                    default:
                        break;
                }
            }
        }



    }
    onPrintBill = (token) => {
        this.props.requestGetMaxIdOrder(token)
        this.setState({ onGetMaxOrder: true, status: 'PRINT' });
    }
    onClose = () => {
        this.setState({ showQty: false });
    };
    onCloseInsert = () => {
        this.setState({ modelInsert: false });
    }
    onConfrimInsert = () => {
        try {
            const { service, company, listDataBuy, user_id, token, id_sup } = this.state
            if (listDataBuy.length > 0 && company && service && user_id && token) {
                let b = formatNumber(listDataBuy.reduce((a, v) => a = a + parseInt(v.qty_cus), 0) + "");
                let a = formatNumber(listDataBuy.reduce((a, v) => a = a + v.total, 0) + "");
                let total = parseInt(a.replace(/,/g, ""));
                let qty = parseInt(b.replace(/,/g, ""));
                let status_order = 1
                let orders_id = null
                let date = moment(new Date()).format('YYYY-MM-DD')
                let data = bodyInsertOrder(orders_id, service, total, company, date, qty, user_id, status_order, id_sup);
                // console.log('---data----', data)
                this.props.requestInsertOrder(data, token);
                this.setState({ loading: true, onInsertOrder: true, user_id, listDataBuy, modelInsert: false });
            }

        } catch (error) {
            console.log('error:', error)
        }
    }
    onConfrim = () => {
        const { t } = this.props;
        const { qty, item } = this.state
        if (qty) {
            if (qty) {

                let arrayItem = [...this.state.listDataBuy, {
                    'id_bil': this.state.listDataBuy.length + 1,
                    'oils_id': item.oils_id,
                    'oil_name': item.oil_name,
                    'qty_cus': qty,
                    'price': item.price,
                    'total': parseInt(item.price) * parseInt(qty)

                }]
                if (arrayItem.length == 1) {
                    this.setState({
                        listDataBuy: [...this.state.listDataBuy, {
                            'id_bil': this.state.listDataBuy.length + 1,
                            'oils_id': item.oils_id,
                            'oil_name': item.oil_name,
                            'qty_cus': qty,
                            'price': item.price,
                            'total': parseInt(item.price) * parseInt(qty)
                        }]
                    })
                } else {
                    let newData = this.state.listDataBuy.map(value => {
                        if (value.oils_id === item.oils_id) {
                            var qty_cus = parseInt(value.qty_cus) + parseInt(qty)
                            var strOldAmount = value.price
                            let sumTotal = parseInt(strOldAmount) * parseInt(qty_cus)
                            value.qty_cus = parseInt(qty_cus)
                            value.total = parseInt(sumTotal)
                            return value;

                        }
                        return value;
                    });
                    let itm = this.state.listDataBuy.filter(data => data.oils_id === item.oils_id)
                    if (itm.length > 0) {
                        this.setState({ listDataBuy: newData })
                    } else {
                        this.setState({
                            listDataBuy: [...this.state.listDataBuy, {
                                'id_bil': this.state.listDataBuy.length + 1,
                                'oils_id': item.oils_id,
                                'oil_name': item.oil_name,
                                'qty_cus': qty,
                                'price': item.price,
                                'total': parseInt(item.price) * parseInt(qty)
                            }]
                        })
                    }
                }
                if (this.state.listDataBuy.length >= 0) {
                    this.setState({ isDataBuy: true, oils_id: null, qty_cus: null, oil_name: null })
                }

            } else {
                MySwal.fire({
                    icon: "error",
                    title: t("info"),
                    text: 'ຈຳນວນທີ່ຊື້ຄວາມນ້ອຍກວ່າຫລືເທົ່າກັບຈຳນວນນໍ້າມັນທີ່ມີຢູ່',
                    footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                });
            }
        } else {
            MySwal.fire({
                icon: "error",
                title: t("info"),
                text: 'ລະກຸນາປ້ອນຈຳນວນທີ່ຕ້ອງການຊື້',
                footer: `<a href="">${t("YouContactDeveloper")}</a>`,
            });
        }
    }
    onAddCart = (item) => {
        console.log('item:', item)
        this.setState({ showQty: true, item })
    }
    onChangeTextqty = (text) => {
        const value = text.target.value;
        const errorqty =
            !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
        this.setState({
            qty: value,
            errorqty
        });
    }
    onChangeTextservice = (text) => {
        const value = text.target.value;
        const errorservice =
            !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
        this.setState({
            service: value,
            errorservice
        });
    }
    onChangeTextcompany = (text) => {
        const value = text.target.value;
        const errorcompany =
            !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
        this.setState({
            company: value,
            errorcompany
        });
    }
    onDeleteOrder = (text) => {
        MySwal.fire({
            title: 'Do you want to save the changes?',
            confirmButtonText: 'Yes',
            showDenyButton: true,
            customClass: {
                actions: 'my-actions',
                cancelButton: 'order-1 right-gap',
                confirmButton: 'order-2',
            }
        }).then((result) => {
            if (result.isConfirmed) {
                this.onConfrimDelete(text)
            }
        })
    }
    onConfrimDelete = (text) => {
        const item = this.state.listDataBuy.filter(item => item.oils_id !== text)
        let Array = [];
        if (item != null) {
            let i = 0;
            item.forEach((value) => {
                i++
                Array.push({
                    'id_bil': i,
                    'oils_id': value.oils_id,
                    'oil_name': value.oil_name,
                    'qty_cus': value.qty_cus,
                    'price': value.price,
                    'total': value.price
                })
            })
            if (Array.length == 0) { this.setState({ isDataBuy: false }) }
            MySwal.fire('ລົບສຳເລັດ!', '', 'success')
            this.setState({
                listDataBuy: Array
            })
        }
    }
    onDeleteAll = () => {
        let Array = [];
        this.setState({
            listDataBuy: Array
        })
    }
    onSell = (listDataBuy) => {
        const { t } = this.props;
        if (listDataBuy.length > 0) {

            let count = listDataBuy.reduce((a, v) => a = a + parseInt(v.qty_cus), 0)
            let totalAmont = listDataBuy.reduce((a, v) => a = a + v.total, 0)
            this.setState({ listDataBuy, count, totalAmont, modelInsert: true })

        } else {
            MySwal.fire({
                icon: "error",
                title: t("info"),
                text: 'ລະກຸນາປ້ອນຈຳນວນທີ່ຕ້ອງການຊື້',
                footer: `<a href="">${t("YouContactDeveloper")}</a>`,
            });
        }
    }
    onSearch = (item) => {
        const { token } = this.state
        let id_sup = item.supplier_id
        let nameSup = item.supplier_name
        this.onDeleteAll()
        this.setState({ loading: true, onGetInfoByIdSupplier: true, id_sup, nameSup });
        this.props.requestGetAllOilByIdSupplier(id_sup, token);
    }
    onCloseAlertBill = () => {
        this.setState({ alertModelPrint: false })
    }
    render() {
        const { t } = this.props;
        const { loading, data, showQty, qty, errorqty, listDataBuy, isDataBuy,
            modelInsert, service, errorservice, company, errorcompany, dataComboSupplier, id_sup, nameSup, alertModelPrint, dataPrint } = this.state

        return (
            <div>
                {loading ? <LoadingComponet /> : null}
                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h3>{t('OrderSreen')}</h3>
                                </div>

                            </div>
                        </div>
                    </section>
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                {dataComboSupplier ? dataComboSupplier.map((item, i) => (
                                    <div className="col-12 col-sm-6 col-md-3">
                                        <div className="info-box">
                                            <span className="info-box-icon bg-info elevation-1"><i className="fas fa-cog" /></span>
                                            <button className="info-box-content btn" onClick={() => this.onSearch(item)}>
                                                <span className="info-box-text">{item.supplier_name}</span>
                                            </button>
                                        </div>
                                    </div>
                                )) : null}
                            </div>
                            {
                                id_sup ?

                                    <div className="row">
                                        <div className="col-8">
                                            <div className="card card-solid">
                                                <div className="card-header">
                                                    <h3 className="card-title">ລາຍການລຸ່ມນີ້ເປັນຂອງຜູ້ສະຫນອງ:{id_sup ? id_sup : null} - {nameSup ? nameSup : null}</h3>
                                                </div>
                                                <div className="card-body">
                                                    <table className="table table-sm">
                                                        <thead>
                                                            <tr>
                                                                <th>{t('Level')}</th>
                                                                <th>{t('product')}</th>
                                                                <th>{t('price')}</th>
                                                                <th>{t('qty')}</th>
                                                                <th>{t('option')}</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                data ? data.map((item, i) => (
                                                                    <tr>
                                                                        <td>{i + 1}</td>
                                                                        <td>{item.oil_name}</td>
                                                                        <td>
                                                                            <span className="badge bg-success">
                                                                                {formatNumber(item.price + "")}
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className="badge bg-danger">
                                                                                {formatNumber(item.qty + "")} / ລິດ
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <button onClick={() => this.onAddCart(item)} className="btn btn-info btn-xs">{t('order')}</button>
                                                                        </td>
                                                                    </tr>
                                                                )) : null
                                                            }

                                                        </tbody>
                                                    </table>
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h3 className="card-title">{t('OrderList')}</h3>
                                                    <div className="card-tools">
                                                        <div className="input-group input-group-sm" style={{ width: 150 }}>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-12 table-responsive">
                                                            <div className="table-responsive">
                                                                <table className="table table-striped">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>{t('Oil')}</th>
                                                                            <th>{t('qty')}</th>
                                                                            <th>{t('Amount')}</th>
                                                                            <th>{t('Total')}</th>
                                                                            <th>#</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {isDataBuy ?
                                                                            listDataBuy.map((item, i) => (
                                                                                <tr>
                                                                                    <td>{item.oil_name}</td>
                                                                                    <td>{formatNumber(item.qty_cus + "")}</td>
                                                                                    <td>{formatNumber(item.price + "")}</td>
                                                                                    <td>{formatNumber(item.total + "")}</td>
                                                                                    <td><button onClick={() => this.onDeleteOrder(item.oils_id)} className="badge bg-danger">X</button></td>

                                                                                </tr>
                                                                            )) : null}
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            {
                                                                listDataBuy.length > 0 ?
                                                                    <div className="row">
                                                                        <div className="col-3">
                                                                        </div>
                                                                        <div className="col-9">
                                                                            <div className="table-responsive">
                                                                                <table className="table">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <th>ລວມຈຳນວນ</th>
                                                                                            <td>{formatNumber(listDataBuy.reduce((a, v) => a = a + parseInt(v.qty_cus), 0) + "")}</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th>{t('Total')}</th>
                                                                                            <td>{formatNumber(listDataBuy.reduce((a, v) => a = a + v.total, 0) + "")}</td>
                                                                                        </tr>
                                                                                    </tbody></table>
                                                                            </div>

                                                                        </div>
                                                                        <div className="col-6">
                                                                        </div>
                                                                        <div className="col-6">
                                                                            <div className="table-responsive">
                                                                                <table className="table">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <button className="btn btn-success btn-xs" onClick={() => this.onSell(listDataBuy)}><i className="fas fa-cart-plus" />{t('Confirm')}</button>
                                                                                            </td>
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
                                    </div>
                                    : null
                            }
                        </div>


                        <Modal
                            className="modal"
                            show={showQty}
                            size="sm"
                            onHide={() => this.onClose()}
                        >
                            <Modal.Header>
                                <Modal.Title>{t("Confirm")}</Modal.Title>
                                <Modal.Title>
                                    <button
                                        type="button"
                                        className="close"
                                        onClick={() => this.onClose()}
                                    >
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="form-row">
                                    <div className="col-md-12">
                                        <div class="form-group">
                                            <label>ລະກຸນາປ້ອນຈຳນວນທີ່ຕ້ອງການຊື້ / ລິດ</label>
                                            <input
                                                name="qty"
                                                value={qty}
                                                type="number"
                                                className={
                                                    errorqty === undefined
                                                        ? "form-control"
                                                        : errorqty
                                                            ? "form-control is-invalid"
                                                            : "form-control is-valid"
                                                }
                                                placeholder={t("qty")}
                                                onChange={(text) => this.onChangeTextqty(text)}
                                            />
                                            {errorqty ? (
                                                <p class="text-danger">{errorqty}</p>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <button
                                    type="button"
                                    className="btn btn-default"
                                    onClick={() => this.onClose()}
                                >
                                    {t("clase")}
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => this.onConfrim()}
                                    className={
                                        !qty || errorqty
                                            ? "btn btn-secondary disabled"
                                            : "btn btn-primary"
                                    }
                                >
                                    {t("Confirm")}
                                </button>
                            </Modal.Footer>
                        </Modal>


                        <Modal
                            className="modal"
                            show={modelInsert}
                            size="sm"
                            onHide={() => this.onCloseInsert()}
                        >
                            <Modal.Header>
                                <Modal.Title>{t("Confirm")}</Modal.Title>
                                <Modal.Title>
                                    <button
                                        type="button"
                                        className="close"
                                        onClick={() => this.onCloseInsert()}
                                    >
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="form-row">
                                    <div className="col-md-12">

                                        <div class="form-group">
                                            <label>{t('service')}</label>
                                            <input
                                                name="service"
                                                value={service}
                                                type="text"
                                                className={
                                                    errorservice === undefined
                                                        ? "form-control"
                                                        : errorservice
                                                            ? "form-control is-invalid"
                                                            : "form-control is-valid"
                                                }
                                                placeholder={t("service")}
                                                onChange={(text) => this.onChangeTextservice(text)}
                                            />
                                            {errorservice ? (
                                                <p class="text-danger">{errorservice}</p>
                                            ) : null}
                                        </div>

                                        <div class="form-group">
                                            <label>{t('company')}</label>
                                            <input
                                                name="company"
                                                value={company}
                                                type="text"
                                                className={
                                                    errorcompany === undefined
                                                        ? "form-control"
                                                        : errorcompany
                                                            ? "form-control is-invalid"
                                                            : "form-control is-valid"
                                                }
                                                placeholder={t("company")}
                                                onChange={(text) => this.onChangeTextcompany(text)}
                                            />
                                            {errorcompany ? (
                                                <p class="text-danger">{errorcompany}</p>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <button
                                    type="button"
                                    className="btn btn-default"
                                    onClick={() => this.onCloseInsert()}
                                >
                                    {t("clase")}
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => this.onConfrimInsert()}
                                    className={
                                        !company || errorcompany || !service || errorservice
                                            ? "btn btn-secondary disabled"
                                            : "btn btn-primary"
                                    }
                                >
                                    {t("Confirm")}
                                </button>
                            </Modal.Footer>
                        </Modal>




                        <Modal
                            className="modal"
                            show={alertModelPrint}
                            size="lg"
                            onHide={() => this.onCloseAlertBill()}
                        >
                            <Modal.Header>
                                <Modal.Title>{t("billOrderbySup")}</Modal.Title>
                                <Modal.Title>
                                    <button
                                        type="button"
                                        className="close"
                                        onClick={() => this.onCloseAlertBill()}
                                    >
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="form" ref={el => (this.componentRef = el)}>
                                    <div>
                                        <p className="text-center">{t('textHeader')}</p>
                                        <p className="text-center">{t('textDetail')}</p>
                                        <h4 className="text-center">{t('billOrderbySup')}</h4>
                                        <h4 className="text-center">-----------------</h4>
                                        <p className="text-center"><Moment format='MMMM Do YYYY, h:mm:ss a'>{new Date()}</Moment></p>
                                        <p className="text-center">{dataPrint.length > 0 ? dataPrint[0].username : null}</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img
                                                src={logo}
                                                className="img-circle"
                                                style={{ width: 100, height: 50 }}
                                            />
                                            <p>{t('companyaName')}</p>
                                            <p>{t('ContactInfo')}</p>
                                            <p>{t('location')}</p>
                                        </div>

                                        <div className="col-md-6">
                                            <br />
                                            <br />
                                            <p className="text">{t('supplier_name')}: {dataPrint.length > 0 ? dataPrint[0].supplier_name : null}</p>
                                            <p className="text">{t('date')}: {dataPrint.length > 0 ? dataPrint[0].date : null}</p>
                                            <p className="text">{t('company')}: {dataPrint.length > 0 ? dataPrint[0].company : null}</p>
                                            <p className="text">{t('service')}: {dataPrint.length > 0 ? dataPrint[0].service : null}</p>
                                            
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-12 table-responsive">
                                            <div className="table-responsive">
                                                <table className="table table-hover table-bordered">

                                                    <thead>
                                                        <tr>
                                                            <th>{t('Oil')}</th>
                                                            <th>{t('qty')}</th>
                                                            <th>{t('Amount')}</th>
                                                            <th>{t('Total')}</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {dataPrint ?
                                                            dataPrint.map((item, i) => (
                                                                <tr>
                                                                    <td>{item.oil_name}</td>
                                                                    <td>{formatNumber(item.Qty + "")}</td>
                                                                    <td>{formatNumber(item.Price + "")}</td>
                                                                    <td>{formatNumber(item.Qty * item.Price + "")}</td>
                                                                </tr>
                                                            )) : null}
                                                    </tbody>
                                                </table>
                                            </div>
                                            {
                                                dataPrint.length > 0 ?
                                                    <div className="row">
                                                        <div className="col-3">
                                                        </div>
                                                        <div className="col-9">
                                                            <div className="table-responsive">
                                                                <table className="table">
                                                                    <tbody>
                                                                        <tr>
                                                                            <th>ລວມຈຳນວນ</th>
                                                                            <td>{formatNumber(dataPrint.reduce((a, v) => a = a + parseInt(v.Qty), 0) + "")}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>{t('Total')}</th>
                                                                            <td>{formatNumber(dataPrint.reduce((a, v) => a = a + v.Qty * v.Price, 0) + "")}</td>
                                                                        </tr>
                                                                    </tbody></table>
                                                            </div>
                                                        </div>
                                                    </div> : null
                                            }
                                        </div>
                                    </div>

                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <ReactToPrint
                                    trigger={() => <button type="submit" className="btn btn-success btn-xs">
                                        <i className="fas fa-sync-alt" />{t("print")}
                                    </button>}
                                    content={() => this.componentRef}
                                />

                            </Modal.Footer>
                        </Modal>





                    </section>
                </div>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        dataResultOil: state.oilReducer.dataResultOil,
        actionType: state.oilReducer.actionType,
        responseCode: state.oilReducer.responseCode,
        message: state.oilReducer.message,
        dataResultSupplier: state.supplierReducer.dataResultSupplier,
        actionTypeSupplier: state.supplierReducer.actionType,
        dataResultOilByIdSupplier: state.oilReducer.dataResultOilByIdSupplier,


        dataResultOrderNew: state.orderReducer.dataResultOrderNew,
        actionTypeOrderNew: state.orderReducer.actionType,

        dataResultMaxIdOrder: state.orderReducer.dataResultMaxIdOrder,
        actionTypeMaxIdOrder: state.orderReducer.actionType,

        dataResultOrderDetailNew: state.orderReducer.dataResultOrderDetailNew,
        actionTypeOrderDetailNew: state.orderReducer.actionType,

        dataResultPrintOrder: state.orderReducer.dataResultPrintOrder,
        actionTypeOrderPrint: state.orderReducer.actionType,



    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        requestGetAllOil: (data) => dispatch(requestGetAllOil(data)),
        requestGetAllOilByIdSupplier: (data, token) => dispatch(requestGetAllOilByIdSupplier(data, token)),
        requestInsertOrder: (data, token) => dispatch(requestInsertOrder(data, token)),
        requestGetMaxIdOrder: (data, token) => dispatch(requestGetMaxIdOrder(data, token)),
        requestInsertOrderDetail: (data, token) => dispatch(requestInsertOrderDetail(data, token)),
        requestGetPrintOrder: (data, token) => dispatch(requestGetPrintOrder(data, token)),
        requestGetAllSupplier: (data) => dispatch(requestGetAllSupplier(data)),

    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTranslation()(SellSrceen));