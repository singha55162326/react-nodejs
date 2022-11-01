const db = require('../config/db');
class Employees {
  constructor(employee_id, employeename,address, position,phone,user_id) {
    this.employee_id = employee_id;
    this.employeename = employeename;
    this.address = address;
    this.position = position;
    this.phone = phone;
    this.user_id = user_id;
  }
  save() {
    let sql = `INSERT INTO tb_employees(employee_id,employeename,address,position,phone,createdAt,updatedAt,user_id)
    VALUES(NULL,'${this.employeename}','${this.address}','${this.position}','${this.phone}',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,'${this.user_id}')`;
    return db.execute(sql);
  }

  delete() {
    let sql = `DELETE FROM tb_employees WHERE employee_id=${this.employee_id}`;
    return db.execute(sql);
  }
  update() {
    let sql = `UPDATE tb_employees SET employeename='${this.employeename}',address='${this.address}',position='${this.position}',phone='${this.phone}',user_id='${this.user_id}'  WHERE employee_id='${this.employee_id}'`;
    return db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT * FROM `tb_employees` te, tb_users tu WHERE te.user_id = tu.user_id";
    return db.execute(sql);
  }

}
module.exports = Employees;