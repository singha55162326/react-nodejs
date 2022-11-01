import axios from "axios";

function baseApi(token) {
  return axios.create({
    baseURL: "http://localhost:81",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    timeout: 60000,
  });
}

function callAuth() {
  return axios.create({
    baseURL: "http://localhost:81",
    headers: {
      "Content-Type": "application/json"
    },
    timeout: 60000,
  });
}

export function* userLoginApi(data) {
  const api = callAuth();
  return yield api.post("/auth", data);
}
// cars
export function* apiResultGetAllCar(token) {
  const api = baseApi(token);
  return yield api.get("/cars");
}

export function* apiResultdataCarDelete(data, token) {
  const api = baseApi(token);
  return yield api.post("/cars/deleteCars", data);
}

export function* apiResultdataCarNew(data, token) {
  const api = baseApi(token);
  return yield api.post("/cars", data);
}

export function* apiResultdataCarUpdate(data, token) {
  const api = baseApi(token);
  return yield api.post("/cars/updateCars", data);
}
// employees
export function* apiResultGetAllEmployee(token) {
  const api = baseApi(token);
  return yield api.get("/employees");
}

export function* apiResultdataEmployeeDelete(data, token) {
  const api = baseApi(token);
  return yield api.post("/employees/deleteEmployees", data);
}

export function* apiResultdataEmployeeNew(data, token) {
  const api = baseApi(token);
  return yield api.post("/employees", data);
}

export function* apiResultdataEmployeeUpdate(data, token) {
  const api = baseApi(token);
  return yield api.post("/employees/updateEmployees", data);
}
// supplier
export function* apiResultGetAllSupplier(token) {
  const api = baseApi(token);
  return yield api.get("/supplier");
}

export function* apiResultdataSupplierDelete(data, token) {
  const api = baseApi(token);
  return yield api.post("/supplier/deleteSuppliers", data);
}

export function* apiResultdataSupplierNew(data, token) {
  const api = baseApi(token);
  return yield api.post("/supplier", data);
}

export function* apiResultdataSupplierUpdate(data, token) {
  const api = baseApi(token);
  return yield api.post("/supplier/updateSuppliers", data);
}
// oil
export function* apiResultGetAllOil(token) {
  const api = baseApi(token);
  return yield api.get("/oils");
}

export function* apiResultdataOilDelete(data, token) {
  const api = baseApi(token);
  return yield api.post("/oils/deleteOils", data);
}

export function* apiResultdataOilNew(data, token) {
  const api = baseApi(token);
  return yield api.post("/oils", data);
}

export function* apiResultdataOilUpdate(data, token) {
  const api = baseApi(token);
  return yield api.post("/oils/updateOils", data);
}
//
export function* apiResultGetAllOilByIdSupplier(data, token) {
  const api = baseApi(token);
  return yield api.get(`/oils/${data}`);
}


//Customers
export function* apiResultGetAllCustomers(token) {
  const api = baseApi(token);
  return yield api.get("/customers");
}

export function* apiResultdataCustomersDelete(data, token) {
  const api = baseApi(token);
  return yield api.post("/customers/deleteCustomers", data);
}

export function* apiResultdataCustomersNew(data, token) {
  const api = baseApi(token);
  return yield api.post("/customers", data);
}

export function* apiResultdataCustomersUpdate(data, token) {
  const api = baseApi(token);
  return yield api.post("/customers/updateCustomers", data);
}

//Users
export function* apiResultGetAllUsers(token) {
  const api = baseApi(token);
  return yield api.get("/users");
}

export function* apiResultdataUsersDelete(data, token) {
  const api = baseApi(token);
  return yield api.post("/users/deleteUser", data);
}

export function* apiResultdataUsersNew(data, token) {
  const api = baseApi(token);
  return yield api.post("/users", data);
}

export function* apiResultdataUsersUpdate(data, token) {
  const api = baseApi(token);
  return yield api.post("/users/updateUser", data);
}
// document
export function* apiResultGetAllDocument(token) {
  const api = baseApi(token);
  return yield api.get("/document");
}

export function* apiResultdataDocumentDelete(data, token) {
  const api = baseApi(token);
  return yield api.post("/document/deleteDocuments", data);
}

export function* apiResultdataDocumentNew(data, token) {
  const api = baseApi(token);
  return yield api.post("/document", data);
}

export function* apiResultdataDocumentUpdate(data, token) {
  const api = baseApi(token);
  return yield api.post("/document/updateDocuments", data);
}

export function* apiResultdataDocumentById(data, token) {
  const api = baseApi(token);
  return yield api.get(`/document/${data}`);
}

export function* apiResultGetAllOrder(token) {
  const api = baseApi(token);
  return yield api.get("/order");
}

export function* apiResultGetSearchOrder(data,token) {
  const api = baseApi(token);
  return yield api.get(`/order/${data}`);
}

export function* apiResultGetPrintOrder(data,token) {
  const api = baseApi(token);
  return yield api.get(`/order/print/${data}`);
}

export function* apiResultdataOrderDelete(data, token) {
  const api = baseApi(token);
  return yield api.post("/order/deleteOrders", data);
}

export function* apiResultdataOrderNew(data, token) {
  const api = baseApi(token);
  return yield api.post("/order", data);
}

export function* apiResultdataOrderUpdate(data, token) {
  const api = baseApi(token);
  return yield api.post("/order/updateOrders", data);
}

// transport
export function* apiResultGetAllTransports(token) {
  const api = baseApi(token);
  return yield api.get("/transport");
}

export function* apiResultdataTransportsDelete(data, token) {
  const api = baseApi(token);
  return yield api.post("/transport/deleteTransports", data);
}

export function* apiResultdataTransportsNew(data, token) {
  const api = baseApi(token);
  return yield api.post("/transport", data);
}

export function* apiResultdataTransportsUpdate(data, token) {
  const api = baseApi(token);
  return yield api.post("/transport/updateTransports", data);
}

//sell
export function* apiResultdataSellNew(data, token) {
  const api = baseApi(token);
  return yield api.post("/sell", data);
}

export function* apiResultGetMaxIdSell(token) {
  const api = baseApi(token);
  return yield api.get("/sell/max");
}


export function* apiResultGetPrintSell(data, token) {
  const api = baseApi(token);
  return yield api.get(`/sell/${data}`);
}

export function* apiResultdataSellDetailNew(data, token) {
  const api = baseApi(token);
  return yield api.post("/selldetail", data);
}

export function* apiResultGetMaxIdOrder(token) {
  const api = baseApi(token);
  return yield api.get("/order/max");
}


export function* apiResultdataOrderDetailNew(data, token) {
  const api = baseApi(token);
  return yield api.post("/orderdetail", data);
}

export function* apiResultdataImportNew(data, token) {
  const api = baseApi(token);
  return yield api.post("/import", data);
}

export function* apiResultGetMaxIdImport(token) {
  const api = baseApi(token);
  return yield api.get("/import/max");
}

export function* apiResultdataImportDetailNew(data, token) {
  const api = baseApi(token);
  return yield api.post("/importdetail", data);
}

//apiResultGetPrintImport
export function* apiResultGetPrintImport(data, token) {
  const api = baseApi(token);
  return yield api.get(`/import/${data}`);
}
export function* apiResultGetAllReport(data, token) {
  const api = baseApi(token);
  return yield api.get(`/report/${data}`);
}

export function* apiResultGetSumReport(token) {
  const api = baseApi(token);
  return yield api.get(`/report`);
}

//apiResultGetSell


export function* apiResultGetSell(token) {
  const api = baseApi(token);
  return yield api.get(`/sell`);
}


export function* apiResultdataTransportsById(data, token) {
  const api = baseApi(token);
  return yield api.get(`/transport/${data}`);
}
