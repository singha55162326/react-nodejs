import React, { Component } from "react";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import {
  bodyDeleteTransports,
  requestBodyCreateNewTransports,
  bodyUpdateTransports,
} from "../../api/bodyReq";
import { Modal, Form } from "react-bootstrap";
import {
  requestGetAllTransports,
  requestDeleteTransports,
  requestInsertTransports,
  requestUpdateTransports,
  requestGetByIdTransports
} from "../../actions/transportsAction";

import { requestGetAllSupplier } from "../../actions/supplierAction";
import { requestGetAllCar } from "../../actions/carAction";
import { requestGetAllOil } from "../../actions/oilAction";
import { requestGetAllOrder } from "../../actions/order";
import { requestGetAllDocument } from "../../actions/documentAction";

import {
  GET_ALL_TRANSPORTS_FAILED,
  GET_ALL_TRANSPORTS_SUCCESS,
  INSRT_NEW_TRANSPORTS_SUCCESS,
  INSRT_NEW_TRANSPORTS_FAILED,
  DELETE_BY_ID_TRANSPORTS_FAILED,
  DELETE_BY_ID_TRANSPORTS_SUCCESS,
  UPDATE_TRANSPORTS_FAILED,
  UPDATE_TRANSPORTS_SUCCESS,
  GET_ALL_SUPPLIER_SUCCESS,
  GET_ALL_SUPPLIER_FAILED,
  GET_ALL_CAR_SUCCESS,
  GET_ALL_CAR_FAILED,
  GET_ALL_OIL_SUCCESS,
  GET_ALL_OIL_FAILED,
  GET_ALL_ORDER_SUCCESS,
  GET_ALL_ORDER_FAILED,
  GET_ALL_DOCUMENT_SUCCESS,
  GET_ALL_DOCUMENT_FAILED,
  GET_ALL_SELL_FAILED,
  GET_ALL_SELL_SUCCESS,
  GET_ALL_TRANSPORTS_BY_ID_FAILED,
  GET_ALL_TRANSPORTS_BY_ID_SUCCESS

} from "../../utils/commonType";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Cookie from "js-cookie";
import { LoadingComponet } from "../../components";
import { requestGetAllSell } from '../../actions/sellAction';
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
      dataPrint: [],
      dataSell:[]
    };
  }
  componentDidMount() {
    const userInfo = Cookie.getJSON("userInfo") || null;
    let token = userInfo ? userInfo.token : null;
    let user_id = userInfo.auth[0].user_id;
    this.loadData(token);
    // this.callSell(token)
    this.setState({ token, user_id });
  }
  loadData(token) {
    this.setState({ loading: true, onGetInfo: true });
    this.props.requestGetAllTransports(token);
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
      isInsertTransports,
      isDeleteTransportsById,
      onCallUpdateTransports,
      token,
      isCallGetAllDataSupplier,
      isCallGetAllDataCar,
      isCallGetAllDataOil,
      isCallGetOrder,
      isCallGetAllDataDocment,
      onGetInfoSell,
      onGetBillTranspostByID
    } = this.state;
    console.log("nextProps car:", nextProps);
    if (onGetInfo) {
      if (nextProps.dataResultTransports) {
        switch (nextProps.actionType) {
          case GET_ALL_TRANSPORTS_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                let data = nextProps.dataResultTransports;
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
          case GET_ALL_TRANSPORTS_FAILED:
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
    if (isInsertTransports) {
      if (nextProps.dataResultTransportsNew) {
        switch (nextProps.actionType) {
          case INSRT_NEW_TRANSPORTS_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                MySwal.fire({
                  icon: "success",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = "/FuelDelivery";
                  }
                });

                this.setState({
                  isInsertTransports: false,
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
                  isInsertTransports: false,
                  loading: false,
                  showForm: false,
                });
                break;

              default:
                break;
            }
            break;
            break;
          case INSRT_NEW_TRANSPORTS_FAILED:
            MySwal.fire({
              icon: "error",
              title: t("info"),
              text: nextProps.message,
              footer: `<a href="">${t("YouContactDeveloper")}</a>`,
            });
            this.setState({
              isInsertTransports: false,
              loading: false,
              showForm: false,
            });
            break;

          default:
            break;
        }
      }
    }
    if (isDeleteTransportsById) {
      if (nextProps.dataResultTransportsDelete) {
        switch (nextProps.actionType) {
          case DELETE_BY_ID_TRANSPORTS_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                MySwal.fire({
                  icon: "success",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = "/FuelDelivery";
                  }
                });

                this.setState({
                  isDeleteTransportsById: false,
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
                  isDeleteTransportsById: false,
                  loading: false,
                  showDelete: false,
                });
                break;

              default:
                break;
            }
            break;
            break;
          case DELETE_BY_ID_TRANSPORTS_FAILED:
            MySwal.fire({
              icon: "error",
              title: t("info"),
              text: nextProps.message,
              footer: `<a href="">${t("YouContactDeveloper")}</a>`,
            });
            this.setState({
              isDeleteTransportsById: false,
              loading: false,
              showDelete: false,
            });
            break;

          default:
            break;
        }
      }
    }
    if (onCallUpdateTransports) {
      if (nextProps.dataResultTransportsUpdate) {
        switch (nextProps.actionType) {
          case UPDATE_TRANSPORTS_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                MySwal.fire({
                  icon: "success",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = "/FuelDelivery";
                  }
                });

                this.setState({
                  onCallUpdateTransports: false,
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
                  onCallUpdateTransports: false,
                  loading: false,
                  showForm: false,
                });
                break;

              default:
                break;
            }
            break;
          case UPDATE_TRANSPORTS_FAILED:
            MySwal.fire({
              icon: "error",
              title: t("info"),
              text: nextProps.message,
              footer: `<a href="">${t("YouContactDeveloper")}</a>`,
            });
            this.setState({
              onCallUpdateTransports: false,
              loading: false,
              showForm: false,
            });
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
    if (isCallGetAllDataCar) {
      console.log("dataResultCar:", nextProps.dataResultCar);
      console.log("actionTypeCar:", nextProps.actionTypeCar);
      if (nextProps.dataResultCar) {
        switch (nextProps.actionTypeCar) {
          case GET_ALL_CAR_SUCCESS:
            this.setState({
              isCallGetAllDataCar: false,
              dataComboCar: nextProps.dataResultCar,
            });
            break;
          case GET_ALL_CAR_FAILED:
            this.setState({
              isCallGetAllDataCar: false,
              dataComboCar: null,
            });
            break;

          default:
            break;
        }
      }
    }
    if (isCallGetAllDataOil) {
      console.log("dataResultOil:", nextProps.dataResultOil);
      console.log("actionTypeOil:", nextProps.actionTypeOil);
      if (nextProps.dataResultOil) {
        switch (nextProps.actionTypeOil) {
          case GET_ALL_OIL_SUCCESS:
            this.setState({
              isCallGetAllDataOil: false,
              dataComboOil: nextProps.dataResultOil,
            });
            break;
          case GET_ALL_OIL_FAILED:
            this.setState({
              isCallGetAllDataOil: false,
              dataComboOil: null,
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
    if (isCallGetAllDataDocment) {
      if (nextProps.dataResultDocument) {
        switch (nextProps.actionTypeDocument) {
          case GET_ALL_DOCUMENT_SUCCESS:
            this.setState({
              isCallGetAllDataDocment: false,
              dataDocument: nextProps.dataResultDocument,
            });
            break;
          case GET_ALL_DOCUMENT_FAILED:
            this.setState({ isCallGetAllDataDocment: false });
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
                let data1 = nextProps.dataResultGetSell;
                console.log('dataSell:--------', data1)
                this.setState({ onGetInfoSell: false, loading: false, dataSell: data1 });
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
    if (onGetBillTranspostByID) {
      if (nextProps.dataResultTransportsById) {
        switch (nextProps.actionTypeGetTransport) {
          case GET_ALL_TRANSPORTS_BY_ID_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                let dataTransport = nextProps.dataResultTransportsById;
                this.setState({ onGetBillTranspostByID: false, loading: false, dataPrint: dataTransport, alertModelPrint: true });
                break;
              case nextProps.responseCode:
                MySwal.fire({
                  icon: "error",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                });
                this.setState({ onGetBillTranspostByID: false, loading: false });
                break;

              default:
                break;
            }
            break;
          case GET_ALL_TRANSPORTS_BY_ID_FAILED:
            MySwal.fire({
              icon: "error",
              title: t("info"),
              text: nextProps.message,
              footer: `<a href="">${t("YouContactDeveloper")}</a>`,
            });
            this.setState({ onGetBillTranspostByID: false, loading: false });
            break;

          default:
            break;
        }
      }
    }
  }

  onPressEdit = (item) => {
    const { t } = this.props;
    // console.log("---item----", item);
    if (item) {
      let Transport_id = item.transport_id;
      let Id_documents = item.id_documents;
      let Dimention = item.dimention;
      let Order_id = item.order_id;
      let Oil_id = item.oil_id;
      let Company = item.company;
      let Supplier_id = item.supplier_id;
      let Car_id = item.car_id;
      this.setState({
        Transport_id,
        Id_documents,
        Dimention,
        Order_id,
        Oil_id,
        Company,
        Supplier_id,
        Car_id,
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
  onChangeTextcompany = (text) => {
    const value = text.target.value;
    const errorcompany =
      !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
    this.setState({ company: value, errorcompany, Company: value });
  };
  onChangeTextdimention = (text) => {
    const value = text.target.value;
    const errordimention =
      !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
    this.setState({ dimention: value, errordimention, Dimention: value });
  };

  onCloseModalForm = () => {
    const { t } = this.props;
    const {
      transport_id,
      id_documents,
      dimention,
      order_id,
      oil_id,
      company,
      supplier_id,
      car_id,
      user_id,
      token,
    } = this.state;
    if (
      id_documents &&
      dimention &&
      order_id &&
      oil_id &&
      company &&
      supplier_id &&
      car_id &&
      user_id
    ) {
      // transport_id	id_documents	dimention	order_id	oil_id	company	supplier_id	car_id	user_id
      let data = requestBodyCreateNewTransports(
        transport_id,
        id_documents,
        dimention,
        order_id,
        oil_id,
        company,
        supplier_id,
        car_id,
        user_id
      );
      console.log("---", data);
      this.props.requestInsertTransports(data, token);
      this.setState({ loading: true, isInsertTransports: true });
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
      Transport_id,
      Id_documents,
      Dimention,
      Order_id,
      Oil_id,
      Company,
      Supplier_id,
      Car_id,
      user_id,
      token,
    } = this.state;
    if (
      Transport_id &&
      Id_documents &&
      Dimention &&
      Order_id &&
      Oil_id &&
      Company &&
      Supplier_id &&
      Car_id &&
      user_id &&
      token
    ) {
      let data = bodyUpdateTransports(
        Transport_id,
        Id_documents,
        Dimention,
        Order_id,
        Oil_id,
        Company,
        Supplier_id,
        Car_id,
        user_id
      );
      this.props.requestUpdateTransports(data, token);
      this.setState({ loading: true, onCallUpdateTransports: true });
    } else {
      MySwal.fire({
        icon: "error",
        title: t("info"),
        text: t("InformationOncomplete"),
        footer: `<a href="">${t("YouContactDeveloper")}</a>`,
      });
    }
  };
  onPressView = (item) => {
    const { t } = this.props;
    const { token } = this.state
    if (item) {
      let transport_id = item.transport_id;
      console.log('transport_id:', transport_id)
      this.props.requestGetByIdTransports(transport_id, token)
      this.setState({ loading: true, onGetBillTranspostByID: true })
    } else {
      MySwal.fire({
        icon: "error",
        title: t("info"),
        text: t("InformationOncomplete"),
        footer: `<a href="">${t("YouContactDeveloper")}</a>`,
      });
    }
  }
  onPressDelete = (item) => {
    this.setState({
      showDelete: true,
      transport_id: item.transport_id,
    });
  };
  onCloseDelete = () => {
    this.setState({ showDelete: false });
  };
  onCloseModalFormInsert = () => {
    this.setState({ showForm: false });
  };
  onAddNew = () => {
    this.onLoadingDataCombobox();
    this.setState({ showForm: true, status: false });
  };
  onClickDelete = () => {
    const { t } = this.props;
    const { token } = this.state;
    if (this.state.transport_id) {
      this.setState({ loading: true, isDeleteTransportsById: true });
      let data = bodyDeleteTransports(this.state.transport_id);
      this.props.requestDeleteTransports(data, token);
    } else {
      MySwal.fire({
        icon: "error",
        title: t("info"),
        text: t("InformationOncomplete"),
        footer: `<a href="">${t("YouContactDeveloper")}</a>`,
      });
    }
  };

  onSelectId_documents = (text) => {
    const value = text.target.value;
    this.setState({
      id_documents: value,
      Id_documents: value,
    });
  };

  onSelectOrder_id = (text) => {
    const value = text.target.value;
    this.setState({
      order_id: value,
      Order_id: value,
    });
  };

  onSelectOil_id = (text) => {
    const value = text.target.value;
    this.setState({
      oil_id: value,
      Oil_id: value,
    });
  };

  onSelectSupplier_id = (text) => {
    const value = text.target.value;
    this.setState({
      supplier_id: value,
      Supplier_id: value,
    });
  };

  onSelectCar_id = (text) => {
    const value = text.target.value;
    this.setState({
      car_id: value,
      Car_id: value,
    });
  };
  onLoadingDataCombobox = () => {
    const { token } = this.state;
    this.props.requestGetAllSupplier(token);
    this.props.requestGetAllCar(token);
    this.props.requestGetAllOil(token);
    this.props.requestGetAllOrder(token);
    this.props.requestGetAllDocument(token);
    this.props.requestGetAllSell(token);
    this.setState({
      isCallGetAllDataSupplier: true,
      isCallGetAllDataCar: true,
      isCallGetAllDataOil: true,
      isCallGetOrder: true,
      isCallGetAllDataDocment: true,
      onGetInfoSell: true 
    });
  };
  onCloseAlertBill = () => {
    this.setState({ alertModelPrint: false })
  }
  render() {
    const { t } = this.props;
    const {
      data,
      company,
      errorcompany,
      dimention,
      errordimention,
      showDelete,
      showForm,
      Company,
      Dimention,
      status,
      loading,
      dataComboSupplier,
      dataComboCar,
      dataComboOil,
      dataOrder,
      dataDocument,
      dataSell,
      alertModelPrint,
      dataPrint
    } = this.state;
    console.log('dataSell:-----22222---', dataSell)
    return (
      <div>
        {loading ? <LoadingComponet /> : null}
        <div className="content-wrapper body">
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>{t("TransportsInformation")}</h1>
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
                            <th>{t("transport_id")}</th>
                            <th>{t("id_documents")}</th>
                            <th>{t("address")}</th>
                            <th>{t("dimention")}</th>
                            <th>{t("orders_id")}</th>
                            <th>{t("service")}</th>
                            <th>{t("employee_id")}</th>
                            <th>{t("oil_name")}</th>
                            <th>{t("company")}</th>
                            <th>{t("supplier_id")}</th>
                            <th>{t("supplier_name")}</th>
                            <th>{t("createdAt")}</th>
                            <th>{t("updatedAt")}</th>
                            <th>{t("company")}</th>
                            <th>{t("username")}</th>
                            <th>{t("option")}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data
                            ? data.map((item, i) => (
                              <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{item.transport_id}</td>
                                <td>{item.id_documents}</td>
                                <td>{item.address}</td>
                                <td>{item.dimention}</td>
                                <td>{item.orders_id}</td>
                                <td>{item.service}</td>
                                <td>{item.employee_id}</td>
                                <td>{item.oil_name}</td>
                                <td>{item.company}</td>
                                <td>{item.supplier_id}</td>
                                <td>{item.supplier_name}</td>

                                <td>
                                  <Moment format="YYYY/MM/DD">{item.createdAt}</Moment>
                                </td>
                                <td>
                                  <Moment format="YYYY/MM/DD">{item.updatedAt}</Moment>
                                </td>
                                <td>{item.company}</td>
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
                                      class="btn btn-success btn-xs"
                                      onClick={() => this.onPressEdit(item)}
                                    >
                                      <i className="fas fa-edit" />
                                    </button>

                                    <button
                                      type="button"
                                      class="btn btn-danger btn-xs"
                                      onClick={() => this.onPressDelete(item)}
                                    >
                                      <i className="fas fa-trash" />
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
                        <label>{t("id_documents")}</label>
                        <Form.Control
                          as="select"
                          onChange={(text) => this.onSelectId_documents(text)}
                        >
                          <option></option>
                          {dataDocument
                            ? dataDocument.map((item, i) => (
                              <option value={item.id_documents}>
                                {item.id_documents} - {item.company} - {item.address} - {item.contact}
                              </option>
                            ))
                            : null}
                        </Form.Control>
                      </div>

                      <div class="form-group">
                        <label>{t("order_id")}</label>
                        <Form.Control
                          as="select"
                          onChange={(text) => this.onSelectOrder_id(text)}
                        >
                          <option></option>
                          <option>-------ກະລຸນາເລືອກໃບບິນທີ່ຕ້ອງການຈັດສົ່ງ-----</option>
                          {dataSell ? dataSell.map((item, i) => (
                           <option value={item.sales_id}>{item.sales_id} - {item.cus_name} - {formatNumber(item.total + '')}</option>
                          )) : null}
                        </Form.Control>
                      </div>

                      <div class="form-group">
                        <label>ຢີຫໍ້ລົດ</label>
                        <Form.Control
                          as="select"
                          onChange={(text) => this.onSelectCar_id(text)}
                        >
                          <option></option>
                          {dataComboCar
                            ? dataComboCar.map((item, i) => (
                              <option value={item.car_id}>
                                {item.car_id} - {item.car_name}
                              </option>
                            ))
                            : null}
                        </Form.Control>
                      </div>

                      <div class="form-group">
                        <label>{t("company")}</label>
                        <input
                          name="company"
                          value={status ? Company : company}
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

                    <div className="col-md-6 mb-6">
                      <div class="form-group">
                        <label>{t("oil_id")}</label>
                        <Form.Control
                          as="select"
                          onChange={(text) => this.onSelectOil_id(text)}
                        >
                          <option></option>
                          {dataComboOil
                            ? dataComboOil.map((item, i) => (
                              <option value={item.oils_id}>
                                {item.oils_id} - {item.oil_name}
                              </option>
                            ))
                            : null}
                        </Form.Control>
                      </div>
                      <div class="form-group">
                        <label>{t("supplier_id")}</label>
                        <Form.Control
                          as="select"
                          onChange={(text) => this.onSelectSupplier_id(text)}
                        >
                          <option></option>
                          {dataComboSupplier
                            ? dataComboSupplier.map((item, i) => (
                              <option value={item.supplier_id}>
                                {item.supplier_id} - {item.supplier_name}
                              </option>
                            ))
                            : null}
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
                      !company || errorcompany || !dimention || errordimention
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
                      !company || errorcompany || !dimention || errordimention
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
                    <h4 className="text-center">{t('TransportsInformation')}</h4>
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
                      <p className="text">{t('transport_id')}: {dataPrint.length > 0 ? dataPrint[0].transport_id : null}</p>
                      <p className="text">{t('service')}: {dataPrint.length > 0 ? dataPrint[0].service : null}</p>
                      <p className="text">{t('dimention')}: {dataPrint.length > 0 ? dataPrint[0].dimention : null}</p>
                    </div>

                    <div className="col-md-6">
                      <br />
                      <br />
                      <p className="text">{t('id_documents')}: {dataPrint.length > 0 ? dataPrint[0].id_documents : null}</p>
                      <p className="text">{t('contact')}: {dataPrint.length > 0 ? dataPrint[0].contact : null}</p>
                      <p className="text">{t('address')}: {dataPrint.length > 0 ? dataPrint[0].address : null}</p>
                      <p className="text">{t('supplier_name')}: {dataPrint.length > 0 ? dataPrint[0].supplier_name : null}</p>
                      <p className="text">{t('car_name')}: {dataPrint.length > 0 ? dataPrint[0].car_name : null}</p>

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
    dataResultTransports: state.transportsReducer.dataResultTransports,
    actionType: state.transportsReducer.actionType,
    responseCode: state.transportsReducer.responseCode,
    message: state.transportsReducer.message,
    dataResultTransportsNew: state.transportsReducer.dataResultTransportsNew,
    dataResultTransportsDelete:
      state.transportsReducer.dataResultTransportsDelete,
    dataResultTransportsUpdate:
      state.transportsReducer.dataResultTransportsUpdate,
    userInfo: state.loginReduce.userInfo,

    dataResultSupplier: state.supplierReducer.dataResultSupplier,
    actionTypeSupplier: state.supplierReducer.actionType,

    dataResultCar: state.carReducer.dataResultCar,
    actionTypeCar: state.carReducer.actionType,

    dataResultOil: state.oilReducer.dataResultOil,
    actionTypeOil: state.oilReducer.actionType,

    dataResultOrder: state.orderReducer.dataResultOrder,
    actionTypeOrder: state.orderReducer.actionType,

    dataResultDocument: state.documentReducer.dataResultDocument,
    actionTypeDocument: state.documentReducer.actionType,

    dataResultGetSell: state.sellReducer.dataResultGetSell,
    actionTypeGetSell: state.sellReducer.actionType,

    dataResultTransportsById: state.transportsReducer.dataResultTransportsById,
    actionTypeGetTransport: state.transportsReducer.actionType,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestGetAllTransports: (data) => dispatch(requestGetAllTransports(data)),
    requestGetAllSupplier: (data) => dispatch(requestGetAllSupplier(data)),
    requestGetAllCar: (data) => dispatch(requestGetAllCar(data)),
    requestGetAllOil: (data) => dispatch(requestGetAllOil(data)),
    requestGetAllOrder: (data) => dispatch(requestGetAllOrder(data)),
    requestGetAllDocument: (data) => dispatch(requestGetAllDocument(data)),
    requestDeleteTransports: (data, token) =>
      dispatch(requestDeleteTransports(data, token)),
    requestInsertTransports: (data, token) =>
      dispatch(requestInsertTransports(data, token)),
    requestUpdateTransports: (data, token) =>
      dispatch(requestUpdateTransports(data, token)),
    requestGetAllSell: (data) => dispatch(requestGetAllSell(data)),
    requestGetByIdTransports: (data, token) => dispatch(requestGetByIdTransports(data, token)),

  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(componentName));
