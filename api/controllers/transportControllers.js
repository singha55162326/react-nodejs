const Transports = require("../models/transports");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { SUCCESS, INPUT_NULL } = require("../config/errorCode");
const { MS_SUCCESS, MS_INPUT_NULL } = require("../config/message");
exports.getAllTransports = async (req, res, next) => {
  try {
    let [transports, _] = await Transports.findAll();
    res.status(200).json({
      message: MS_SUCCESS,
      responseCode: SUCCESS,
      pag: 1,
      per_pag: 10,
      total: transports.length,
      status: true,
      transports,
    });
  } catch (error) {
    next(error);
  }
};
// transport_id	id_documents	dimention	order_id	oil_id	company	supplier_id	car_id	user_id
exports.createNewTransports = async (req, res, next) => {
  try {
    let {
      transport_id,
      id_documents,
      dimention,
      order_id,
      oil_id,
      company,
      supplier_id,
      car_id,
      user_id,
    } = req.body;
    if (
      id_documents &&
      order_id &&
      oil_id &&
      company &&
      supplier_id &&
      dimention &&
      user_id
    ) {
      //
      let transports = new Transports(
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
      transports = await transports.save();
      res.status(200).json({
        message: MS_SUCCESS,
        responseCode: SUCCESS,
        status: true,
      });
    } else {
      res.json({
        message: MS_INPUT_NULL,
        responseCode: INPUT_NULL,
        status: false,
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.updateTransports = async (req, res, next) => {
  try {
    let {
      transport_id,
      id_documents,
      dimention,
      order_id,
      oil_id,
      company,
      supplier_id,
      car_id,
      user_id,
    } = req.body;
    if (
      transport_id &&
      id_documents &&
      dimention &&
      order_id &&
      oil_id &&
      company &&
      supplier_id &&
      car_id &&
      user_id
    ) {
      let transports = new Transports(
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
      transports = await transports.update();
      res.status(200).json({
        message: MS_SUCCESS,
        responseCode: SUCCESS,
        status: true,
      });
    } else {
      res.json({
        message: MS_INPUT_NULL,
        responseCode: INPUT_NULL,
        status: false,
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.deleteTransports = async (req, res, next) => {
  try {
    let { transport_id } = req.body;
    if (transport_id) {
      let transports = new Transports(transport_id);
      transports = await transports.delete();
      res.status(200).json({
        message: MS_SUCCESS,
        responseCode: SUCCESS,
        status: true,
      });
    } else {
      res.json({
        message: MS_INPUT_NULL,
        responseCode: INPUT_NULL,
        status: false,
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};


exports.findTransById = async (req, res, next) => {
  try {
    let transport_id = req.params.id;
    let [transports, _] = await Transports.findTransById(transport_id)
    res.status(200).json({
      message: MS_SUCCESS,
      responseCode: SUCCESS,
      status: true,
      transports,
     });
  } catch (error) {
    console.log(error);
    next(error);
  }
};