export function requestBodyLogin(userName, password) {
  let data = {

    "username": `${userName}`,
    "password": `${password}`

  }
  return data
}

export function requestBodyCreateNewCars(car_id, car_name, dimention, user_id) {
  let data = {
    "car_id": car_id,
    "car_name": car_name,
    "dimention": dimention,
    "user_id": user_id
  }
  return data
}

export function bodyDeleteCar(car_id) {
  let data = {
    "car_id": car_id
  }
  return data
}

export function bodyUpdateCar(carId, carName, dimenTion, user_id) {
  let data = {
    "car_id": carId,
    "car_name": carName,
    "dimention": dimenTion,
    "user_id": user_id
  }
  return data
}

export function requestBodyCreateNewEmployee(employee_id, employeename, address, position, phone, user_id) {
  let data = {
    "employee_id": employee_id,
    "employeename": employeename,
    "address": address,
    "position": position,
    "phone": phone,
    "user_id": user_id
  }
  return data
}
export function bodyUpdateEmployee(employee_id, employeename, address, position, phone, user_id) {
  let data = {
    "employee_id": employee_id,
    "employeename": employeename,
    "address": address,
    "position": position,
    "phone": phone,
    "user_id": user_id
  }
  return data
}

export function bodyDeletEmployee(employee_id) {
  let data = {
    "employee_id": employee_id
  }
  return data
}


export function requestBodyCreateNewSuppliers(supplier_id, supplier_name, user_id) {
  let data = {
    "supplier_id": supplier_id,
    "supplier_name": supplier_name,
    "user_id": user_id
  }
  return data
}

export function bodyDeleteSupplier(supplier_id) {
  let data = {
    "supplier_id": supplier_id
  }
  return data
}

export function bodyUpdateSupplier(supplier_id, supplier_name, user_id) {
  let data = {
    "supplier_id": supplier_id,
    "supplier_name": supplier_name,
    "user_id": user_id
  }
  return data
}

export function requestBodyCreateNewOils(oils_id, oil_name, status, qty, price, user_id, supplier_id) {
  let data = {
    "oils_id": oils_id,
    "oil_name": oil_name,
    "status": status,
    "qty": qty,
    "price": price,
    "user_id": user_id,
    "supplier_id": supplier_id
  }
  return data
}

export function bodyDeleteOil(oils_id) {
  let data = {
    "oils_id": oils_id
  }
  return data
}

export function bodyUpdateOil(oils_id, oil_name, status, qty, price, user_id, Supplier_id) {
  let data = {
    "oils_id": oils_id,
    "oil_name": oil_name,
    "status": status,
    "qty": qty,
    "price": price,
    "user_id": user_id,
    "supplier_id": Supplier_id
  }
  return data
}


export function requestBodyCreateNewCustomerss(cus_id, cus_name, address, contact, status, phone, user_id) {
  let data = {
    "cus_id": cus_id,
    "cus_name": cus_name,
    "address": address,
    "contact": contact,
    "status": status,
    "phone": phone,
    "user_id": user_id
  }
  return data
}

export function bodyDeleteCustomers(cus_id) {
  let data = {
    "cus_id": cus_id
  }
  return data
}
//
export function bodyUpdateCustomers(cus_id, cus_name, address, contact, status, phone, user_id) {
  let data = {
    "cus_id": cus_id,
    "cus_name": cus_name,
    "address": address,
    "contact": contact,
    "status": status,
    "phone": phone,
    "user_id": user_id
  }
  return data
}


export function requestBodyCreateNewUsers(user_id, username, prasswold, role, level, CreatedBy) {
  let data = {
    "user_id": user_id,
    "username": username,
    "prasswold": prasswold,
    "role": role,
    "level": level,
    "CreatedBy": CreatedBy
  }
  return data
}

export function bodyDeleteUsers(user_id) {
  let data = {
    "user_id": user_id
  }
  return data
}

export function bodyUpdateUsers(user_id, username, prasswold, role, level, CreatedBy) {
  let data = {
    "user_id": user_id,
    "username": username,
    "prasswold": prasswold,
    "role": role,
    "level": level,
    "CreatedBy": CreatedBy
  }
  return data
}

export function requestBodyCreateNewDocument(id_documents, address, order_id, contact, traid, date, company, dimention, phone, service, price, user_id) {
  let data = {
    "id_documents": id_documents,
    "address": address,
    "order_id": order_id,
    "contact": contact,
    "traid": traid,
    "date": date,
    "company": company,
    "dimention": dimention,
    "phone": phone,
    "service": service,
    "price": price,
    "user_id": user_id
  }
  return data
}

export function bodyDeleteDocument(id_documents) {
  let data = {
    "id_documents": id_documents
  }
  return data
}

export function bodyUpdateDocument(id_documents, address, order_id, contact, traid, date, company, dimention, phone, service, price, user_id) {
  let data = {
    "id_documents": id_documents,
    "address": address,
    "order_id": order_id,
    "contact": contact,
    "traid": traid,
    "date": date,
    "company": company,
    "dimention": dimention,
    "phone": phone,
    "service": service,
    "price": price,
    "user_id": user_id
  }
  return data
}
// transport_id	id_documents	dimention	order_id	oil_id	company	supplier_id	car_id	user_id
export function requestBodyCreateNewTransports(transport_id, id_documents, dimention, order_id, oil_id, company, supplier_id, car_id, user_id) {
  let data = {
    "transport_id": transport_id,
    "id_documents": id_documents,
    "dimention": dimention,
    "order_id": order_id,
    "oil_id": oil_id,
    "company": company,
    "supplier_id": supplier_id,
    "car_id": car_id,
    "user_id": user_id
  }
  return data
}

export function bodyDeleteTransports(transport_id) {
  let data = {
    "transport_id": transport_id
  }
  return data
}

export function bodyUpdateTransports(transport_id, id_documents, dimention, order_id, oil_id, company, supplier_id, car_id, user_id) {
  let data = {
    "transport_id": transport_id,
    "id_documents": id_documents,
    "dimention": dimention,
    "order_id": order_id,
    "oil_id": oil_id,
    "company": company,
    "supplier_id": supplier_id,
    "car_id": car_id,
    "user_id": user_id
  }
  return data
}

export function bodyInsertSell(sales_id, qty, total, status_sell, cus_id, user_id) {
  let data = {
    "sales_id": sales_id,
    "qty": qty,
    "total": total,
    "status_sell": status_sell,
    "cus_id": cus_id,
    "user_id": user_id
  }
  return data
}

export function bodyInsertSellDetail(listData) {
  let data = {
    "listData": listData
  }
  return data
}

export function bodyInsertOrder(orders_id, service, total, company, date, qty, user_id, status_order, id_sup) {
  let data = {
    "orders_id": orders_id,
    "service": service,
    "total": total,
    "company": company,
    "date": date,
    "qty": qty,
    "user_id": user_id,
    "status_order": status_order,
    "supplier_id": id_sup,
  }
  return data
}

export function bodyInsertOrderDetail(listData) {
  let data = {
    "listData": listData
  }
  return data
}

export function bodyInsertImport(ImpID, qty, total, ImpDate, order_id, id_sup) {
  let data = {
    "ImpID": ImpID,
    "Qty": qty,
    "Price": total,
    "ImpDate": ImpDate,
    "Orders_id": order_id,
    "supplier_id": id_sup,
  }
  return data
}
export function bodyInsertImportDetail(listData) {
  let data = {
    "listData": listData
  }
  return data
}
