import React, { Component } from 'react'
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import { LoadingComponet } from "../../components";
import {
    requestGetAllOil,
    requestGetAllOilByIdSupplier
} from "../../actions/oilAction";
import {
    requestGetAllCustomers
} from "../../actions/customerAction";
import {
    requestGetAllSupplier
} from "../../actions/supplierAction";
import { requestInsertOrder, requestMaxIdSell, requestInsertSellDetail, requestGetPrintSell } from "../../actions/sellAction"
import { bodyInsertSell, bodyInsertSellDetail } from '../../api/bodyReq'
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
    GET_ALL_CUSTOMERS_FAILED,
    GET_ALL_CUSTOMERS_SUCCESS,
    INSRT_NEW_SELL_FAILED,
    INSRT_NEW_SELL_SUCCESS,

    GET_MAX_ID_SELL_SUCCESS,
    GET_MAX_ID_SELL_FAILED,

    INSRT_NEW_SELL_DETAIL_SUCCESS,
    INSRT_NEW_SELL_DETAIL_FAILED,

    GET_PRINT_SELL_SUCCESS,
    GET_PRINT_SELL_FAILED

} from "../../utils/commonType";
import { Modal, Form } from "react-bootstrap";
import { formatNumber } from '../../utils/Formater'
import Moment from 'react-moment';
import logo from '../../img/11_PTT.png';
import ReactToPrint from "react-to-print";

const MySwal = withReactContent(Swal);
class SellSrceen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            showQty: false,
            listDataBuy: [],
            modelInsert: false,
            dataPrint: [],
            alertModelPrint: false
        };
    }
    componentDidMount() {
        const userInfo = Cookie.getJSON("userInfo") || null;
        let token = userInfo ? userInfo.token : null;
        let user_id = userInfo.auth[0].user_id;
        this.loadData(token);
        this.setState({ token, user_id });
    }
    loadData = (token) => {
        this.setState({ onGetInfo: true, loading: true });
        this.props.requestGetAllOil(token);
    }
    componentWillReceiveProps(nextProps) {
        const { t } = this.props;
        const { onGetInfo, showQty, isCallGetAllDataSupplier, onGetInfoByIdSupplier, onGetInfoCustomer, onInsertSell,
            token, onGetMaxSell, cus_id, user_id, listDataBuy, onInsertSellDetail, status, onPrintSellDetail } = this.state;
        let listData = [];
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
        if (onGetInfoCustomer) {
            if (nextProps.dataResultCustomers) {
                switch (nextProps.actionTypeCustomers) {
                    case GET_ALL_CUSTOMERS_SUCCESS:
                        switch (nextProps.responseCode) {
                            case "00000":
                                let dataCustomer = nextProps.dataResultCustomers;
                                console.log('dataCustomer:', dataCustomer)
                                this.setState({ onGetInfoCustomer: false, loading: false, dataCustomer });
                                break;
                            case nextProps.responseCode:
                                MySwal.fire({
                                    icon: "error",
                                    title: t("info"),
                                    text: nextProps.message,
                                    footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                                });
                                this.setState({ onGetInfoCustomer: false, loading: false });
                                break;

                            default:
                                break;
                        }
                        break;
                    case GET_ALL_CUSTOMERS_FAILED:
                        MySwal.fire({
                            icon: "error",
                            title: t("info"),
                            text: nextProps.message,
                            footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                        });
                        this.setState({ onGetInfoCustomer: false, loading: false });
                        break;

                    default:
                        break;
                }
            }
        }
        if (onInsertSell) {
            if (nextProps.dataResultSellNew) {
                switch (nextProps.actionTypeSellNew) {
                    case INSRT_NEW_SELL_SUCCESS:
                        switch (nextProps.responseCode) {
                            case "00000":
                                this.props.requestMaxIdSell(token)
                                this.setState({ onInsertSell: false, onGetMaxSell: true, status: 'INSERT' });
                                break;
                            case nextProps.responseCode:
                                MySwal.fire({
                                    icon: "error",
                                    title: t("info"),
                                    text: nextProps.message,
                                    footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                                });
                                this.setState({ onInsertSell: false, loading: false });
                                break;

                            default:
                                break;
                        }
                        break;
                    case INSRT_NEW_SELL_FAILED:
                        MySwal.fire({
                            icon: "error",
                            title: t("info"),
                            text: nextProps.message,
                            footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                        });
                        this.setState({ onInsertSell: false, loading: false });
                        break;

                    default:
                        break;
                }
            }
        }
        if (onGetMaxSell) {
            if (nextProps.dataResultMaxIdSell) {
                switch (nextProps.actionTypeMaxIdSell) {
                    case GET_MAX_ID_SELL_SUCCESS:
                        switch (nextProps.responseCode) {
                            case "00000":

                                let maxId = nextProps.dataResultMaxIdSell.saleId
                                if (status === 'INSERT') {
                                    for (let i = 0; i < listDataBuy.length; i++) {
                                        listData.push({
                                            "sales_id": maxId,
                                            "Qty": listDataBuy[i].qty_cus,
                                            "Price": listDataBuy[i].price,
                                            "oil_id": listDataBuy[i].oils_id,
                                            "total": listDataBuy[i].total,
                                            "cus_id": cus_id,
                                            "user_id": user_id
                                        })
                                    }
                                    let data = bodyInsertSellDetail(listData)
                                    this.props.requestInsertSellDetail(data, token)
                                    this.setState({ onGetMaxSell: false, onInsertSellDetail: true });
                                } else if (status === 'PRINT') {
                                    console.log('----ok-PRINT----')
                                    this.props.requestGetPrintSell(maxId, token);
                                    this.setState({ onGetMaxSell: false, onPrintSellDetail: true });
                                }


                                break;
                            case nextProps.responseCode:
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
                        break;
                    case GET_MAX_ID_SELL_FAILED:
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
        if (onInsertSellDetail) {
            if (nextProps.dataResultSellDetailNew) {
                switch (nextProps.actionTypeSellDetailNew) {
                    case INSRT_NEW_SELL_DETAIL_SUCCESS:
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
                                this.setState({ onInsertSellDetail: false, loading: false });
                                break;
                            case nextProps.responseCode:
                                MySwal.fire({
                                    icon: "error",
                                    title: t("info"),
                                    text: nextProps.message,
                                    footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                                });
                                this.setState({ onInsertSellDetail: false, loading: false });
                                break;

                            default:
                                break;
                        }
                        break;
                    case INSRT_NEW_SELL_DETAIL_FAILED:
                        MySwal.fire({
                            icon: "error",
                            title: t("info"),
                            text: nextProps.message,
                            footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                        });
                        this.setState({ onInsertSellDetail: false, loading: false });
                        break;

                    default:
                        break;
                }
            }
        }
        if (onPrintSellDetail) {
            if (nextProps.dataResultGetPrintSell) {
                switch (nextProps.actionTypeGetPrintSell) {
                    case GET_PRINT_SELL_SUCCESS:
                        switch (nextProps.responseCode) {
                            case "00000":
                                let datar = nextProps.dataResultGetPrintSell
                                console.log('------dddd-----', datar)
                                this.setState({ onPrintSellDetail: false, loading: false, alertModelPrint: true, dataPrint: datar });
                                break;
                            case nextProps.responseCode:
                                MySwal.fire({
                                    icon: "error",
                                    title: t("info"),
                                    text: nextProps.message,
                                    footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                                });
                                this.setState({ onPrintSellDetail: false, loading: false });
                                break;

                            default:
                                break;
                        }
                        break;
                    case GET_PRINT_SELL_FAILED:
                        MySwal.fire({
                            icon: "error",
                            title: t("info"),
                            text: nextProps.message,
                            footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                        });
                        this.setState({ onPrintSellDetail: false, loading: false });
                        break;

                    default:
                        break;
                }
            }
        }

    }
    onPrintBill = (token) => {
        this.props.requestMaxIdSell(token)
        this.setState({ onGetMaxSell: true, status: 'PRINT' });
    }
    onClose = () => {
        this.setState({ showQty: false });
    };
    onCloseInsert = () => {
        this.setState({ modelInsert: false });
    }
    onConfrimInsert = () => {
        try {
            const { cus_id, listDataBuy, user_id, token } = this.state
            if (listDataBuy.length > 0 && cus_id && user_id && token) {
                let b = formatNumber(listDataBuy.reduce((a, v) => a = a + parseInt(v.qty_cus), 0) + "");
                let a = formatNumber(listDataBuy.reduce((a, v) => a = a + v.total, 0) + "");
                let total = parseInt(a.replace(/,/g, ""));
                let qty = parseInt(b.replace(/,/g, ""))

                let status_sell = 1
                let sales_id = null
                let data = bodyInsertSell(sales_id, qty, total, status_sell, cus_id, user_id);
                this.props.requestInsertOrder(data, token)
                this.setState({ loading: true, onInsertSell: true, cus_id, user_id, listDataBuy, modelInsert: false });
            }
        } catch (error) {
            console.log('error:', error)
        }
    }
    onConfrim = () => {
        const { t } = this.props;
        const { qty, item } = this.state
        if (qty && qty > 0) {
            let qtyOil = item.qty
            if (qtyOil >= qty) {

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
                    text: 'ຈຳນວນທີ່ຊື້ຄວນໜ້ອຍກວ່າຫລືເທົ່າກັບຈຳນວນນໍ້າມັນທີ່ມີຢູ່',
                    footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                });
            }
        } else {
            MySwal.fire({
                icon: "error",
                title: t("info"),
                text: 'ກະລຸນາປ້ອນຈຳນວນທີ່ຕ້ອງການຊື້',
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

    onSelectCustomer = (text) => {
        const value = text.target.value;
        this.setState({
            cus_id: value
        });
    };

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
            this.callGetCustomerInfo()
            let count = listDataBuy.reduce((a, v) => a = a + parseInt(v.qty_cus), 0)
            let totalAmont = listDataBuy.reduce((a, v) => a = a + v.total, 0)
            this.setState({ listDataBuy, count, totalAmont, modelInsert: true })

        } else {
            MySwal.fire({
                icon: "error",
                title: t("info"),
                text: 'ກະລຸນາປ້ອນຈຳນວນທີ່ຕ້ອງການຊື້',
                footer: `<a href="">${t("YouContactDeveloper")}</a>`,
            });
        }
    }
    onSearch = (item) => {
        // const { token } = this.state
        // let id_sup = item.supplier_id
        // let nameSup = item.supplier_name
        // this.onDeleteAll()
        // this.setState({ loading: true, onGetInfoByIdSupplier: true, id_sup, nameSup });
        // this.props.requestGetAllOilByIdSupplier(id_sup, token);
    }
    callGetCustomerInfo() {
        const { token } = this.state
        this.setState({ loading: true, onGetInfoCustomer: true });
        this.props.requestGetAllCustomers(token);
    }
    onClickBill = () => {
        this.setState({ alertModelPrint: false })
    }
    onCloseAlertBill = () => {
        this.setState({ alertModelPrint: false })
    }
    render() {
        const { t } = this.props;
        const { loading, data, showQty, qty, errorqty, listDataBuy, isDataBuy,
            modelInsert, dataComboSupplier, id_sup, nameSup, dataCustomer, cus_id, alertModelPrint, dataPrint } = this.state

        return (
            <div>
                {loading ? <LoadingComponet /> : null}
                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h3>{t('sell')}</h3>
                                </div>
                                <div className="col-sm-6">
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="content">
                        <div className="container-fluid">

                            <div className="row">
                                <div className="col-8">
                                    <div className="card card-solid">
                                        <div className="card-header">
                                            <h3 className="card-title">ລາຍການ</h3>
                                        </div>
                                        <div className="card-body pb-0">
                                            <div className="row">
                                                {
                                                    data ? data.map((item, i) => (
                                                        <div className="col-12 col-sm-6 col-md-3 d-flex align-items-stretch flex-column">
                                                            <div className="card d-flex flex-fill">
                                                                <div className="card-header text-center border-bottom-0" />
                                                                <div className="card-body pt-0">
                                                                    <div className="row">
                                                                        <div className="col-12 text-center">

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="card-header text-center border-bottom-0">
                                                                    <h6>{item.oil_name}</h6>
                                                                    <h6 className="text-danger">{formatNumber(item.price + "")}</h6>
                                                                    <a href="#" className="btn btn-xs bg-teal">
                                                                        {formatNumber(item.qty + "")} / ລິດ </a>
                                                                </div>
                                                                <div className="card-footer">
                                                                    <div className="text-center">
                                                                        {item.qty > 0 ?
                                                                            <button onClick={() => this.onAddCart(item)} className="btn btn-success btn-sm btn-flat"><i className="fas fa-cart-plus fa-lg mr-2" /> ເພີ່ມ</button>
                                                                            : <h6 className="text-danger">ນໍ້າມັນຫມົດແລ້ວ</h6>}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )) : null
                                                }
                                            </div>
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
                                                                                        <button className="btn btn-success btn-xs" onClick={() => this.onSell(listDataBuy)}><i className="fas fa-cart-plus" /> ຢືນຢັນການຂາຍ</button>
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
                                            <label>ກະລຸນາປ້ອນຈຳນວນທີ່ຕ້ອງການຊື້ / ລິດ</label>
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
                                    ເພີ່ມ
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
                                            <label>{t("car_id")}</label>
                                            <Form.Control
                                                as="select"
                                                onChange={(text) => this.onSelectCustomer(text)}
                                            >
                                                <option></option>
                                                {dataCustomer
                                                    ? dataCustomer.map((item, i) => (
                                                        item.status == 1 ? <option value={item.cus_id}>
                                                            {item.cus_id} - {item.cus_name}
                                                        </option> : null

                                                    ))
                                                    : null}
                                            </Form.Control>
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
                                        !cus_id
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
                                <Modal.Title>{t("Description")}</Modal.Title>
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
                                        <h4 className="text-center">{t('Bill')}</h4>
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
                                            <p className="text">{t('cus_name')}: { dataPrint.length > 0 ?  dataPrint[0].cus_name: null}</p>
                                            <p className="text">{t('address')}: {dataPrint.length > 0 ?  dataPrint[0].address:  null}</p>
                                            <p className="text">{t('phone')}: {dataPrint.length > 0 ?  dataPrint[0].phone: null}</p>
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
        dataResultCustomers: state.customerReducer.dataResultCustomers,
        actionTypeCustomers: state.customerReducer.actionType,

        dataResultSellNew: state.sellReducer.dataResultSellNew,
        actionTypeSellNew: state.sellReducer.actionType,

        dataResultMaxIdSell: state.sellReducer.dataResultMaxIdSell,
        actionTypeMaxIdSell: state.sellReducer.actionType,

        dataResultSellDetailNew: state.sellReducer.dataResultSellDetailNew,
        actionTypeSellDetailNew: state.sellReducer.actionType,

        dataResultGetPrintSell: state.sellReducer.dataResultGetPrintSell,
        actionTypeGetPrintSell: state.sellReducer.actionType,

    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        requestGetAllCustomers: (data) => dispatch(requestGetAllCustomers(data)),
        requestGetAllOil: (data) => dispatch(requestGetAllOil(data)),
        requestMaxIdSell: (data) => dispatch(requestMaxIdSell(data)),
        requestInsertSellDetail: (data, token) => dispatch(requestInsertSellDetail(data, token)),
        requestGetPrintSell: (data, token) => dispatch(requestGetPrintSell(data, token)),
        requestInsertOrder: (data, token) => dispatch(requestInsertOrder(data, token)),
        requestGetAllOilByIdSupplier: (data, token) => dispatch(requestGetAllOilByIdSupplier(data, token)),
        requestGetAllSupplier: (data) => dispatch(requestGetAllSupplier(data)),

    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTranslation()(SellSrceen));