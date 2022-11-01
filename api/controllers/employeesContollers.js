const Employees = require("../models/employees");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { SUCCESS, INPUT_NULL } = require("../config/errorCode");
const { MS_SUCCESS, MS_INPUT_NULL } = require("../config/message");
exports.getAllEmployees = async (req, res, next) => {
  try {
    let [employees, _] = await Employees.findAll();
    res.status(200).json({
      message: MS_SUCCESS,
      responseCode: SUCCESS,
      pag: 1,
      per_pag: 10,
      total: employees.length,
      status: true,
      employees,
    });
  } catch (error) {
    next(error);
  }
};

exports.createNewEmployees = async (req, res, next) => {
  try {
    let { employee_id, employeename, address, position, phone, user_id } =
      req.body;
    if (employeename && address && position && phone && user_id) {
      let employees = new Employees(
        employee_id,
        employeename,
        address,
        position,
        phone,
        user_id
      );
      employees = await employees.save();
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

exports.updateEmployees = async (req, res, next) => {
  try {
    let { employee_id, employeename, address, position, phone, user_id } =
      req.body;
    if (employeename && address && position && phone && user_id) {
      let employees = new Employees(
        employee_id,
        employeename,
        address,
        position,
        phone,
        user_id
      );
      employees = await employees.update();
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

exports.deleteEmployees = async (req, res, next) => {
  try {
    let { employee_id } = req.body;
    if (employee_id) {
      let employees = new Employees(employee_id);
      employees = await employees.delete();
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
