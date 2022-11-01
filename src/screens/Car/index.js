import React, { Component } from "react";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import {
  bodyDeleteCar,
  requestBodyCreateNewCars,
  bodyUpdateCar,
} from "../../api/bodyReq";
import { Modal } from "react-bootstrap";
import {
  requestGetAllCar,
  requestDeleteCar,
  requestInsertCar,
  requestUpdateCar,
} from "../../actions/carAction";
import {
  GET_ALL_CAR_FAILED,
  GET_ALL_CAR_SUCCESS,
  INSRT_NEW_CAR_SUCCESS,
  INSRT_NEW_CAR_FAILED,
  DELETE_BY_ID_CAR_FAILED,
  DELETE_BY_ID_CAR_SUCCESS,
  UPDATE_CAR_FAILED,
  UPDATE_CAR_SUCCESS,
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
    this.props.requestGetAllCar(token);
  }
  onAddNewInformation = () => {
    alert("ok");
  };
  onRefresh() {}
  componentWillReceiveProps(nextProps) {
    const { t } = this.props;
    const { onGetInfo, isInsertCar, isDeleteCarById, onCallUpdateCar, token } =
      this.state;
    console.log("nextProps car:", nextProps);
    if (onGetInfo) {
      if (nextProps.dataResultCar) {
        switch (nextProps.actionType) {
          case GET_ALL_CAR_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                let data = nextProps.dataResultCar;
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
          case GET_ALL_CAR_FAILED:
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
    if (isInsertCar) {
      if (nextProps.dataResultCarNew) {
        switch (nextProps.actionType) {
          case INSRT_NEW_CAR_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                MySwal.fire({
                  icon: "success",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = "/CarInformation";
                  }
                });

                this.setState({
                  isInsertCar: false,
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
                  isInsertCar: false,
                  loading: false,
                  showForm: false,
                });
                break;

              default:
                break;
            }
            break;
            break;
          case INSRT_NEW_CAR_FAILED:
            MySwal.fire({
              icon: "error",
              title: t("info"),
              text: nextProps.message,
              footer: `<a href="">${t("YouContactDeveloper")}</a>`,
            });
            this.setState({
              isInsertCar: false,
              loading: false,
              showForm: false,
            });
            break;

          default:
            break;
        }
      }
    }
    if (isDeleteCarById) {
      if (nextProps.dataResultCarDelete) {
        switch (nextProps.actionType) {
          case DELETE_BY_ID_CAR_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                MySwal.fire({
                  icon: "success",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = "/CarInformation";
                  }
                });

                this.setState({
                  isDeleteCarById: false,
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
                  isDeleteCarById: false,
                  loading: false,
                  showDelete: false,
                });
                break;

              default:
                break;
            }
            break;
            break;
          case DELETE_BY_ID_CAR_FAILED:
            MySwal.fire({
              icon: "error",
              title: t("info"),
              text: nextProps.message,
              footer: `<a href="">${t("YouContactDeveloper")}</a>`,
            });
            this.setState({
              isDeleteCarById: false,
              loading: false,
              showDelete: false,
            });
            break;

          default:
            break;
        }
      }
    }
    if (onCallUpdateCar) {
      if (nextProps.dataResultCarUpdate) {
        switch (nextProps.actionType) {
          case UPDATE_CAR_SUCCESS:
            switch (nextProps.responseCode) {
              case "00000":
                MySwal.fire({
                  icon: "success",
                  title: t("info"),
                  text: nextProps.message,
                  footer: `<a href="">${t("YouContactDeveloper")}</a>`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = "/CarInformation";
                  }
                });

                this.setState({
                  onCallUpdateCar: false,
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
                  onCallUpdateCar: false,
                  loading: false,
                  showForm: false,
                });
                break;

              default:
                break;
            }
            break;
          case UPDATE_CAR_FAILED:
            MySwal.fire({
              icon: "error",
              title: t("info"),
              text: nextProps.message,
              footer: `<a href="">${t("YouContactDeveloper")}</a>`,
            });
            this.setState({
              onCallUpdateCar: false,
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
      let carId = item.car_id;
      let carName = item.car_name;
      let dimenTion = item.dimention;
      this.setState({
        carId,
        carName,
        dimenTion,
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
  onChangeTextcar_name = (text) => {
    const value = text.target.value;
    const errorcar_name =
      !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
    this.setState({ car_name: value, errorcar_name, carName: value });
  };
  onChangeTextdimention = (text) => {
    const value = text.target.value;
    const errordimention =
      !value || value.length < 1 ? "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖຶກຕ້ອງ" : null;
    this.setState({ dimention: value, errordimention, dimenTion: value });
  };
  onCloseModalForm = () => {
    const { t } = this.props;
    const { car_name, dimention, token } = this.state;
    if (car_name && dimention) {
      this.setState({ loading: true, isInsertCar: true });
      // let token = this.state.token
      let data = requestBodyCreateNewCars(null, car_name, dimention, "1");
      this.props.requestInsertCar(data, token);
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
    const { carId, carName, dimenTion, user_id, token } = this.state;
    if (carId && carName && dimenTion && user_id && token) {
      let data = bodyUpdateCar(carId, carName, dimenTion, user_id);
      this.props.requestUpdateCar(data, token);
      this.setState({ loading: true, onCallUpdateCar: true });
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
      car_id: item.car_id,
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
    if (this.state.car_id) {
      this.setState({ loading: true, isDeleteCarById: true });
      let data = bodyDeleteCar(this.state.car_id);
      this.props.requestDeleteCar(data, token);
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
      car_name,
      errorcar_name,
      dimention,
      errordimention,
      showDelete,
      showForm,
      carName,
      dimenTion,
      status,
      loading
    } = this.state;
    return (
      <div>
         {loading ? <LoadingComponet /> : null}
      <div className="content-wrapper body">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>{t("CarInformation")}</h1>
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
                          <th>{t("car_id")}</th>
                          <th>{t("car_name")}</th>
                          <th>{t("dimention")}</th>
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
                                <td>{item.car_id}</td>
                                <td>{item.car_name}</td>
                                <td>{item.dimention}</td>
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
                {status ? t("formUpdateInformation") : t("formAddInformation")}
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
                      <label>{t("car_name")}</label>
                      <input
                        name="car_name"
                        value={status ? carName : car_name}
                        type="text"
                        className={
                          errorcar_name === undefined
                            ? "form-control"
                            : errorcar_name
                            ? "form-control is-invalid"
                            : "form-control is-valid"
                        }
                        placeholder={t("car_name")}
                        onChange={(text) => this.onChangeTextcar_name(text)}
                      />
                      {errorcar_name ? (
                        <p class="text-danger">{errorcar_name}</p>
                      ) : null}
                    </div>
                  </div>

                  <div className="col-md-6 mb-6">
                    <div class="form-group">
                      <label>{t("dimention")}</label>
                      <input
                        name="dimention"
                        value={status ? dimenTion : dimention}
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
                    !car_name || errorcar_name || !dimention || errordimention
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
                    !car_name || errorcar_name || !dimention || errordimention
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
    dataResultCar: state.carReducer.dataResultCar,
    actionType: state.carReducer.actionType,
    responseCode: state.carReducer.responseCode,
    message: state.carReducer.message,
    dataResultCarNew: state.carReducer.dataResultCarNew,
    dataResultCarDelete: state.carReducer.dataResultCarDelete,
    dataResultCarUpdate: state.carReducer.dataResultCarUpdate,
    userInfo: state.loginReduce.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestGetAllCar: (data) => dispatch(requestGetAllCar(data)),
    requestDeleteCar: (data, token) => dispatch(requestDeleteCar(data, token)),
    requestInsertCar: (data, token) => dispatch(requestInsertCar(data, token)),
    requestUpdateCar: (data, token) => dispatch(requestUpdateCar(data, token)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(componentName));
