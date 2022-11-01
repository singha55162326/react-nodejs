const db = require('../config/db');
class Order {
  constructor(orders_id, service, total, company, date, qty, user_id, status_order, supplier_id) {
    this.orders_id = orders_id;
    this.service = service;
    this.total = total;
    this.company = company;
    this.date = date;
    this.qty = qty;
    this.user_id = user_id;
    this.status_order = status_order;
    this.supplier_id = supplier_id;
  }
  save() {
    let sql = `INSERT INTO tb_orders(orders_id,service,total,company,date,qty,createdAt,updatedAt,user_id,status_order,supplier_id)
    VALUES(NULL,'${this.service}','${this.total}','${this.company}','${this.date}','${this.qty}',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,'${this.user_id}','${this.status_order}','${this.supplier_id}')`;
    console.log('sql:', sql)
    return db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT * FROM `v_order` WHERE `status_order` = 1;";
    return db.execute(sql);
  }

  static findMaxId() {
    let sql = "SELECT MAX(`orders_id`) as orders_id FROM `tb_orders`";
    return db.execute(sql);
  }


  static findById(orders_id) {
    let sql = `SELECT * FROM v_order_search WHERE orders_id='${orders_id}'`;
    return db.execute(sql);
  }

  static orderByIdPrint(id) {
    let sql = `SELECT tod.orders_id, tod.company,tod.service,tod.date,ts.supplier_name, toi.oil_name,tos.Qty,tos.Price, tu.username FROM tb_orders tod, tb_users tu, tb_suppliers ts, tb_orderdetail tos, tb_oils toi
    WHERE tod.orders_id = tos.orders_id
    AND tod.user_id = tu.user_id
    AND tod.supplier_id = ts.supplier_id
    AND tos.oils_id = toi.oils_id
    and tod.orders_id = ${id}`;
    console.log('-----', sql)
    return db.execute(sql);
  }



}
module.exports = Order;