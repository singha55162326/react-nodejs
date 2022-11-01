import { combineReducers } from "redux";
import loginReduce from "./loginReducer";
import carReducer from './carReducer'
import employeeReducer from './employeeReducer'
import supplierReducer from './supplierReducer'
import oilReducer from './oilReducer'
import customerReducer from './customerReducer'
import userReducer from './userReducer'
import documentReducer from './documentReducer'
import orderReducer from './orderReducer'
import transportsReducer from './transportsReducer'
import sellReducer from './sellReducer'
import importReducer from './importReducer'
import reportReducer from './reportReducer'

const AppReducer = combineReducers({
  loginReduce,
  carReducer,
  employeeReducer,
  supplierReducer,
  oilReducer,
  customerReducer,
  userReducer,
  documentReducer,
  orderReducer,
  transportsReducer,
  sellReducer,
  importReducer,
  reportReducer
});

export default AppReducer;
