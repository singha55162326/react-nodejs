import { spawn } from "redux-saga/effects";
import { wachLogin } from "./loginSaga";
import {
  wachResultGetAllCar,
  wachResultdataCarDelete,
  wachResultdataCarNew,
  wachResultdataCarUpdate,
} from "./carSaga";

import {
  wachResultGetAllEmployee,
  wachResultdataEmployeeDelete,
  wachResultdataEmployeeNew,
  wachResultdataEmployeeUpdate,
} from "./employeeSaga";

import {
  wachResultGetAllSupplier,
  wachResultdataSupplierDelete,
  wachResultdataSupplierNew,
  wachResultdataSupplierUpdate,
} from "./supplierSaga";

import {
  wachResultGetAllOil,
  wachResultdataOilDelete,
  wachResultdataOilNew,
  wachResultdataOilUpdate,
  wachResultGetAllOilByIdSupplier
} from "./oilSaga";

import {
  wachResultGetAllCustomers,
  wachResultdataCustomersDelete,
  wachResultdataCustomersNew,
  wachResultdataCustomersUpdate,
} from "./customerSaga";
import {
  wachResultGetAllUsers,
  wachResultdataUsersDelete,
  wachResultdataUsersNew,
  wachResultdataUsersUpdate,
} from "./userSaga";
import {
  wachResultGetAllDocument,
  wachResultdataDocumentDelete,
  wachResultdataDocumentNew,
  wachResultdataDocumentUpdate,
  wachResultdataDocumentById
} from "./documentSaga";

import {
  wachResultGetAllOrder,
  wachResultdataOrderDelete,
  wachResultdataOrderNew,
  wachResultdataOrderUpdate,
  wachResultGetMaxIdOrder,
  wachResultdataOrderDetailNew,
  wachResultGetSearchOrder,
  wachResultGetPrintOrder
} from "./orderSaga";

import {
  wachResultGetAllTransports,
  wachResultdataTransportsDelete,
  wachResultdataTransportsNew,
  wachResultdataTransportsUpdate,
  wachResultdataTransportsById
} from "./transportsSaga";

import {wachResultGetAllReport, wachResultGetSumReport} from './reportSaga'

import {wachResultdataImportNew, wachResultGetMaxIdImport, wachResultdataImportDetailNew, wachResultGetPrintImport} from './importSaga'

import { wachResultdataSellNew, wachResultGetMaxIdSell, wachResultdataSellDetailNew, wachResultGetdSell, wachResultGetdPrintSell } from './sellSaga'
export default function* rootSaga() {
  yield [
    yield spawn(wachLogin),
    yield spawn(wachResultGetAllCar),
    yield spawn(wachResultdataCarDelete),
    yield spawn(wachResultdataCarNew),
    yield spawn(wachResultdataCarUpdate),

    yield spawn(wachResultGetAllEmployee),
    yield spawn(wachResultdataEmployeeDelete),
    yield spawn(wachResultdataEmployeeNew),
    yield spawn(wachResultdataEmployeeUpdate),

    yield spawn(wachResultGetAllSupplier),
    yield spawn(wachResultdataSupplierDelete),
    yield spawn(wachResultdataSupplierNew),
    yield spawn(wachResultdataSupplierUpdate),

    yield spawn(wachResultGetAllOil),
    yield spawn(wachResultdataOilDelete),
    yield spawn(wachResultdataOilNew),
    yield spawn(wachResultdataOilUpdate),

    yield spawn(wachResultGetAllCustomers),
    yield spawn(wachResultdataCustomersDelete),
    yield spawn(wachResultdataCustomersNew),
    yield spawn(wachResultdataCustomersUpdate),

    yield spawn(wachResultGetAllUsers),
    yield spawn(wachResultdataUsersDelete),
    yield spawn(wachResultdataUsersNew),
    yield spawn(wachResultdataUsersUpdate),

    yield spawn(wachResultGetAllDocument),
    yield spawn(wachResultdataDocumentDelete),
    yield spawn(wachResultdataDocumentNew),
    yield spawn(wachResultdataDocumentUpdate),

    yield spawn(wachResultGetAllOrder),
    yield spawn(wachResultdataOrderDelete),
    yield spawn(wachResultdataOrderNew),
    yield spawn(wachResultdataOrderUpdate),

    yield spawn(wachResultGetAllTransports),
    yield spawn(wachResultdataTransportsDelete),
    yield spawn(wachResultdataTransportsNew),
    yield spawn(wachResultdataTransportsUpdate),
    yield spawn(wachResultGetAllOilByIdSupplier),

    yield spawn(wachResultdataSellNew),
    yield spawn(wachResultGetMaxIdSell),
    yield spawn(wachResultdataSellDetailNew),

    yield spawn(wachResultdataOrderDetailNew),
    yield spawn(wachResultGetMaxIdOrder),

    yield spawn(wachResultGetSearchOrder),
    yield spawn(wachResultdataImportNew),
    yield spawn(wachResultGetMaxIdImport),
    yield spawn(wachResultdataImportDetailNew),
    yield spawn(wachResultGetAllReport),
    yield spawn(wachResultGetSumReport),
    yield spawn(wachResultGetdSell),
    yield spawn(wachResultGetdPrintSell),
    yield spawn(wachResultGetPrintOrder),
    yield spawn(wachResultGetPrintImport),
    yield spawn(wachResultdataDocumentById),
    yield spawn(wachResultdataTransportsById),
    

  ];
}
