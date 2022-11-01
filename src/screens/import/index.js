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

    GET_ALL_OIL_BY_ID_SUPPLIER_SUCCESS,
    GET_ALL_OIL_BY_ID_SUPPLIER_FAILED,

    GET_ALL_ORDER_SUCCESS,
    GET_ALL_ORDER_FAILED,

    GET_SEARCH_ORDER_SUCCESS,
    GET_SEARCH_ORDER_FAILED,

    INSRT_NEW_IMPORT_SUCCESS,
    INSRT_NEW_IMPORT_FAILED,

    GET_MAX_ID_IMPORT_SUCCESS,
    GET_MAX_ID_IMPORT_FAILED,

    INSRT_NEW_IMPORT_DETAIL_FAILED,
    INSRT_NEW_IMPORT_DETAIL_SUCCESS,

    GET_PRINT_IMPORT_SUCCESS,
    GET_PRINT_IMPORT_FAILED

} from "../../utils/commonType";
import { Modal, Form } from "react-bootstrap";
import { formatNumber } from '../../utils/Formater'
import { bodyInsertImportDetail, bodyInsertImport } from '../../api/bodyReq'
import {
    requestInsertOrderDetail, requestInsertOrder, requestGetAllOrder,
    requestGetSearchOrder
} from '../../actions/order'

import { requestInsertImport, requestGetMaxIdImport, requestInsertImportDetail, requestGetPrintImport } from '../../actions/importAction'
import Moment from 'react-moment';
import * as moment from 'moment'
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
            alertModelPrint: false,
            dataPrint: []
        };
    }
    componentDidMount() {
        const userInfo = Cookie.getJSON("userInfo") || null;
        let token = userInfo ? userInfo.token : null;
        let user_id = userInfo.auth[0].user_id;
        this.loaderOrder(token);
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
        let listData = [];
        const { onGetInfo, isCallGetOrder, onGetMaxImport, isCallGetAllDataSupplier, onGetInfoByIdSupplier,
            onInsertImport, token, onInsertImportDetail, listDataBuy, onCallGetOrderById, user_id, status, onPrintImport } = this.state;
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
        if (onInsertImport) {
            if (nextProps.dataResultImportNew) {
                switch (nextProps.actionTypeImportNew) {
                    case INSRT_NEW_IMPORT_SUCCESS:
                        switch (nextProps.responseCodeImport) {
                            case "00000":
                                this.props.requestGetMaxIdImport(token)
                                this.setState({ onInsertImport: false, onGetMaxImport: true, status: 'INSERT' });
                                break;
                            case nextProps.responseCodeImport:
                                MySwal.fire({
                                    icon: "error",
                                    title: t("info"),
                                    text: nextProps.message,
                                    footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                                });
                                this.setState({ onInsertImport: false, loading: false });
                                break;

                            default:
                                break;
                        }
                        break;
                    case INSRT_NEW_IMPORT_FAILED:
                        MySwal.fire({
                            icon: "error",
                            title: t("info"),
                            text: nextProps.message,
                            footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                        });
                        this.setState({ onInsertImport: false, loading: false });
                        break;

                    default:
                        break;
                }
            }
        }
        if (onGetMaxImport) {
            if (nextProps.dataResultMaxIdImport) {
                switch (nextProps.actionTypeMaxIdImport) {
                    case GET_MAX_ID_IMPORT_SUCCESS:
                        switch (nextProps.responseCodeImport) {
                            case "00000":
                                let maxId = nextProps.dataResultMaxIdImport.ImpID
                                if (status === 'INSERT') {
                                    for (let i = 0; i < listDataBuy.length; i++) {
                                        listData.push({
                                            "ImpID": maxId,
                                            "Qty": listDataBuy[i].qty_cus,
                                            "Price": listDataBuy[i].price,
                                            "oils_id": listDataBuy[i].oils_id,
                                            "user_id": user_id
                                        })
                                    }
                                    let data = bodyInsertImportDetail(listData)
                                    this.props.requestInsertImportDetail(data, token)
                                    this.setState({ onGetMaxImport: false, onInsertImportDetail: true });
                                } else if (status === 'PRINT') {
                                    console.log('----ok-PRINT ORDER----')
                                    this.props.requestGetPrintImport(maxId, token);
                                    this.setState({ onInsertImport: false, onPrintImport: true });
                                }

                                break;
                            case nextProps.responseCodeImport:
                                MySwal.fire({
                                    icon: "error",
                                    title: t("info"),
                                    text: nextProps.message,
                                    footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                                });
                                this.setState({ onGetMaxImport: false, loading: false });
                                break;

                            default:
                                break;
                        }
                        break;
                    case GET_MAX_ID_IMPORT_FAILED:
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
        if (onInsertImportDetail) {
            if (nextProps.dataResultImportDetailNew) {
                switch (nextProps.actionTypeImportDetailNew) {
                    case INSRT_NEW_IMPORT_DETAIL_SUCCESS:
                        switch (nextProps.responseCodeImport) {
                            case "00000":
                                MySwal.fire({
                                    icon: "success",
                                    title: t("info"),
                                    text: nextProps.message,
                                    footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        this.onPrintBill(token);
                                        // this.loaderOrder(token);
                                        // this.setState({listDataBuy: null})
                                    }
                                });
                                this.setState({ onInsertImportDetail: false, loading: false });
                                break;
                            case nextProps.responseCodeImport:
                                MySwal.fire({
                                    icon: "error",
                                    title: t("info"),
                                    text: nextProps.message,
                                    footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                                });
                                this.setState({ onInsertImportDetail: false, loading: false });
                                break;

                            default:
                                break;
                        }
                        break;
                    case INSRT_NEW_IMPORT_DETAIL_FAILED:
                        MySwal.fire({
                            icon: "error",
                            title: t("info"),
                            text: nextProps.message,
                            footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                        });
                        this.setState({ onInsertImportDetail: false, loading: false });
                        break;

                    default:
                        break;
                }
            }
        }
        if (isCallGetOrder) {
            if (nextProps.dataResultOrder) {
                switch (nextProps.actionTypeOrder) {
                    case GET_ALL_ORDER_SUCCESS:
                        this.setState({
                            isCallGetOrder: false,
                            dataOrder: nextProps.dataResultOrder,
                        });
                        break;
                    case GET_ALL_ORDER_FAILED:
                        this.setState({ isCallGetOrder: false });
                        break;

                    default:
                        break;
                }
            }
        }

        if (onCallGetOrderById) {
            if (nextProps.dataResultGetSearchOrderNew) {
                switch (nextProps.actionTypeGetSearchOrder) {
                    case GET_SEARCH_ORDER_SUCCESS:
                        this.setState({
                            onCallGetOrderById: false,
                            dataOrderSearch: nextProps.dataResultGetSearchOrderNew,
                            loading: false
                        });
                        break;
                    case GET_SEARCH_ORDER_FAILED:
                        this.setState({ onCallGetOrderById: false, loading: false });
                        break;

                    default:
                        break;
                }
            }
        }

        if (onPrintImport) {
            if (nextProps.dataResultGetPrintImport) {
                switch (nextProps.actionTypeImportPrint) {
                    case GET_PRINT_IMPORT_SUCCESS:
                        switch (nextProps.responseCodeImport) {
                            case "00000":
                                let datar = nextProps.dataResultGetPrintImport
                                console.log('------dcccc-----', datar)
                                this.setState({ onPrintImport: false, loading: false, alertModelPrint: true, dataPrint: datar });
                                break;
                            case nextProps.responseCodeImport:
                                MySwal.fire({
                                    icon: "error",
                                    title: t("info"),
                                    text: nextProps.message,
                                    footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                                });
                                this.setState({ onPrintImport: false, loading: false });
                                break;

                            default:
                                break;
                        }
                        break;
                    case GET_PRINT_IMPORT_FAILED:
                        MySwal.fire({
                            icon: "error",
                            title: t("info"),
                            text: nextProps.message,
                            footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                        });
                        this.setState({ onPrintImport: false, loading: false });
                        break;

                    default:
                        break;
                }
            }
        }



    }
    onPrintBill = (token) => {
        this.props.requestGetMaxIdImport(token)
        this.setState({ onGetMaxImport: true, status: 'PRINT' });
    }
    onClose = () => {
        this.setState({ showQty: false });
    };
    onCloseInsert = () => {
        this.setState({ modelInsert: false });
    }
    onConfrimInsert = () => {
        try {
            const { listDataBuy, user_id, token, id_sup, order_id } = this.state
            if (listDataBuy.length > 0 && user_id && token) {
                let b = formatNumber(listDataBuy.reduce((a, v) => a = a + parseInt(v.qty_cus), 0) + "");
                let a = formatNumber(listDataBuy.reduce((a, v) => a = a + v.total, 0) + "");
                let total = parseInt(a.replace(/,/g, ""));
                let qty = parseInt(b.replace(/,/g, ""));
                let ImpDate = moment(new Date()).format('YYYY-MM-DD')
                let ImpID = null
                let data = bodyInsertImport(ImpID, qty, total, ImpDate, order_id, id_sup);
                this.props.requestInsertImport(data, token);
                this.setState({ loading: true, onInsertImport: true, user_id, listDataBuy, modelInsert: false });
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

    onSelectOrder = (text) => {
        const { token } = this.state
        const data = text.target.value;
        const textSplit = data.split("|");
        const id_sup = textSplit[1];
        const value = textSplit[0];
        const order_id = textSplit[0];
        this.props.requestGetSearchOrder(value, token);
        this.setState({ loading: true, onCallGetOrderById: true, id_sup, order_id })
    }
    onCloseAlertBill = () => {
        this.setState({ alertModelPrint: false })
    }
    render() {
        const { t } = this.props;
        const { loading, data, showQty, qty, errorqty, listDataBuy, isDataBuy,
            modelInsert, service, errorservice, company, errorcompany, dataComboSupplier,
            id_sup, nameSup, dataOrder, dataOrderSearch, alertModelPrint, dataPrint } = this.state

        return (
            <div>
                {loading ? <LoadingComponet /> : null}
                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h3>{t('import')}</h3>
                                </div>
                                <div className="col-sm-6">
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-8">
                                    <div class="form-group">
                                        <label>{t("car_id")}</label>
                                        <Form.Control
                                            as="select"
                                            onChange={(text) => this.onSelectOrder(text)}
                                        >
                                            <option>-------ກະລຸນາເລືອກອໍເດີ-------</option>
                                            {dataOrder
                                                ? dataOrder.map((item, i) => (
                                                    <option value={item.orders_id + '|' + item.supplier_id}>
                                                        {t('orders_id')}: {item.orders_id} - {t('service')}: {item.service} - {t('company')}: {item.company} - {t('total')}: {formatNumber(item.total + '')}
                                                    </option>
                                                ))
                                                : null}
                                        </Form.Control>
                                    </div>
                                </div>
                                <div className="col-md-4"></div>
                            </div>
                            {
                                dataOrderSearch ?

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
                                                                dataOrderSearch ? dataOrderSearch.map((item, i) => (
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
                                                                            <button onClick={() => this.onAddCart(item)} className="btn btn-info btn-xs">{t('importConfrim')}</button>
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
                                            <label>ປ້ອນຈຳນວນຕົວຈິງທີ່ໄດ້ຮັບ / ລິດ</label>
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
                                {/* <div className="form-row">
                                    <div className="col-md-12">

                                       
                                    </div>
                                </div> */}
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
                                <Modal.Title>{t("billImportbySup")}</Modal.Title>
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
                            {/* tp.ImpID, tpd.Qty,tpd.Price,tp.ImpDate,ts.supplier_name,tod.orders_id,tod.company,tos.oil_name */}
                                <div className="form" ref={el => (this.componentRef = el)}>
                                    <div>
                                        <p className="text-center">{t('textHeader')}</p>
                                        <p className="text-center">{t('textDetail')}</p>
                                        <h4 className="text-center">{t('billImportbySup')}</h4>
                                        <h4 className="text-center">-----------------</h4>
                                        <p className="text-center"><Moment format='MMMM Do YYYY, h:mm:ss a'>{new Date()}</Moment></p>
                                      
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
                                            <p className="text">{t('address')}: {dataPrint.length > 0 ? dataPrint[0].ImpDate : null}</p>
                                            <p className="text">{t('date')}: {dataPrint.length > 0 ? dataPrint[0].company : null}</p>
                                          

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
        // dataResultSupplier: state.supplierReducer.dataResultSupplier,
        // actionTypeSupplier: state.supplierReducer.actionType,
        dataResultOilByIdSupplier: state.oilReducer.dataResultOilByIdSupplier,


        dataResultOrderNew: state.orderReducer.dataResultOrderNew,
        actionTypeOrderNew: state.orderReducer.actionType,

        dataResultMaxIdImport: state.importReducer.dataResultMaxIdImport,
        actionTypeMaxIdImport: state.importReducer.actionType,

        requestInsertImportDetail: state.orderReducer.requestInsertImportDetail,
        actionTypeImportDetailNew: state.orderReducer.actionType,

        dataResultOrder: state.orderReducer.dataResultOrder,
        actionTypeOrder: state.orderReducer.actionType,

        dataResultGetSearchOrderNew: state.orderReducer.dataResultGetSearchOrderNew,
        actionTypeGetSearchOrder: state.orderReducer.actionType,

        dataResultImportNew: state.importReducer.dataResultImportNew,
        actionTypeImportNew: state.importReducer.actionType,

        responseCodeImport: state.importReducer.responseCode,

        dataResultImportDetailNew: state.importReducer.dataResultImportDetailNew,
        actionTypeImportDetailNew: state.importReducer.actionType,

        dataResultGetPrintImport: state.importReducer.dataResultGetPrintImport,
        actionTypeImportPrint: state.importReducer.actionType,


    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        requestGetAllOil: (data) => dispatch(requestGetAllOil(data)),
        requestGetAllOilByIdSupplier: (data, token) => dispatch(requestGetAllOilByIdSupplier(data, token)),
        requestInsertOrder: (data, token) => dispatch(requestInsertOrder(data, token)),
        requestGetPrintImport: (data, token) => dispatch(requestGetPrintImport(data, token)),
        requestGetMaxIdImport: (data, token) => dispatch(requestGetMaxIdImport(data, token)),
        requestInsertOrderDetail: (data, token) => dispatch(requestInsertOrderDetail(data, token)),
        requestGetAllSupplier: (data) => dispatch(requestGetAllSupplier(data)),
        requestGetAllOrder: (data) => dispatch(requestGetAllOrder(data)),
        requestGetSearchOrder: (data, token) => dispatch(requestGetSearchOrder(data, token)),
        requestInsertImport: (data, token) => dispatch(requestInsertImport(data, token)),
        requestInsertImportDetail: (data, token) => dispatch(requestInsertImportDetail(data, token)),

    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTranslation()(SellSrceen));