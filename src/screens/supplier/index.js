import React, { Component } from "react";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import {
  bodyDeleteSupplier,
  requestBodyCreateNewSuppliers,
  bodyUpdateSupplier,
} from "../../api/bodyReq";
import { Modal } from "react-bootstrap";
import {
  requestGetAllSupplier,
  requestDeleteSupplier,
  requestInsertSupplier,
  requestUpdateSupplier,
} from "../../actions/supplierAction";
import {
  GET_ALL_SUPPLIER_FAILED,
  GET_ALL_SUPPLIER_SUCCESS,
  INSRT_NEW_SUPPLIER_SUCCESS,
  INSRT_NEW_SUPPLIER_FAILED,
  DELETE_BY_ID_SUPPLIER_FAILED,
  DELETE_BY_ID_SUPPLIER_SUCCESS,
  UPDATE_SUPPLIER_FAILED,
  UPDATE_SUPPLIER_SUCCESS,
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
    this.props.requestGetAllSupplier(token);
  }
  onAddNewInformation = () => {
    alert("ok");
  };
  onRefresh() { }
  componentWillReceiveProps(nextProps) {
    const { t } = this.props;
    const {
      onGetInfo,
      isInsertSupplier,
      isDeleteSupplierById,
      onCallUpdateSupplier,
      token,
    } = this.state;
    console.log("nextProps car:", nextProps);
    if (onGetInfo) {
      if (nextProps.dataResultSupplier) {
        switch (nextProps.actionType) {
          case GET_ALL_SUPPLIER_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                let data = nextProps.dataResultSupplier;
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
          case GET_ALL_SUPPLIER_FAILED:
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
    if (isInsertSupplier) {
      if (nextProps.dataResultSupplierNew) {
        switch (nextProps.actionType) {
          case INSRT_NEW_SUPPLIER_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                MySwal.fire({
                  icon: "success",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = "/supplierManage";
                  }
                });

                this.setState({
                  isInsertSupplier: false,
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
                  isInsertSupplier: false,
                  loading: false,
                  showForm: false,
                });
                break;

              default:
                break;
            }
            break;
            break;
          case INSRT_NEW_SUPPLIER_FAILED:
            MySwal.fire({
              icon: "error",
              title: t("info"),
              text: nextProps.message,
              footer: `<a href="">${t("YouContactDeveloper")}</a>`,
            });
            this.setState({
              isInsertSupplier: false,
              loading: false,
              showForm: false,
            });
            break;

          default:
            break;
        }
      }
    }
    if (isDeleteSupplierById) {
      if (nextProps.dataResultSupplierDelete) {
        switch (nextProps.actionType) {
          case DELETE_BY_ID_SUPPLIER_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                MySwal.fire({
                  icon: "success",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = "/supplierManage";
                  }
                });

                this.setState({
                  isDeleteSupplierById: false,
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
                  isDeleteSupplierById: false,
                  loading: false,
                  showDelete: false,
                });
                break;

              default:
                break;
            }
            break;
            break;
          case DELETE_BY_ID_SUPPLIER_FAILED:
            MySwal.fire({
              icon: "error",
              title: t("info"),
              text: nextProps.message,
              footer: `<a href="">${t("YouContactDeveloper")}</a>`,
            });
            this.setState({
              isDeleteSupplierById: false,
              loading: false,
              showDelete: false,
            });
            break;

          default:
            break;
        }
      }
    }
    if (onCallUpdateSupplier) {
      if (nextProps.dataResultSupplierUpdate) {
        switch (nextProps.actionType) {
          case UPDATE_SUPPLIER_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                MySwal.fire({
                  icon: "success",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = "/supplierManage";
                  }
                });

                this.setState({
                  onCallUpdateSupplier: false,
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
                  onCallUpdateSupplier: false,
                  loading: false,
                  showForm: false,
                });
                break;

              default:
                break;
            }
            break;
          case UPDATE_SUPPLIER_FAILED:
            MySwal.fire({
              icon: "error",
              title: t("info"),
              text: nextProps.message,
              footer: `<a href="">${t("YouContactDeveloper")}</a>`,
            });
            this.setState({
              onCallUpdateSupplier: false,
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
      let supplier_id = item.supplier_id;
      let supplier_Name = item.supplier_name;
      this.setState({
        supplier_id,
        supplier_Name,
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
  onChangeTextsupplier_name = (text) => {
    const value = text.target.value;
    const errorsupplier_name =
      !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
    this.setState({
      supplier_name: value,
      errorsupplier_name,
      supplier_Name: value,
    });
  };

  onCloseModalForm = () => {
    const { t } = this.props;
    const { supplier_name, token, user_id } = this.state;
    if (supplier_name) {
      this.setState({ loading: true, isInsertSupplier: true });
      let data = requestBodyCreateNewSuppliers(null, supplier_name, user_id);
      this.props.requestInsertSupplier(data, token);
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
    const { supplier_id, supplier_Name, user_id, token } = this.state;
    if (supplier_id && supplier_Name && user_id && token) {
      let data = bodyUpdateSupplier(supplier_id, supplier_Name, user_id);
      this.props.requestUpdateSupplier(data, token);
      this.setState({ loading: true, onCallUpdateSupplier: true });
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
      supplier_id: item.supplier_id,
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
    if (this.state.supplier_id) {
      this.setState({ loading: true, isDeleteSupplierById: true });
      let data = bodyDeleteSupplier(this.state.supplier_id);
      this.props.requestDeleteSupplier(data, token);
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
      supplier_name,
      errorsupplier_name,
      showDelete,
      showForm,
      supplier_Name,
      status,
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
                  <h1>{t("SupplierInformation")}</h1>
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
                            <th>{t("supplier_id")}</th>
                            <th>{t("supplier_name")}</th>
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
                                <td>{item.supplier_id}</td>
                                <td>{item.supplier_name}</td>

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
              size="sm"
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
                    <div className="col-md-12 mb-12">
                      <div class="form-group">
                        <label>{t("supplier_name")}</label>
                        <input
                          name="supplier_name"
                          value={status ? supplier_Name : supplier_name}
                          type="text"
                          className={
                            errorsupplier_name === undefined
                              ? "form-control"
                              : errorsupplier_name
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                          }
                          placeholder={t("supplier_name")}
                          onChange={(text) =>
                            this.onChangeTextsupplier_name(text)
                          }
                        />
                        {errorsupplier_name ? (
                          <p class="text-danger">{errorsupplier_name}</p>
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
                      !supplier_name || errorsupplier_name
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
                      !supplier_name || errorsupplier_name
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
    dataResultSupplier: state.supplierReducer.dataResultSupplier,
    actionType: state.supplierReducer.actionType,
    responseCode: state.supplierReducer.responseCode,
    message: state.supplierReducer.message,
    dataResultSupplierNew: state.supplierReducer.dataResultSupplierNew,
    dataResultSupplierDelete: state.supplierReducer.dataResultSupplierDelete,
    dataResultSupplierUpdate: state.supplierReducer.dataResultSupplierUpdate,
    userInfo: state.loginReduce.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestGetAllSupplier: (data) => dispatch(requestGetAllSupplier(data)),
    requestDeleteSupplier: (data, token) =>
      dispatch(requestDeleteSupplier(data, token)),
    requestInsertSupplier: (data, token) =>
      dispatch(requestInsertSupplier(data, token)),
    requestUpdateSupplier: (data, token) =>
      dispatch(requestUpdateSupplier(data, token)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(componentName));
