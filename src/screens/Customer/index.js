import React, { Component } from "react";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import {
  requestBodyCreateNewCustomerss,
  bodyUpdateCustomers,
  bodyDeleteCustomers,
} from "../../api/bodyReq";
import { Modal, Form } from "react-bootstrap";
import {
  requestGetAllCustomers,
  requestDeleteCustomers,
  requestInsertCustomers,
  requestUpdateCustomers,
} from "../../actions/customerAction";
import {
  GET_ALL_CUSTOMERS_FAILED,
  GET_ALL_CUSTOMERS_SUCCESS,
  INSRT_NEW_CUSTOMERS_SUCCESS,
  INSRT_NEW_CUSTOMERS_FAILED,
  DELETE_BY_ID_CUSTOMERS_FAILED,
  DELETE_BY_ID_CUSTOMERS_SUCCESS,
  UPDATE_CUSTOMERS_FAILED,
  UPDATE_CUSTOMERS_SUCCESS,
} from "../../utils/commonType";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Cookie from "js-cookie";
import { LoadingComponet } from "../../components";
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
    this.setState({ loading: true, onGetInfo: true });
    this.props.requestGetAllCustomers(token);
  }
  onAddNewInformation = () => {
    alert("ok");
  };
  onRefresh() {}
  componentWillReceiveProps(nextProps) {
    const { t } = this.props;
    const {
      onGetInfo,
      isInsertCustomers,
      isDeleteCustomersById,
      onCallUpdateCustomers,
      token,
    } = this.state;
    console.log("nextProps car:", nextProps);
    if (onGetInfo) {
      if (nextProps.dataResultCustomers) {
        switch (nextProps.actionType) {
          case GET_ALL_CUSTOMERS_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                let data = nextProps.dataResultCustomers;
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
          case GET_ALL_CUSTOMERS_FAILED:
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
    if (isInsertCustomers) {
      if (nextProps.dataResultCustomersNew) {
        switch (nextProps.actionType) {
          case INSRT_NEW_CUSTOMERS_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                MySwal.fire({
                  icon: "success",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = "/CustomerInformation";
                  }
                });

                this.setState({
                  isInsertCustomers: false,
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
                  isInsertCustomers: false,
                  loading: false,
                  showForm: false,
                });
                break;

              default:
                break;
            }
            break;
            break;
          case INSRT_NEW_CUSTOMERS_FAILED:
            MySwal.fire({
              icon: "error",
              title: t("info"),
              text: nextProps.message,
              footer: `<a href="">${t("YouContactDeveloper")}</a>`,
            });
            this.setState({
              isInsertCustomers: false,
              loading: false,
              showForm: false,
            });
            break;

          default:
            break;
        }
      }
    }
    if (isDeleteCustomersById) {
      if (nextProps.dataResultCustomersDelete) {
        switch (nextProps.actionType) {
          case DELETE_BY_ID_CUSTOMERS_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                MySwal.fire({
                  icon: "success",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = "/CustomerInformation";
                  }
                });

                this.setState({
                  isDeleteCustomersById: false,
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
                  isDeleteCustomersById: false,
                  loading: false,
                  showDelete: false,
                });
                break;

              default:
                break;
            }
            break;
            break;
          case DELETE_BY_ID_CUSTOMERS_FAILED:
            MySwal.fire({
              icon: "error",
              title: t("info"),
              text: nextProps.message,
              footer: `<a href="">${t("YouContactDeveloper")}</a>`,
            });
            this.setState({
              isDeleteCustomersById: false,
              loading: false,
              showDelete: false,
            });
            break;

          default:
            break;
        }
      }
    }
    if (onCallUpdateCustomers) {
      if (nextProps.dataResultCustomersUpdate) {
        switch (nextProps.actionType) {
          case UPDATE_CUSTOMERS_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                MySwal.fire({
                  icon: "success",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = "/CustomerInformation";
                  }
                });

                this.setState({
                  onCallUpdateCustomers: false,
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
                  onCallUpdateCustomers: false,
                  loading: false,
                  showForm: false,
                });
                break;

              default:
                break;
            }
            break;
          case UPDATE_CUSTOMERS_FAILED:
            MySwal.fire({
              icon: "error",
              title: t("info"),
              text: nextProps.message,
              footer: `<a href="">${t("YouContactDeveloper")}</a>`,
            });
            this.setState({
              onCallUpdateCustomers: false,
              loading: false,
              showForm: false,
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
    console.log("---item----", item);
    if (item) {
      let cus_id = item.cus_id;
      let cus_Name = item.cus_name;
      let Address = item.address;
      let Status = item.status;
      let Contact = item.contact;
      let Phone = item.phone;
      this.setState({
        cus_id,
        cus_Name,
        Address,
        Status,
        Contact,
        Phone,
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
  onChangeTextcus_name = (text) => {
    const value = text.target.value;
    const errorcus_name =
      !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
    this.setState({
      cus_name: value,
      errorcus_name,
      cus_Name: value,
    });
  };
  onChangeTextaddress = (text) => {
    const value = text.target.value;
    const erroraddress =
      !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
    this.setState({
      address: value,
      erroraddress,
      Address: value,
    });
  };
  onChangeTextphone = (text) => {
    const value = text.target.value;
    const errorphone =
      !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
    this.setState({
      phone: value,
      errorphone,
      Phone: value,
    });
  };
  onChangeTextcontact = (text) => {
    const value = text.target.value;
    const errorcontact =
      !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
    this.setState({
      contact: value,
      errorcontact,
      Contact: value,
    });
  };
  onChangeTextstatus = (text) => {
    const value = text.target.value;
    const errorstatus =
      !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
    this.setState({
      status: value,
      errorstatus,
      Status: value,
    });
  };
  onCloseModalForm = () => {
    const { t } = this.props;
    const { cus_name, address, contact, status, token,phone, user_id } = this.state;
    // const userInfo = Cookie.getJSON("userInfo") || null;
   
    // let user_id = userInfo.auth[0].user_id;
    console.log('user_id--1:', user_id)
    if (cus_name && address && contact && status && token && phone && user_id) {
      console.log('user_id--12:', user_id)
      //cus_id, cus_name, address, contact, status,phone, user_id
      let data = requestBodyCreateNewCustomerss(
        null,
        cus_name,
        address,
        contact,
        status,
        phone,
        user_id
      );
      this.setState({ loading: true, isInsertCustomers: true });
        console.log('---data-----', data)
      this.props.requestInsertCustomers(data, token);
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
    const { cus_id, cus_Name,Address,Contact,status, Phone, user_id, token } =
      this.state;
    if (
      cus_id &&
      cus_Name &&
      Address&&
      Contact &&
      status &&
      Phone &&
      user_id &&
      token
    ) {
      let data = bodyUpdateCustomers(cus_id, cus_Name,Address,Contact,status, Phone, user_id);
      this.props.requestUpdateCustomers(data, token);
      this.setState({ loading: true, onCallUpdateCustomers: true });
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
      cus_id: item.cus_id,
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
    if (this.state.cus_id) {
      this.setState({ loading: true, isDeleteCustomersById: true });
      let data = bodyDeleteCustomers(this.state.cus_id);
      this.props.requestDeleteCustomers(data, token);
    } else {
      MySwal.fire({
        icon: "error",
        title: t("info"),
        text: t("InformationOncomplete"),
        footer: `<a href="">${t("YouContactDeveloper")}</a>`,
      });
    }
  };
  render() {
    const { t } = this.props;
    const {
      data,
      cus_name,
      errorcus_name,
      showDelete,
      showForm,
      cus_Name,
      Status,
      errorcontact,
      contact,
      Contact,
      status,
      errorstatus,
      statusModle,
      address,
      Address,
      erroraddress,
      phone,
      Phone,
      errorphone,
      loading,
    } = this.state;
    return (
      <div>
        {loading ? <LoadingComponet /> : null}
        <div className="content-wrapper body">
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>{t("CustomersInformation")}</h1>
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
                            <th>{t("cus_id")}</th>
                            <th>{t("cus_name")}</th>
                            <th>{t("address")}</th>
                            <th>{t("contact")}</th>
                            <th>{t("status")}</th>
                            <th>{t("phone")}</th>
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
                                  <td>{item.cus_id}</td>
                                  <td>{item.cus_name}</td>
                                  <td>{item.address}</td>
                                  <td>{item.contact}</td>
                                  <td>{item.status == 1 ? 'ຍັງເປັນລູກຄ້າເຮົາຢູ່' : 'ຍົກເລີກການເປັນຄ້າແລ້ວ'}</td>
                                  <td>{item.phone}</td>
                                  
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
                        <label>{t("cus_name")}</label>
                        <input
                          name="cus_name"
                          value={statusModle ? cus_Name : cus_name}
                          type="text"
                          className={
                            errorcus_name === undefined
                              ? "form-control"
                              : errorcus_name
                              ? "form-control is-invalid"
                              : "form-control is-valid"
                          }
                          placeholder={t("cus_name")}
                          onChange={(text) => this.onChangeTextcus_name(text)}
                        />
                        {errorcus_name ? (
                          <p class="text-danger">{errorcus_name}</p>
                        ) : null}
                      </div>
                      <div class="form-group">
                        <label>{t("contact")}</label>
                        <input
                          name="contact"
                          value={statusModle ? Contact : contact}
                          type="text"
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
                          value={statusModle ? Phone : phone}
                          type="text"
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
                    </div>

                    <div className="col-md-6 mb-6">
                      <div class="form-group">
                        <label>{t("address")}</label>
                        <input
                          name="address"
                          value={statusModle ? Address : address}
                          type="text"
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

                      <div class="form-group">
                      <label>{t("status")}</label>
                      <Form.Control
                        as="select"
                        onChange={(text) => this.onChangeTextstatus(text)}
                      >
                        <option></option>
                        <option value="0">ຍົກເລີກການເປັນຄ້າແລ້ວ</option>
                        <option value="1">ຍັງເປັນລູກຄ້າເຮົາຢູ່</option>
                      </Form.Control>
                    </div>



                        {/* <label>{t("status")}</label>
                        <input
                          name="status"
                          value={statusModle ? Status : status}
                          type="text"
                          className={
                            errorstatus === undefined
                              ? "form-control"
                              : errorstatus
                              ? "form-control is-invalid"
                              : "form-control is-valid"
                          }
                          placeholder={t("status")}
                          onChange={(text) => this.onChangeTextstatus(text)}
                        />
                        {errorstatus ? (
                          <p class="text-danger">{errorstatus}</p>
                        ) : null} */}


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
                      !cus_name ||
                      errorcus_name ||
                      !contact ||
                      errorcontact ||
                      !address ||
                      erroraddress ||
                      !phone ||
                      errorphone
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
                      !cus_name ||
                      errorcus_name ||
                      !contact ||
                      errorcontact ||
                      !status ||
                      errorstatus ||
                      !address ||
                      erroraddress ||
                      !phone ||
                      errorphone
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
    dataResultCustomers: state.customerReducer.dataResultCustomers,
    actionType: state.customerReducer.actionType,
    responseCode: state.customerReducer.responseCode,
    message: state.customerReducer.message,
    dataResultCustomersNew: state.customerReducer.dataResultCustomersNew,
    dataResultCustomersDelete: state.customerReducer.dataResultCustomersDelete,
    dataResultCustomersUpdate: state.customerReducer.dataResultCustomersUpdate,
    userInfo: state.loginReduce.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestGetAllCustomers: (data) => dispatch(requestGetAllCustomers(data)),
    requestDeleteCustomers: (data, token) =>
      dispatch(requestDeleteCustomers(data, token)),
    requestInsertCustomers: (data, token) =>
      dispatch(requestInsertCustomers(data, token)),
    requestUpdateCustomers: (data, token) =>
      dispatch(requestUpdateCustomers(data, token)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(componentName));
