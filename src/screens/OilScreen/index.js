import React, { Component } from "react";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import {
  bodyDeleteOil,
  requestBodyCreateNewOils,
  bodyUpdateOil,
} from "../../api/bodyReq";
import { Modal, Form } from "react-bootstrap";
import {
  requestGetAllOil,
  requestDeleteOil,
  requestInsertOil,
  requestUpdateOil,
} from "../../actions/oilAction";
import {
  GET_ALL_OIL_FAILED,
  GET_ALL_OIL_SUCCESS,
  INSRT_NEW_OIL_SUCCESS,
  INSRT_NEW_OIL_FAILED,
  DELETE_BY_ID_OIL_FAILED,
  DELETE_BY_ID_OIL_SUCCESS,
  UPDATE_OIL_FAILED,
  UPDATE_OIL_SUCCESS,
  GET_ALL_SUPPLIER_SUCCESS,
  GET_ALL_SUPPLIER_FAILED
} from "../../utils/commonType";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Cookie from "js-cookie";
import { LoadingComponet } from "../../components";
import { requestGetAllSupplier } from "../../actions/supplierAction";
import { formatNumber } from '../../utils/Formater'
import Moment from 'react-moment';


const MySwal = withReactContent(Swal);
class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showDelete: false,
      loading: false,
      showForm: false,
      statusModle: false,
    };
  }
  componentDidMount() {
    const userInfo = Cookie.getJSON("userInfo") || null;
    let token = userInfo ? userInfo.token : null;
    let user_id = userInfo.auth[0].user_id;
    this.loadData(token);
    this.setState({ token, user_id });
  }
  loadData(token) {
    this.props.requestGetAllSupplier(token);
    this.props.requestGetAllOil(token);
    this.setState({ loading: true, onGetInfo: true, isCallGetAllDataSupplier: true, });

  }
  onAddNewInformation = () => {
    alert("ok");
  };
  onRefresh() { }
  componentWillReceiveProps(nextProps) {
    const { t } = this.props;
    const { onGetInfo, isInsertOil, isDeleteOilById, onCallUpdateOil, isCallGetAllDataSupplier, token } =
      this.state;
    console.log("nextProps car:", nextProps);
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
    if (isInsertOil) {
      if (nextProps.dataResultOilNew) {
        switch (nextProps.actionType) {
          case INSRT_NEW_OIL_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                MySwal.fire({
                  icon: "success",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = "/oilManage";
                  }
                });

                this.setState({
                  isInsertOil: false,
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
                  isInsertOil: false,
                  loading: false,
                  showForm: false,
                });
                break;

              default:
                break;
            }
            break;
            break;
          case INSRT_NEW_OIL_FAILED:
            MySwal.fire({
              icon: "error",
              title: t("info"),
              text: nextProps.message,
              footer: `<a href="">${t("YouContactDeveloper")}</a>`,
            });
            this.setState({
              isInsertOil: false,
              loading: false,
              showForm: false,
            });
            break;

          default:
            break;
        }
      }
    }
    if (isDeleteOilById) {
      if (nextProps.dataResultOilDelete) {
        switch (nextProps.actionType) {
          case DELETE_BY_ID_OIL_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                MySwal.fire({
                  icon: "success",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = "/oilManage";
                  }
                });

                this.setState({
                  isDeleteOilById: false,
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
                  isDeleteOilById: false,
                  loading: false,
                  showDelete: false,
                });
                break;

              default:
                break;
            }
            break;
            break;
          case DELETE_BY_ID_OIL_FAILED:
            MySwal.fire({
              icon: "error",
              title: t("info"),
              text: nextProps.message,
              footer: `<a href="">${t("YouContactDeveloper")}</a>`,
            });
            this.setState({
              isDeleteOilById: false,
              loading: false,
              showDelete: false,
            });
            break;

          default:
            break;
        }
      }
    }
    if (onCallUpdateOil) {
      if (nextProps.dataResultOilUpdate) {
        switch (nextProps.actionType) {
          case UPDATE_OIL_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                MySwal.fire({
                  icon: "success",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = "/oilManage";
                  }
                });

                this.setState({
                  onCallUpdateOil: false,
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
                  onCallUpdateOil: false,
                  loading: false,
                  showForm: false,
                });
                break;

              default:
                break;
            }
            break;
          case UPDATE_OIL_FAILED:
            MySwal.fire({
              icon: "error",
              title: t("info"),
              text: nextProps.message,
              footer: `<a href="">${t("YouContactDeveloper")}</a>`,
            });
            this.setState({
              onCallUpdateOil: false,
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
  }

  onPressEdit = (item) => {
    const { t } = this.props;
    // console.log("---item----", item);
    if (item) {
      let oils_id = item.oils_id;
      let oil_Name = item.oil_name;
      let Status = item.status;
      let Price = item.price;
      let Qty = item.qty;
      let Supplier_id = item.supplier_id;

      this.setState({
        oils_id,
        oil_Name,
        Status,
        Price,
        Qty,
        Supplier_id,
        statusModle: true,
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
  onChangeTextoil_name = (text) => {
    const value = text.target.value;
    const erroroil_name =
      !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
    this.setState({
      oil_name: value,
      erroroil_name,
      oil_Name: value,
    });
  };
  onSelectStatus = (text) => {
    const value = text.target.value;
    this.setState({
      status: value,
      Status: value,
    });
  };
  onChangeTextqty = (text) => {
    const value = text.target.value;
    const errorqty =
      !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
    this.setState({
      qty: value,
      errorqty,
      Qty: value,
    });
  };
  onChangeTextprice = (text) => {
    const value = text.target.value;
    const errorprice =
      !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
    this.setState({
      price: value,
      errorprice,
      Price: value,
    });
  };
  onCloseModalForm = () => {
    const { t } = this.props;
    const { oil_name, price, token, user_id, supplier_id } = this.state;
    // console.log('supplier_id',supplier_id)
    // console.log('oil_name',oil_name)
    // console.log('price',price)
    // console.log('user_id',user_id)
    // console.log('token',token)

    if (oil_name && price && token && user_id && supplier_id) {
      let status = 0
      let qty = 0
      this.setState({ loading: true, isInsertOil: true });
      let data = requestBodyCreateNewOils(
        null,
        oil_name,
        status,
        qty,
        price,
        user_id,
        supplier_id
      );
      console.log('data----:', data)
      this.props.requestInsertOil(data, token);
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
    const { oils_id, oil_Name, Price, user_id, Supplier_id, token } =
      this.state;
    if (oils_id && oil_Name && user_id && Price && token && Supplier_id) {
      let Status = 0
      let Qty = 0
      let data = bodyUpdateOil(oils_id, oil_Name, Status, Qty, Price, user_id, Supplier_id);
      this.props.requestUpdateOil(data, token);
      this.setState({ loading: true, onCallUpdateOil: true });
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
      oils_id: item.oils_id,
    });
  };
  onCloseDelete = () => {
    this.setState({ showDelete: false });
  };
  onCloseModalFormInsert = () => {
    this.setState({ showForm: false });
  };
  onAddNew = () => {
    this.setState({ showForm: true, statusModle: false });
  };
  onClickDelete = () => {
    const { t } = this.props;
    const { token } = this.state;
    if (this.state.oils_id) {
      this.setState({ loading: true, isDeleteOilById: true });
      let data = bodyDeleteOil(this.state.oils_id);
      this.props.requestDeleteOil(data, token);
    } else {
      MySwal.fire({
        icon: "error",
        title: t("info"),
        text: t("InformationOncomplete"),
        footer: `<a href="">${t("YouContactDeveloper")}</a>`,
      });
    }
  };
  onSelectSupplier_id = (text) => {
    const value = text.target.value;
    console.log('--value---', value)
    this.setState({
      supplier_id: value,
      Supplier_id: value,
    });
  };
  render() {
    const { t } = this.props;
    const {
      data,
      oil_name,
      erroroil_name,
      showDelete,
      showForm,
      oil_Name,
      Status,
      Price,
      errorqty,
      qty,
      Qty,
      price,
      errorprice,
      statusModle, loading,
      dataComboSupplier
    } = this.state;
    return (
      <div>
        {loading ? <LoadingComponet /> : null}
        <div className="content-wrapper body">
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>{t("OilInformation")}</h1>
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
                            <th>{t("oils_id")}</th>
                            <th>{t("oil_name")}</th>
                            <th>{t("supplier_name")}</th>
                            <th>{t("status")}</th>
                            <th>{t("qty")}</th>
                            <th>{t("price")}</th>
                            <th>{t("createdAt")}</th>
                            <th>{t("updatedAt")}</th>
                            <th>{t("username")}</th>
                            <th>{t("option")}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data
                            ? data.map((item, i) => (
                              <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{item.oils_id}</td>
                                <td>{item.oil_name}</td>
                                <td>{item.supplier_name}</td>
                                <td>{item.status == 1 ? 'ຍັງ' : 'ຫມົດແລ້ວ'}</td>
                                <td>{formatNumber(item.qty + '')}</td>
                                <td>{formatNumber(item.price + '')}</td>
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
                  {statusModle
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
                        <label>{t("oil_name")}</label>
                        <input
                          name="oil_name"
                          value={statusModle ? oil_Name : oil_name}
                          type="text"
                          className={
                            erroroil_name === undefined
                              ? "form-control"
                              : erroroil_name
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                          }
                          placeholder={t("oil_name")}
                          onChange={(text) => this.onChangeTextoil_name(text)}
                        />
                        {erroroil_name ? (
                          <p class="text-danger">{erroroil_name}</p>
                        ) : null}
                      </div>
                      {/* <div class="form-group">
                        <label>{t("qty")}</label>
                        <input
                          name="qty"
                          value={statusModle ? Qty : qty}
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
                        {errorqty ? <p class="text-danger">{errorqty}</p> : null}
                      </div> */}
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
                    </div>

                    <div className="col-md-6 mb-6">
                      {/* <div class="form-group">
                        <label>{t("status")}</label>
                        <Form.Control
                          as="select"
                          onChange={(text) => this.onSelectStatus(text)}
                        >
                          <option></option>
                          <option value="0">ຫມົດແລ້ວ</option>
                          <option value="1">ຍັງ</option>
                        </Form.Control>
                      </div> */}
                      <div class="form-group">
                        <label>{t("price")}</label>
                        <input
                          name="price"
                          value={statusModle ? Price : price}
                          type="number"
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
                {statusModle ? (
                  <button
                    type="button"
                    onClick={() => this.onCloseModalFormUpdate()}
                    class="btn btn-success"
                    className={
                      !oil_name ||
                        erroroil_name ||

                        !price ||
                        errorprice
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
                      !oil_name ||
                        erroroil_name ||

                        !price ||
                        errorprice
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
          </section>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    dataResultOil: state.oilReducer.dataResultOil,
    actionType: state.oilReducer.actionType,
    responseCode: state.oilReducer.responseCode,
    message: state.oilReducer.message,
    dataResultOilNew: state.oilReducer.dataResultOilNew,
    dataResultOilDelete: state.oilReducer.dataResultOilDelete,
    dataResultOilUpdate: state.oilReducer.dataResultOilUpdate,
    userInfo: state.loginReduce.userInfo,
    dataResultSupplier: state.supplierReducer.dataResultSupplier,
    actionTypeSupplier: state.supplierReducer.actionType,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestGetAllOil: (data) => dispatch(requestGetAllOil(data)),
    requestGetAllSupplier: (data) => dispatch(requestGetAllSupplier(data)),
    requestDeleteOil: (data, token) => dispatch(requestDeleteOil(data, token)),
    requestInsertOil: (data, token) => dispatch(requestInsertOil(data, token)),
    requestUpdateOil: (data, token) => dispatch(requestUpdateOil(data, token)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(componentName));
