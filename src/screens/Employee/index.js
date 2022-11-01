import React, { Component } from "react";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import {
  bodyDeletEmployee,
  requestBodyCreateNewEmployee,
  bodyUpdateEmployee,
} from "../../api/bodyReq";
import { Modal } from "react-bootstrap";
import {
  requestGetAllEmployee,
  requestDeleteEmployee,
  requestInsertEmployee,
  requestUpdateEmployee,
} from "../../actions/employeeAction";
import {
  GET_ALL_EMPLOYEE_FAILED,
  GET_ALL_EMPLOYEE_SUCCESS,
  INSRT_NEW_EMPLOYEE_SUCCESS,
  INSRT_NEW_EMPLOYEE_FAILED,
  DELETE_BY_ID_EMPLOYEE_FAILED,
  DELETE_BY_ID_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_FAILED,
  UPDATE_EMPLOYEE_SUCCESS,
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
      status: false,
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
    this.props.requestGetAllEmployee(token);
  }
  onAddNewInformation = () => {
    alert("ok");
  };
  onRefresh() { }
  componentWillReceiveProps(nextProps) {
    const { t } = this.props;
    const {
      onGetInfo,
      isInsertEmployee,
      isDeleteEmployeeById,
      onCallUpdateEmployee,
      token,
    } = this.state;
    console.log("nextProps car:", nextProps);
    if (onGetInfo) {
      if (nextProps.dataResultEmployee) {
        switch (nextProps.actionType) {
          case GET_ALL_EMPLOYEE_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                let data = nextProps.dataResultEmployee;
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
          case GET_ALL_EMPLOYEE_FAILED:
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
    if (isInsertEmployee) {
      if (nextProps.dataResultEmployeeNew) {
        switch (nextProps.actionType) {
          case INSRT_NEW_EMPLOYEE_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                MySwal.fire({
                  icon: "success",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = "/ManageEmployee";
                  }
                });

                this.setState({
                  isInsertEmployee: false,
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
                  isInsertEmployee: false,
                  loading: false,
                  showForm: false,
                });
                break;

              default:
                break;
            }
            break;
            break;
          case INSRT_NEW_EMPLOYEE_FAILED:
            MySwal.fire({
              icon: "error",
              title: t("info"),
              text: nextProps.message,
              footer: `<a href="">${t("YouContactDeveloper")}</a>`,
            });
            this.setState({
              isInsertEmployee: false,
              loading: false,
              showForm: false,
            });
            break;

          default:
            break;
        }
      }
    }
    if (isDeleteEmployeeById) {
      if (nextProps.dataResultEmployeeDelete) {
        switch (nextProps.actionType) {
          case DELETE_BY_ID_EMPLOYEE_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                MySwal.fire({
                  icon: "success",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = "/ManageEmployee";
                  }
                });

                this.setState({
                  isDeleteEmployeeById: false,
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
                  isDeleteEmployeeById: false,
                  loading: false,
                  showDelete: false,
                });
                break;

              default:
                break;
            }
            break;
            break;
          case DELETE_BY_ID_EMPLOYEE_FAILED:
            MySwal.fire({
              icon: "error",
              title: t("info"),
              text: nextProps.message,
              footer: `<a href="">${t("YouContactDeveloper")}</a>`,
            });
            this.setState({
              isDeleteEmployeeById: false,
              loading: false,
              showDelete: false,
            });
            break;

          default:
            break;
        }
      }
    }
    if (onCallUpdateEmployee) {
      if (nextProps.dataResultEmployeeUpdate) {
        switch (nextProps.actionType) {
          case UPDATE_EMPLOYEE_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                MySwal.fire({
                  icon: "success",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = "/ManageEmployee";
                  }
                });

                this.setState({
                  onCallUpdateEmployee: false,
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
                  onCallUpdateEmployee: false,
                  loading: false,
                  showForm: false,
                });
                break;

              default:
                break;
            }
            break;
          case UPDATE_EMPLOYEE_FAILED:
            MySwal.fire({
              icon: "error",
              title: t("info"),
              text: nextProps.message,
              footer: `<a href="">${t("YouContactDeveloper")}</a>`,
            });
            this.setState({
              onCallUpdateEmployee: false,
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
    // console.log("---item----", item);
    if (item) {
      let employee_id = item.employee_id;
      let employeeName = item.employeename;
      let Address = item.address;
      let Position = item.position;
      let Phone = item.phone;
      this.setState({
        employee_id,
        employeeName,
        Address,
        Position,
        Phone,
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
  onChangeTextemployeename = (text) => {
    const value = text.target.value;
    const erroremployeename =
      !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
    this.setState({
      employeename: value,
      erroremployeename,
      employeeName: value,
    });
  };
  onChangeTextaddress = (text) => {
    const value = text.target.value;
    const erroraddress =
      !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
    this.setState({ address: value, erroraddress, Address: value });
  };
  onChangeTextposition = (text) => {
    const value = text.target.value;
    const errorposition =
      !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
    this.setState({
      position: value,
      errorposition,
      Position: value,
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
  onCloseModalForm = () => {
    const { t } = this.props;
    const { employeename, address, position, phone, token, user_id } =
      this.state;
    if (employeename && address && position && phone && token && user_id) {
      this.setState({ loading: true, isInsertEmployee: true });
      let data = requestBodyCreateNewEmployee(
        null,
        employeename,
        address,
        position,
        phone,
        user_id
      );
      this.props.requestInsertEmployee(data, token);
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
      employee_id,
      employeeName,
      Address,
      Phone,
      Position,
      user_id,
      token,
    } = this.state;
    if (
      employee_id &&
      employeeName &&
      Address &&
      user_id &&
      Phone &&
      Position &&
      token
    ) {
      let data = bodyUpdateEmployee(
        employee_id,
        employeeName,
        Address,
        Position,
        Phone,
        user_id
      );
      this.props.requestUpdateEmployee(data, token);
      this.setState({ loading: true, onCallUpdateEmployee: true });
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
      employee_id: item.employee_id,
    });
  };
  onCloseDelete = () => {
    this.setState({ showDelete: false });
  };
  onCloseModalFormInsert = () => {
    this.setState({ showForm: false });
  };
  onAddNew = () => {
    this.setState({ showForm: true, status: false });
  };
  onClickDelete = () => {
    const { t } = this.props;
    const { token } = this.state;
    if (this.state.employee_id) {
      this.setState({ loading: true, isDeleteEmployeeById: true });
      let data = bodyDeletEmployee(this.state.employee_id);
      this.props.requestDeleteEmployee(data, token);
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
      employeename,
      erroremployeename,
      address,
      erroraddress,
      showDelete,
      showForm,
      employeeName,
      Address,
      status,
      Position,
      errorposition,
      position,
      Phone,
      phone,
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
                  <h1>{t("EmployeeInformation")}</h1>
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
                            <th>{t("employee_id")}</th>
                            <th>{t("employeename")}</th>
                            <th>{t("address")}</th>
                            <th>{t("position")}</th>
                            <th>{t("phone")}</th>
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
                                <td>{item.employee_id}</td>
                                <td>{item.employeename}</td>
                                <td>{item.address}</td>
                                <td>{item.position}</td>
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
                        <label>{t("employeename")}</label>
                        <input
                          name="employeename"
                          value={status ? employeeName : employeename}
                          type="text"
                          className={
                            erroremployeename === undefined
                              ? "form-control"
                              : erroremployeename
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                          }
                          placeholder={t("employeename")}
                          onChange={(text) =>
                            this.onChangeTextemployeename(text)
                          }
                        />
                        {erroremployeename ? (
                          <p class="text-danger">{erroremployeename}</p>
                        ) : null}
                      </div>
                      <div class="form-group">
                        <label>{t("position")}</label>
                        <input
                          name="position"
                          value={status ? Position : position}
                          type="text"
                          className={
                            errorposition === undefined
                              ? "form-control"
                              : errorposition
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                          }
                          placeholder={t("position")}
                          onChange={(text) => this.onChangeTextposition(text)}
                        />
                        {errorposition ? (
                          <p class="text-danger">{errorposition}</p>
                        ) : null}
                      </div>
                    </div>

                    <div className="col-md-6 mb-6">
                      <div class="form-group">
                        <label>{t("address")}</label>
                        <input
                          name="address"
                          value={status ? Address : address}
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
                        <label>{t("phone")}</label>
                        <input
                          name="phone"
                          value={status ? Phone : phone}
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
                      !employeename ||
                        erroremployeename ||
                        !address ||
                        erroraddress ||
                        !position ||
                        errorposition ||
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
                      !employeename ||
                        erroremployeename ||
                        !address ||
                        erroraddress ||
                        !position ||
                        errorposition ||
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
    dataResultEmployee: state.employeeReducer.dataResultEmployee,
    actionType: state.employeeReducer.actionType,
    responseCode: state.employeeReducer.responseCode,
    message: state.employeeReducer.message,
    dataResultEmployeeNew: state.employeeReducer.dataResultEmployeeNew,
    dataResultEmployeeDelete: state.employeeReducer.dataResultEmployeeDelete,
    dataResultEmployeeUpdate: state.employeeReducer.dataResultEmployeeUpdate,
    userInfo: state.loginReduce.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestGetAllEmployee: (data) => dispatch(requestGetAllEmployee(data)),
    requestDeleteEmployee: (data, token) =>
      dispatch(requestDeleteEmployee(data, token)),
    requestInsertEmployee: (data, token) =>
      dispatch(requestInsertEmployee(data, token)),
    requestUpdateEmployee: (data, token) =>
      dispatch(requestUpdateEmployee(data, token)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(componentName));
