import React, { Component } from "react";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import {
  bodyDeleteDocument,
  requestBodyCreateNewDocument,
  bodyUpdateDocument,
} from "../../api/bodyReq";
import { Modal, Form } from "react-bootstrap";
import {
  requestGetAllDocument,
  requestDeleteDocument,
  requestInsertDocument,
  requestUpdateDocument,
  requestGetByIdDocument
} from "../../actions/documentAction";
import { requestGetAllOrder } from "../../actions/order";
import {
  GET_ALL_DOCUMENT_FAILED,
  GET_ALL_DOCUMENT_SUCCESS,
  INSRT_NEW_DOCUMENT_SUCCESS,
  INSRT_NEW_DOCUMENT_FAILED,
  DELETE_BY_ID_DOCUMENT_FAILED,
  DELETE_BY_ID_DOCUMENT_SUCCESS,
  UPDATE_DOCUMENT_FAILED,
  UPDATE_DOCUMENT_SUCCESS,
  GET_ALL_ORDER_SUCCESS,
  GET_ALL_ORDER_FAILED,
  GET_ALL_CUSTOMERS_FAILED,
  GET_ALL_CUSTOMERS_SUCCESS,
  GET_ALL_EMPLOYEE_SUCCESS,
  GET_ALL_EMPLOYEE_FAILED,
  GET_ALL_SELL_FAILED,
  GET_ALL_SELL_SUCCESS,
  GET_ALL_DOCUMENT_BY_ID_SUCCESS,
  GET_ALL_DOCUMENT_BY_ID_FAILED
} from "../../utils/commonType";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Cookie from "js-cookie";
import { LoadingComponet } from "../../components";

import {
  requestGetAllCustomers
} from "../../actions/customerAction";
import {
  requestGetAllEmployee
} from "../../actions/employeeAction";

import { requestGetAllSell } from '../../actions/sellAction'

import { formatNumber } from '../../utils/Formater'
import Moment from 'react-moment';
import logo from '../../img/11_PTT.png';
import ReactToPrint from "react-to-print";

const MySwal = withReactContent(Swal);
class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showDelete: false,
      loading: false,
      showForm: false,
      status: false,
      alertModelPrint: false,
      dataPrint: []
    };
  }
  componentDidMount() {
    const userInfo = Cookie.getJSON("userInfo") || null;
    let token = userInfo ? userInfo.token : null;
    let user_id = userInfo.auth[0].user_id;
    this.loadData(token);
    this.callCustomer(token)
    this.callEmployee(token)
    this.callSell(token)
    this.setState({ token, user_id });
  }
  loadData(token) {
    this.setState({ loading: true, onGetInfo: true });
    this.props.requestGetAllDocument(token);
  }
  callCustomer = (token) => {
    this.setState({ loading: true, onGetInfoCustomer: true });
    this.props.requestGetAllCustomers(token);
  }
  callEmployee = (token) => {
    this.setState({ loading: true, onGetInfoEmployee: true });
    this.props.requestGetAllEmployee(token);
  }
  onAddNewInformation = () => {
    alert("ok");
  };

  callSell = (token) => {
    this.setState({ loading: true, onGetInfoSell: true });
    this.props.requestGetAllSell(token);
  }


  onRefresh() { }
  componentWillReceiveProps(nextProps) {
    const { t } = this.props;
    const {
      onGetInfo,
      isInsertDocument,
      isDeleteDocumentById,
      onCallUpdateDocument,
      token,
      isCallGetOrder,
      onGetInfoCustomer,
      onGetInfoEmployee,
      onGetInfoSell,
      onGetBillDocByID
    } = this.state;
    console.log("nextProps car:", nextProps);
    if (onGetInfo) {
      if (nextProps.dataResultDocument) {
        switch (nextProps.actionType) {
          case GET_ALL_DOCUMENT_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                let data = nextProps.dataResultDocument;
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
          case GET_ALL_DOCUMENT_FAILED:
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
    if (isInsertDocument) {
      if (nextProps.dataResultDocumentNew) {
        switch (nextProps.actionType) {
          case INSRT_NEW_DOCUMENT_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                MySwal.fire({
                  icon: "success",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = "/FuelDeliveryDocument";
                  }
                });

                this.setState({
                  isInsertDocument: false,
                  loading: false,
                  showForm: false,
                });
                break;
              case nextProps.responseCode:
                MySwal.fire({
                  icon: "error",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                });
                this.setState({
                  isInsertDocument: false,
                  loading: false,
                  showForm: false,
                });
                break;

              default:
                break;
            }
            break;
            break;
          case INSRT_NEW_DOCUMENT_FAILED:
            MySwal.fire({
              icon: "error",
              title: t("info"),
              text: nextProps.message,
              footer: `<a href="">${t("YouContactDeveloper")}</a>`,
            });
            this.setState({
              isInsertDocument: false,
              loading: false,
              showForm: false,
            });
            break;

          default:
            break;
        }
      }
    }
    if (isDeleteDocumentById) {
      if (nextProps.dataResultDocumentDelete) {
        switch (nextProps.actionType) {
          case DELETE_BY_ID_DOCUMENT_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                MySwal.fire({
                  icon: "success",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = "/FuelDeliveryDocument";
                  }
                });

                this.setState({
                  isDeleteDocumentById: false,
                  loading: false,
                  showDelete: false,
                });
                break;
              case nextProps.responseCode:
                MySwal.fire({
                  icon: "error",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                });
                this.setState({
                  isDeleteDocumentById: false,
                  loading: false,
                  showDelete: false,
                });
                break;

              default:
                break;
            }
            break;
            break;
          case DELETE_BY_ID_DOCUMENT_FAILED:
            MySwal.fire({
              icon: "error",
              title: t("info"),
              text: nextProps.message,
              footer: `<a href="">${t("YouContactDeveloper")}</a>`,
            });
            this.setState({
              isDeleteDocumentById: false,
              loading: false,
              showDelete: false,
            });
            break;

          default:
            break;
        }
      }
    }
    if (onCallUpdateDocument) {
      if (nextProps.dataResultDocumentUpdate) {
        switch (nextProps.actionType) {
          case UPDATE_DOCUMENT_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                MySwal.fire({
                  icon: "success",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = "/FuelDeliveryDocument";
                  }
                });

                this.setState({
                  onCallUpdateDocument: false,
                  loading: false,
                  showForm: false,
                });
                break;
              case nextProps.responseCode:
                MySwal.fire({
                  icon: "error",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                });
                this.setState({
                  onCallUpdateDocument: false,
                  loading: false,
                  showForm: false,
                });
                break;

              default:
                break;
            }
            break;
          case UPDATE_DOCUMENT_FAILED:
            MySwal.fire({
              icon: "error",
              title: t("info"),
              text: nextProps.message,
              footer: `<a href="">${t("YouContactDeveloper")}</a>`,
            });
            this.setState({
              onCallUpdateDocument: false,
              loading: false,
              showForm: false,
            });
            break;

          default:
            break;
        }
      }
    }
    if (isCallGetOrder) {
      console.log("dataResultOrder:", nextProps.dataResultOrder);
      console.log("nextProps.actionTypeOrder:", nextProps.actionTypeOrder);
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

    if (onGetInfoCustomer) {
      if (nextProps.dataResultCustomers) {
        switch (nextProps.actionTypeCustomer) {
          case GET_ALL_CUSTOMERS_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                let dataCustomer = nextProps.dataResultCustomers;
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

    if (onGetInfoEmployee) {
      if (nextProps.dataResultEmployee) {
        switch (nextProps.actionTypeEmployee) {
          case GET_ALL_EMPLOYEE_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                let dataEmp = nextProps.dataResultEmployee;
                this.setState({ onGetInfoEmployee: false, loading: false, dataEmp });
                break;
              case nextProps.responseCode:
                MySwal.fire({
                  icon: "error",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                });
                this.setState({ onGetInfoEmployee: false, loading: false });
                break;

              default:
                break;
            }
            break;
          case GET_ALL_EMPLOYEE_FAILED:
            MySwal.fire({
              icon: "error",
              title: t("info"),
              text: nextProps.message,
              footer: `<a href="">${t("YouContactDeveloper")}</a>`,
            });
            this.setState({ onGetInfoEmployee: false, loading: false });
            break;

          default:
            break;
        }
      }
    }

    if (onGetInfoSell) {
      if (nextProps.dataResultGetSell) {
        switch (nextProps.actionTypeGetSell) {
          case GET_ALL_SELL_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                let dataSell = nextProps.dataResultGetSell;
                this.setState({ onGetInfoSell: false, loading: false, dataSell });
                break;
              case nextProps.responseCode:
                MySwal.fire({
                  icon: "error",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                });
                this.setState({ onGetInfoSell: false, loading: false });
                break;

              default:
                break;
            }
            break;
          case GET_ALL_SELL_FAILED:
            MySwal.fire({
              icon: "error",
              title: t("info"),
              text: nextProps.message,
              footer: `<a href="">${t("YouContactDeveloper")}</a>`,
            });
            this.setState({ onGetInfoSell: false, loading: false });
            break;

          default:
            break;
        }
      }
    }
    if (onGetBillDocByID) {
      if (nextProps.dataResultDocumentById) {
        switch (nextProps.dataResultDocumentByIdActionType) {
          case GET_ALL_DOCUMENT_BY_ID_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                let dataView = nextProps.dataResultDocumentById;
                console.log('dataView:', dataView)
                this.setState({ onGetBillDocByID: false, loading: false, dataPrint: dataView, alertModelPrint: true });
                break;
              case nextProps.responseCode:
                MySwal.fire({
                  icon: "error",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                });
                this.setState({ onGetBillDocByID: false, loading: false });
                break;

              default:
                break;
            }
            break;
          case GET_ALL_DOCUMENT_BY_ID_FAILED:
            MySwal.fire({
              icon: "error",
              title: t("info"),
              text: nextProps.message,
              footer: `<a href="">${t("YouContactDeveloper")}</a>`,
            });
            this.setState({ onGetInfoSell: false, loading: false });
            break;

          default:
            break;
        }
      }
    }
  }

  onPressView = (item) => {
    const { t } = this.props;
    const { token } = this.state
    if (item) {
      let id_Documents = item.id_documents;
      console.log('id_Documents:', id_Documents)
      this.props.requestGetByIdDocument(id_Documents, token)
      this.setState({ loading: true, onGetBillDocByID: true })
    } else {
      MySwal.fire({
        icon: "error",
        title: t("info"),
        text: t("InformationOncomplete"),
        footer: `<a href="">${t("YouContactDeveloper")}</a>`,
      });
    }
  }

  onPressEdit = (item) => {
    const { t } = this.props;
    if (item) {
      let id_Documents = item.id_documents;
      let Address = item.address;
      let Orders_Id = item.orders_id;
      let Contact = item.contact;
      let Traid = item.traid;
      let Date = item.date;
      let Company = item.company;
      let Dimention = item.dimention;
      let Phone = item.phone;
      let Service = item.service;
      let Price = item.price;
      let User_id = item.user_id;
      let Username = item.username;

      this.setState({
        id_Documents,
        Address,
        Orders_Id,
        Contact,
        Traid,
        Date,
        Company,
        Dimention,
        Phone,
        Service,
        Price,
        User_id,
        Username,
        status: true,
        showForm: true,
      });
    } else {
      MySwal.fire({
        icon: "error",
        title: t("info"),
        text: t("InformationOncomplete"),
        footer: `<a href="">${t("YouContactDeveloper")}</a>`,
      });
    }
  };
  onChangeTextaddress = (text) => {
    const value = text.target.value;
    const erroraddress =
      !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
    this.setState({ address: value, erroraddress, Address: value });
  };
  onChangeTextorders_id = (text) => {
    const value = text.target.value;
    const textSplit = value.split("|");
    const orders_id = textSplit[0];
    const total = textSplit[1];
    const errororders_id =
      !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
    this.setState({ orders_id: orders_id, errororders_id, Orders_Id: orders_id, price: total, Price: total });
  };

  onChangeTextcontact = (text) => {
    const value = text.target.value;
    const errorcontact =
      !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
    this.setState({ contact: value, errorcontact, Contact: value });
  };
  onChangeTexttraid = (text) => {
    const value = text.target.value;
    const errortraid =
      !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
    this.setState({ traid: value, errortraid, Traid: value });
  };
  onChangeTextdate = (text) => {
    const value = text.target.value;
    const errordate =
      !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
    this.setState({ date: value, errordate, Date: value });
  };
  onChangeTextcompany = (text) => {
    const value = text.target.value;
    const textSplit = value.split("|");
    const cus_id = 'ບໍລິສັດ PTT Public Company Limited';
    const address = textSplit[1];
    const contact = textSplit[2];
    const phone = textSplit[3];
    const errorcompany =
      !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
    this.setState({
      company: cus_id, errorcompany, Company: cus_id, phone: phone,
      Phone: phone, contact: contact, Contact: contact, address: address, Address: address
    });
  };
  onChangeTextdimention = (text) => {
    const value = text.target.value;
    const errordimention =
      !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
    this.setState({ dimention: value, errordimention, Dimention: value });
  };
  onChangeTextphone = (text) => {
    const value = text.target.value;
    const errorphone =
      !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
    this.setState({ phone: value, errorphone, Phone: value });
  };
  onChangeTextservice = (text) => {
    const value = text.target.value;
    const errorservice =
      !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
    this.setState({ service: value, errorservice, Service: value });
  };
  onChangeTextprice = (text) => {
    const value = text.target.value;
    const errorprice =
      !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
    this.setState({ price: value, errorprice, Price: value });
  };
  //onChangeTextdate
  onChangeTextdate = (text) => {
    const value = text.target.value;
    const errordate =
      !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
    this.setState({ date: value, errordate, Date: value });
  };
  onCloseModalForm = () => {
    const { t } = this.props;
    const {
      id_documents,
      address,
      orders_id,
      contact,
      traid,
      date,
      company,
      dimention,
      phone,
      service,
      price,
      user_id,
      token,
    } = this.state;
    if (address && orders_id && contact && traid && date && company && dimention && phone && service && price) {
      this.setState({ loading: true, isInsertDocument: true });
      let data = requestBodyCreateNewDocument(
        id_documents,
        address,
        orders_id,
        contact,
        traid,
        date,
        company,
        dimention,
        phone,
        service,
        price,
        user_id
      );
      console.log("data insert:", data);
      this.props.requestInsertDocument(data, token);
    } else {
      MySwal.fire({
        icon: "error",
        title: t("info"),
        text: t("InformationOncomplete"),
        footer: `<a href="">${t("YouContactDeveloper")}</a>`,
      });
    }
  };
  onCloseModalFormUpdate = () => {
    const { t } = this.props;
    const {
      id_Documents,
      Address,
      Orders_Id,
      Contact,
      Traid,
      Date,
      company,
      Dimention,
      Phone,
      Service,
      Price,
      user_id,
      token,
    } = this.state;
    if (
      id_Documents &&
      Address &&
      Orders_Id &&
      Contact &&
      Traid &&
      Date &&
      company &&
      Dimention &&
      Phone &&
      Service &&
      Price &&
      user_id
    ) {
      let data = bodyUpdateDocument(
        Address,
        Orders_Id,
        Contact,
        Traid,
        Date,
        company,
        Dimention,
        Phone,
        Service,
        Price,
        user_id
      );
      console.log("data update:", data);
      this.props.requestUpdateDocument(data, token);
      this.setState({ loading: true, onCallUpdateDocument: true });
    } else {
      MySwal.fire({
        icon: "error",
        title: t("info"),
        text: t("InformationOncomplete"),
        footer: `<a href="">${t("YouContactDeveloper")}</a>`,
      });
    }
  };
  onPressDelete = (item) => {
    this.setState({
      showDelete: true,
      id_documents: item.id_documents,
    });
  };
  onCloseDelete = () => {
    this.setState({ showDelete: false });
  };
  onCloseModalFormInsert = () => {
    this.setState({ showForm: false });
  };
  onAddNew = () => {
    const { token } = this.state;
    this.props.requestGetAllOrder(token);
    this.setState({ showForm: true, status: false, isCallGetOrder: true });
  };
  onClickDelete = () => {
    const { t } = this.props;
    const { token } = this.state;
    if (this.state.id_documents) {
      this.setState({ loading: true, isDeleteDocumentById: true });
      let data = bodyDeleteDocument(this.state.id_documents);
      this.props.requestDeleteDocument(data, token);
    } else {
      MySwal.fire({
        icon: "error",
        title: t("info"),
        text: t("InformationOncomplete"),
        footer: `<a href="">${t("YouContactDeveloper")}</a>`,
      });
    }
  };
  onCloseAlertBill = () => {
    this.setState({ alertModelPrint: false })
  }
  render() {
    const { t } = this.props;
    const {
      data,
      address,
      erroraddress,
      orders_id,
      errororders_id,
      showDelete,
      showForm,
      Orders_Id,
      status,
      loading,
      Address,
      Contact,
      Traid,
      Date,
      Company,
      Dimention,
      Phone,
      Service,
      Price,

      errorcontact,
      errortraid,
      errordate,
      errorcompany,
      errordimention,
      errorphone,
      errorservice,
      errorprice,

      contact,
      traid,
      date,
      company,
      dimention,
      phone,
      service,
      price,
      dataOrder,
      dataEmp,
      dataCustomer,
      dataSell,
      alertModelPrint,
      dataPrint
    } = this.state;
    console.log('phone1:', this.state.phone1)
    console.log('Phone:', this.state.Phone)
    //Phone
    return (
      <div>
        {loading ? <LoadingComponet /> : null}
        <div className="content-wrapper body">
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>{t("DocumentInformation")}</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a className="newEvent" onClick={() => this.onRefresh()}>
                        <i class="fas fa-sync-alt"></i> {t("Refresh")}
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a className="newEvent" onClick={() => this.onAddNew()}>
                        <i class="fas fa-user"></i> {t("AddNewInformation")}
                      </a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">{t("Description")}</h3>
                      <div className="card-tools">

                      </div>
                    </div>

                    <div className="card-body table-responsive p-0">
                      <table className="table table-hover text-nowrap">
                        <thead>
                          <tr>
                            <th>{t("Level")}</th>
                            <th>{t("id_documents")}</th>
                            <th>{t("address")}</th>
                            <th>{t("orders_id")}</th>
                            <th>{t("employeename")}</th>
                            <th>{t("contact")}</th>
                            <th>{t("employeename")}</th>
                            <th>{t("date")}</th>
                            <th>{t("company")}</th>
                            <th>{t("dimention")}</th>
                            <th>{t("phone")}</th>
                            <th>{t("service")}</th>
                            <th>{t("price")}</th>
                            <th>{t("createdAt")}</th>
                            <th>{t("updatedAt")}</th>
                            <th>{t("user_id")}</th>
                            <th>{t("option")}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data
                            ? data.map((item, i) => (
                              <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{item.id_documents}</td>
                                <td>{item.address}</td>
                                <td>{item.sales_id}</td>
                                <td>{item.employeename}</td>
                                <td>{item.contact}</td>
                                <td>{item.employeename}</td>
                                <td>
                                  <Moment format="YYYY/MM/DD">{item.date}</Moment>
                                </td>
                                <td>{item.company}</td>
                                <td>{item.dimention}</td>
                                <td>{item.phone}</td>
                                <td>{item.service}</td>
                                <td>{item.price}</td>
                                <td>
                                  <Moment format="YYYY/MM/DD">{item.createdAt}</Moment>
                                </td>
                                <td>
                                  <Moment format="YYYY/MM/DD">{item.updatedAt}</Moment>
                                </td>
                                <td>{item.username}</td>
                                <td>
                                  <div class="btn-group">
                                    <button
                                      type="button"
                                      class="btn btn-info btn-xs"
                                      onClick={() => this.onPressView(item)}
                                    >
                                     <i class="fas fa-print"></i>
                                    </button>

                                    <button
                                      type="button"
                                      class="btn btn-danger btn-xs"
                                      onClick={() => this.onPressDelete(item)}
                                    >
                                      <i className="fas fa-trash" />
                                    </button>
                                    <button
                                      type="button"
                                      class="btn btn-success btn-xs"
                                      onClick={() => this.onPressEdit(item)}
                                    >
                                      <i className="fas fa-edit" />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))
                            : null}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Modal
              className="modal"
              show={showForm}
              animation={true}
              size="lg"
              onHide={() => this.onCloseModalFormInsert()}
            >
              <Modal.Header>
                <Modal.Title>
                  {status
                    ? t("formUpdateInformation")
                    : t("formAddInformation")}
                </Modal.Title>
                <Modal.Title>
                  <button
                    type="button"
                    className="close"
                    onClick={() => this.onCloseModalFormInsert()}
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div class="modal-body">
                  <div className="form-row">
                    <div className="col-md-6 mb-6">
                      <div class="form-group">
                        <label>{t("orders_id")}</label>
                        <Form.Control
                          as="select"
                          onChange={(text) => this.onChangeTextorders_id(text)}
                        >
                          <option>-------ກະລຸນາເລືອກໃບບິນທີ່ຕ້ອງການຈັດສົ່ງ-----</option>
                          {dataSell ? dataSell.map((item, i) => (
                            item.status_sell == 1 ?
                              <option value={item.sales_id + '|' + item.total}>{item.sales_id} - {item.cus_name} - {formatNumber(item.total + '')}</option> : null
                          )) : null}
                        </Form.Control>
                      </div>



                      <div class="form-group">
                        <label>{t("date")}</label>
                        <input
                          name="date"
                          value={status ? Date : date}
                          type="date"
                          className={
                            errordate === undefined
                              ? "form-control"
                              : errordate
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                          }
                          onChange={(text) => this.onChangeTextdate(text)}
                        />
                        {errordate ? (
                          <p class="text-danger">{errordate}</p>
                        ) : null}
                      </div>


                      <div class="form-group">
                        <label>{t('employeename')}</label>
                        <Form.Control
                          as="select"
                          onChange={(text) => this.onChangeTexttraid(text)}
                        >
                          <option>-------ກະລຸນາເລືອກພະນັກງານ-----</option>
                          {dataEmp ? dataEmp.map((item, i) => (
                            <option value={item.employee_id}>{item.employee_id} - {item.employeename}</option>
                          )) : null}
                        </Form.Control>
                      </div>






                      <div class="form-group">
                        <label>{t("dimention")}</label>
                        <input
                          name="dimention"
                          value={status ? Dimention : dimention}
                          type="text"
                          className={
                            errordimention === undefined
                              ? "form-control"
                              : errordimention
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                          }
                          placeholder={t("dimention")}
                          onChange={(text) => this.onChangeTextdimention(text)}
                        />
                        {errordimention ? (
                          <p class="text-danger">{errordimention}</p>
                        ) : null}
                      </div>
                      <div class="form-group">
                        <label>{t("service")}</label>
                        <input
                          name="service"
                          value={status ? Service : service}
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
                    </div>

                    <div className="col-md-6 mb-6">
                      <div class="form-group">
                        <label>{t('cus_name')}</label>
                        <Form.Control
                          as="select"
                          onChange={(text) => this.onChangeTextcompany(text)}
                        >
                          <option>-------ກະລຸນາເລືອກລູກຄ້າ-----</option>
                          {dataCustomer ? dataCustomer.map((item, i) => (
                            item.status == 1 ?
                              <option value={item.cus_id + '|' + item.address + '|' + item.contact + '|' + item.phone}>{item.cus_id} - {item.cus_name}</option>
                              : null
                          )) : null}
                        </Form.Control>
                      </div>

                      <div class="form-group">
                        <label>{t("address")}</label>
                        <input
                          name="address"
                          value={status ? Address : address}
                          type="text"
                          disabled
                          className={
                            erroraddress === undefined
                              ? "form-control"
                              : erroraddress
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                          }
                          placeholder={t("address")}
                          onChange={(text) => this.onChangeTextaddress(text)}
                        />
                        {erroraddress ? (
                          <p class="text-danger">{erroraddress}</p>
                        ) : null}
                      </div>

                      <div class="form-group">
                        <label>{t("contact")}</label>
                        <input
                          name="contact"
                          value={status ? Contact : contact}
                          type="text"
                          disabled
                          className={
                            errorcontact === undefined
                              ? "form-control"
                              : errorcontact
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                          }
                          placeholder={t("contact")}
                          onChange={(text) => this.onChangeTextcontact(text)}
                        />
                        {errorcontact ? (
                          <p class="text-danger">{errorcontact}</p>
                        ) : null}
                      </div>



                      <div class="form-group">
                        <label>{t("phone")}</label>
                        <input
                          name="phone"
                          value={status ? Phone : phone}
                          type="text"
                          disabled
                          className={
                            errorphone === undefined
                              ? "form-control"
                              : errorphone
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                          }
                          placeholder={t("phone")}
                          onChange={(text) => this.onChangeTextphone(text)}
                        />
                        {errorphone ? (
                          <p class="text-danger">{errorphone}</p>
                        ) : null}
                      </div>
                      <div class="form-group">
                        <label>{t("price")}</label>
                        <input
                          name="price"
                          disabled
                          value={status ? Price : price}
                          type="number"
                          disabled
                          className={
                            errorprice === undefined
                              ? "form-control"
                              : errorprice
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                          }
                          placeholder={t("price")}
                          onChange={(text) => this.onChangeTextprice(text)}
                        />
                        {errorprice ? (
                          <p class="text-danger">{errorprice}</p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                {status ? (
                  <button
                    type="button"
                    onClick={() => this.onCloseModalFormUpdate()}
                    class="btn btn-success"
                    className={
                      !orders_id ||
                        errororders_id ||
                        !service ||
                        errorservice ||



                        !dimention ||
                        errordimention
                        ? "btn btn-secondary disabled"
                        : "btn btn-success"
                    }
                  >
                    {t("Confirm")}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => this.onCloseModalForm()}
                    class="btn btn-primary"
                    className={

                      !orders_id ||
                        errororders_id ||
                        !service ||
                        errorservice ||



                        !dimention ||
                        errordimention

                        ? "btn btn-secondary disabled"
                        : "btn btn-primary"
                    }
                  >
                    {t("Confirm")}
                  </button>
                )}

                <button
                  type="button"
                  class="btn btn-default"
                  onClick={() => this.onCloseModalFormInsert()}
                >
                  {t("cancel")}
                </button>
              </Modal.Footer>
            </Modal>

            <Modal
              className="modal"
              show={showDelete}
              size="sm"
              onHide={() => this.onCloseDelete()}
            >
              <Modal.Header>
                <Modal.Title>{t("Confirm")}</Modal.Title>
                <Modal.Title>
                  <button
                    type="button"
                    className="close"
                    onClick={() => this.onCloseDelete()}
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>{t("DoYouReallyWantDeleteData")}</Modal.Body>
              <Modal.Footer>
                <button
                  type="button"
                  className="btn btn-default"
                  onClick={() => this.onCloseDelete()}
                >
                  {t("clase")}
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => this.onClickDelete()}
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
              {/* Description */}
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
                    <h4 className="text-center">{t('DocumentInformation')}</h4>
                    <h4 className="text-center">-----------------</h4>
                    {/* <p className="text-center"><Moment format='MMMM Do YYYY, h:mm:ss a'>{new Date()}</Moment></p> */}
                    <p className="text-center">{dataPrint.length > 0 ? dataPrint[0].username : null}</p>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        src={logo}
                        className="img-circle"
                        style={{ width: 100, height: 50 }}
                      />
                      <p>{t('companyaName')}:{dataPrint.length > 0 ? dataPrint[0].company : null}</p>
                      <p>{t('ContactInfo')}</p>
                      <p>{t('location')}</p>
                      <p className="text">{t('service')}: {dataPrint.length > 0 ? dataPrint[0].service : null}</p>
                    </div>

                    <div className="col-md-6">
                      <br />
                      <br />
                      <p className="text">{t('id_documents')}: {dataPrint.length > 0 ? dataPrint[0].id_documents : null}</p>
                      <p className="text">{t('contact')}: {dataPrint.length > 0 ? dataPrint[0].contact : null}</p>
                      <p className="text">{t('address')}: {dataPrint.length > 0 ? dataPrint[0].address : null}</p>
                      <p className="text">{t('order_id')}: {dataPrint.length > 0 ? dataPrint[0].order_id : null}</p>
                      <p className="text">{t('phone')}: {dataPrint.length > 0 ? dataPrint[0].phone : null}</p>

                    </div>
                  </div>


                  <div className="row">
                    <div className="col-12 table-responsive">
                      <div className="table-responsive">
                        <table className="table table-hover table-bordered">

                          <thead>
                            <tr>
                              <th>{t('oils_id')}</th>
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
                                  <td>{item.oils_id}</td>
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
                    <i class="fas fa-print"></i>{t("print")}
                  </button>}
                  content={() => this.componentRef}
                />

              </Modal.Footer>
            </Modal>






          </section>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    dataResultDocument: state.documentReducer.dataResultDocument,
    actionType: state.documentReducer.actionType,
    responseCode: state.documentReducer.responseCode,
    message: state.documentReducer.message,
    dataResultDocumentNew: state.documentReducer.dataResultDocumentNew,
    dataResultDocumentDelete: state.documentReducer.dataResultDocumentDelete,
    dataResultDocumentUpdate: state.documentReducer.dataResultDocumentUpdate,

    dataResultOrder: state.orderReducer.dataResultOrder,
    actionTypeOrder: state.orderReducer.actionType,

    userInfo: state.loginReduce.userInfo,

    dataResultCustomers: state.customerReducer.dataResultCustomers,
    actionTypeCustomer: state.customerReducer.actionType,

    dataResultEmployee: state.employeeReducer.dataResultEmployee,
    actionTypeEmployee: state.employeeReducer.actionType,

    dataResultGetSell: state.sellReducer.dataResultGetSell,
    actionTypeGetSell: state.sellReducer.actionType,


    dataResultDocumentById: state.documentReducer.dataResultDocumentById,
    dataResultDocumentByIdActionType: state.documentReducer.actionType,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestGetAllDocument: (data) => dispatch(requestGetAllDocument(data)),
    requestGetAllOrder: (data) => dispatch(requestGetAllOrder(data)),
    requestDeleteDocument: (data, token) =>
      dispatch(requestDeleteDocument(data, token)),
    requestInsertDocument: (data, token) =>
      dispatch(requestInsertDocument(data, token)),
    requestUpdateDocument: (data, token) =>
      dispatch(requestUpdateDocument(data, token)),
    requestGetAllCustomers: (data) => dispatch(requestGetAllCustomers(data)),
    requestGetAllEmployee: (data) => dispatch(requestGetAllEmployee(data)),
    requestGetAllSell: (data) => dispatch(requestGetAllSell(data)),
    requestGetByIdDocument: (data, token) => dispatch(requestGetByIdDocument(data, token)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(componentName));
