import React, { Component } from "react";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import {
  requestBodyCreateNewUsers,
  bodyUpdateUsers,
  bodyDeleteUsers,
} from "../../api/bodyReq";
import { Modal, Form } from "react-bootstrap";
import {
  requestGetAllUsers,
  requestDeleteUsers,
  requestInsertUsers,
  requestUpdateUsers,
} from "../../actions/userAction";
import {
  GET_ALL_USERS_FAILED,
  GET_ALL_USERS_SUCCESS,
  INSRT_NEW_USERS_SUCCESS,
  INSRT_NEW_USERS_FAILED,
  DELETE_BY_ID_USERS_FAILED,
  DELETE_BY_ID_USERS_SUCCESS,
  UPDATE_USERS_FAILED,
  UPDATE_USERS_SUCCESS,
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
    let CreatedBy = userInfo.auth[0].user_id;
    this.loadData(token);
    this.setState({ token, CreatedBy });
  }
  loadData(token) {
    this.setState({ loading: true, onGetInfo: true });
    this.props.requestGetAllUsers(token);
  }
  onAddNewInformation = () => {
    alert("ok");
  };
  onRefresh() { }
  componentWillReceiveProps(nextProps) {
    const { t } = this.props;
    const {
      onGetInfo,
      isInsertUsers,
      isDeleteUsersById,
      onCallUpdateUsers,
      token,
    } = this.state;
    console.log("nextProps car:", nextProps);
    if (onGetInfo) {
      if (nextProps.dataResultUsers) {
        switch (nextProps.actionType) {
          case GET_ALL_USERS_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                let data = nextProps.dataResultUsers;
                this.setState({ onGetInfo: false, loading: false, data });
                break;
              case nextProps.responseCode:
                MySwal.fire({
                  icon: "error",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouLevelDeveloper")}</a>`,
                });
                this.setState({ onGetInfo: false, loading: false });
                break;

              default:
                break;
            }
            break;
          case GET_ALL_USERS_FAILED:
            MySwal.fire({
              icon: "error",
              title: t("info"),
              text: nextProps.message,
              footer: `<a href="">${t("YouLevelDeveloper")}</a>`,
            });
            this.setState({ onGetInfo: false, loading: false });
            break;

          default:
            break;
        }
      }
    }
    if (isInsertUsers) {
      if (nextProps.dataResultUsersNew) {
        switch (nextProps.actionType) {
          case INSRT_NEW_USERS_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                MySwal.fire({
                  icon: "success",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouLevelDeveloper")}</a>`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = "/UserScreen";
                  }
                });

                this.setState({
                  isInsertUsers: false,
                  loading: false,
                  showForm: false,
                });
                break;
              case nextProps.responseCode:
                MySwal.fire({
                  icon: "error",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouLevelDeveloper")}</a>`,
                });
                this.setState({
                  isInsertUsers: false,
                  loading: false,
                  showForm: false,
                });
                break;

              default:
                break;
            }
            break;
            break;
          case INSRT_NEW_USERS_FAILED:
            MySwal.fire({
              icon: "error",
              title: t("info"),
              text: nextProps.message,
              footer: `<a href="">${t("YouLevelDeveloper")}</a>`,
            });
            this.setState({
              isInsertUsers: false,
              loading: false,
              showForm: false,
            });
            break;

          default:
            break;
        }
      }
    }
    if (isDeleteUsersById) {
      if (nextProps.dataResultUsersDelete) {
        switch (nextProps.actionType) {
          case DELETE_BY_ID_USERS_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                MySwal.fire({
                  icon: "success",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouLevelDeveloper")}</a>`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = "/UserScreen";
                  }
                });

                this.setState({
                  isDeleteUsersById: false,
                  loading: false,
                  showDelete: false,
                });
                break;
              case nextProps.responseCode:
                MySwal.fire({
                  icon: "error",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouLevelDeveloper")}</a>`,
                });
                this.setState({
                  isDeleteUsersById: false,
                  loading: false,
                  showDelete: false,
                });
                break;

              default:
                break;
            }
            break;
            break;
          case DELETE_BY_ID_USERS_FAILED:
            MySwal.fire({
              icon: "error",
              title: t("info"),
              text: nextProps.message,
              footer: `<a href="">${t("YouLevelDeveloper")}</a>`,
            });
            this.setState({
              isDeleteUsersById: false,
              loading: false,
              showDelete: false,
            });
            break;

          default:
            break;
        }
      }
    }
    if (onCallUpdateUsers) {
      if (nextProps.dataResultUsersUpdate) {
        switch (nextProps.actionType) {
          case UPDATE_USERS_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                MySwal.fire({
                  icon: "success",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouLevelDeveloper")}</a>`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = "/UserScreen";
                  }
                });

                this.setState({
                  onCallUpdateUsers: false,
                  loading: false,
                  showForm: false,
                });
                break;
              case nextProps.responseCode:
                MySwal.fire({
                  icon: "error",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouLevelDeveloper")}</a>`,
                });
                this.setState({
                  onCallUpdateUsers: false,
                  loading: false,
                  showForm: false,
                });
                break;

              default:
                break;
            }
            break;
          case UPDATE_USERS_FAILED:
            MySwal.fire({
              icon: "error",
              title: t("info"),
              text: nextProps.message,
              footer: `<a href="">${t("YouLevelDeveloper")}</a>`,
            });
            this.setState({
              onCallUpdateUsers: false,
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
      let user_id = item.user_id;
      let userName = item.username;
      let Role = item.role;
      let Prasswold = item.prasswold;
      let Level = item.level;
      this.setState({
        user_id,
        userName,
        Role,
        Prasswold,
        Level,
        statusModle: true,
        showForm: true,
      });
    } else {
      MySwal.fire({
        icon: "error",
        title: t("info"),
        text: t("InformationOncomplete"),
        footer: `<a href="">${t("YouLevelDeveloper")}</a>`,
      });
    }
  };
  onChangeTextusername = (text) => {
    const value = text.target.value;
    const errorusername =
      !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
    this.setState({
      username: value,
      errorusername,
      userName: value,
    });
  };
  onChangeTextrole = (text) => {
    const value = text.target.value;
    const errorrole =
      !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
    this.setState({
      role: value,
      errorrole,
      Role: value,
    });
  };

  onChangeTextlevel = (text) => {
    const value = text.target.value;
    const errorlevel =
      !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
    this.setState({
      level: value,
      errorlevel,
      Level: value,
    });
  };
  onChangeTextprasswold = (text) => {
    const value = text.target.value;
    const errorprasswold =
      !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
    this.setState({
      prasswold: value,
      errorprasswold,
      Prasswold: value,
    });
  };
  onCloseModalForm = () => {
    const { t } = this.props;
    const { username, role, level, prasswold, token, CreatedBy } = this.state;
    if (username && role && level && prasswold && token && CreatedBy) {
      this.setState({ loading: true, isInsertUsers: true });
      let data = requestBodyCreateNewUsers(
        null,
        username,
        prasswold,
        role,
        level,
        CreatedBy
      );

      this.props.requestInsertUsers(data, token);
    } else {
      MySwal.fire({
        icon: "error",
        title: t("info"),
        text: t("InformationOncomplete"),
        footer: `<a href="">${t("YouLevelDeveloper")}</a>`,
      });
    }
  };
  onCloseModalFormUpdate = () => {
    const { t } = this.props;
    const { user_id, userName, Level, Prasswold, Role, token, CreatedBy } =
      this.state;
    if (
      user_id &&
      userName &&
      Prasswold &&
      Role &&
      Level &&
      token
    ) {
      let data = bodyUpdateUsers(
        user_id,
        userName,
        Prasswold,
        Role,
        Level,
        CreatedBy
      );
      this.props.requestUpdateUsers(data, token);
      this.setState({ loading: true, onCallUpdateUsers: true });
    } else {
      MySwal.fire({
        icon: "error",
        title: t("info"),
        text: t("InformationOncomplete"),
        footer: `<a href="">${t("YouLevelDeveloper")}</a>`,
      });
    }
  };
  onPressDelete = (item) => {
    this.setState({
      showDelete: true,
      user_id: item.user_id,
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
    if (this.state.user_id) {
      this.setState({ loading: true, isDeleteUsersById: true });
      let data = bodyDeleteUsers(this.state.user_id);
      this.props.requestDeleteUsers(data, token);
    } else {
      MySwal.fire({
        icon: "error",
        title: t("info"),
        text: t("InformationOncomplete"),
        footer: `<a href="">${t("YouLevelDeveloper")}</a>`,
      });
    }
  };
  render() {
    const { t } = this.props;
    const {
      data,
      username,
      errorusername,
      showDelete,
      showForm,
      userName,
      Prasswold,
      errorlevel,
      level,
      Level,
      prasswold,
      errorprasswold,
      statusModle,
      role,
      Role,
      errorrole,
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
                  <h1>{t("UsersInformation")}</h1>
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
                            <th>{t("user_id")}</th>
                            <th>{t("username")}</th>
                            <th>{t("role")}</th>
                            <th>{t("level")}</th>
                            <th>{t("createdAt")}</th>
                            <th>{t("updatedAt")}</th>

                            <th>{t("option")}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data
                            ? data.map((item, i) => (
                              <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{item.user_id}</td>
                                <td>{item.username}</td>

                                <td>{item.role == 1 ? 'admin' : 'Employee'}</td>
                                <td>{item.level}</td>

                                <td>
                                  <Moment format="YYYY/MM/DD">{item.createdAt}</Moment>
                                </td>
                                <td>
                                  <Moment format="YYYY/MM/DD">{item.updatedAt}</Moment>
                                </td>

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
                        <label>{t("username")}</label>
                        <input
                          name="username"
                          value={statusModle ? userName : username}
                          type="text"
                          className={
                            errorusername === undefined
                              ? "form-control"
                              : errorusername
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                          }
                          placeholder={t("username")}
                          onChange={(text) => this.onChangeTextusername(text)}
                        />
                        {errorusername ? (
                          <p class="text-danger">{errorusername}</p>
                        ) : null}
                      </div>
                      <div class="form-group">
                          <label>{t("level")}</label>
                          <Form.Control
                            as="select"
                            onChange={(text) => this.onChangeTextlevel(text)}
                          >
                            <option></option>
                            <option value="1">admin</option>
                            <option value="2">Employee</option>
                          </Form.Control>
                        </div>



                      </div>

                      <div className="col-md-6 mb-6">

                        <div class="form-group">
                          <label>{t("role")}</label>
                          <Form.Control
                            as="select"
                            onChange={(text) => this.onChangeTextrole(text)}
                          >
                            <option></option>
                            <option value="1">admin</option>
                            <option value="2">Employee</option>
                          </Form.Control>
                        </div>
                        <div class="form-group">
                          <label>{t("prasswold")}</label>
                          <input
                            name="prasswold"
                            value={statusModle ? Prasswold : prasswold}
                            type="text"
                            className={
                              errorprasswold === undefined
                                ? "form-control"
                                : errorprasswold
                                  ? "form-control is-invalid"
                                  : "form-control is-valid"
                            }
                            placeholder={t("prasswold")}
                            onChange={(text) => this.onChangeTextprasswold(text)}
                          />
                          {errorprasswold ? (
                            <p class="text-danger">{errorprasswold}</p>
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
                        !username ||
                          errorusername ||
                          !level ||
                          errorlevel ||
                          !prasswold ||
                          errorprasswold
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
                        !username ||
                          errorusername ||
                          !level ||
                          errorlevel ||
                          !prasswold ||
                          errorprasswold ||
                          !role ||
                          errorrole
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
          dataResultUsers: state.userReducer.dataResultUsers,
    actionType: state.userReducer.actionType,
    responseCode: state.userReducer.responseCode,
    message: state.userReducer.message,
    dataResultUsersNew: state.userReducer.dataResultUsersNew,
    dataResultUsersDelete: state.userReducer.dataResultUsersDelete,
    dataResultUsersUpdate: state.userReducer.dataResultUsersUpdate,
    userInfo: state.loginReduce.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
          requestGetAllUsers: (data) => dispatch(requestGetAllUsers(data)),
    requestDeleteUsers: (data, token) =>
      dispatch(requestDeleteUsers(data, token)),
    requestInsertUsers: (data, token) =>
      dispatch(requestInsertUsers(data, token)),
    requestUpdateUsers: (data, token) =>
      dispatch(requestUpdateUsers(data, token)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(componentName));
