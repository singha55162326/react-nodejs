const db = require("../config/db");
class Transports {
    //transport_id	id_documents	dimention	order_id	oil_id	company	supplier_id	car_id	user_id
    constructor(transport_id, id_documents, dimention, order_id, oil_id, company, supplier_id,car_id, user_id) {
        this.transport_id = transport_id;
        this.id_documents = id_documents;
        this.dimention = dimention;
        this.order_id = order_id;
        this.oil_id = oil_id;
        this.company = company;
        this.supplier_id = supplier_id;
        this.car_id = car_id;
        this.user_id = user_id;
    }
    save() {
        let sql = `INSERT INTO tb_transports(transport_id, id_documents, dimention, order_id, oil_id, company, supplier_id, car_id,createdAt,updatedAt, user_id)
    VALUES(NULL,'${this.id_documents}','${this.dimention}','${this.order_id}','${this.oil_id}','${this.company}','${this.supplier_id}','${this.car_id}',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,'${this.user_id}')`;
        return db.execute(sql);
    }

    delete() {
        let sql = `DELETE FROM tb_transports WHERE transport_id=${this.transport_id}`;
        return db.execute(sql);
    }
    update() {
        let sql = `UPDATE tb_transports SET id_documents='${this.id_documents}',dimention='${this.dimention}', order_id='${this.order_id}', oil_id='${this.oil_id}', company='${this.company}', supplier_id='${this.supplier_id}', car_id='${this.car_id}', user_id='${this.user_id}' WHERE transport_id='${this.transport_id}'`;
        return db.execute(sql);
    }

    static findAll() {
        let sql = "SELECT * FROM tb_transports tt, tb_documents td, tb_oils toi, tb_suppliers ts, tb_cars tc, tb_users tu, tb_sales tsell WHERE tt.id_documents = td.id_documents AND tt.order_id = tsell.sales_id AND tt.oil_id = toi.oils_id AND tt.supplier_id = ts.supplier_id AND tt.car_id = tc.car_id AND tt.user_id = tu.user_id";
        return db.execute(sql);
    }

    static findTransById(transport_id) {
        let sql = `SELECT tt.transport_id,
        td.id_documents,
        td.address,
        td.contact,
        td.company,
        tt.dimention,
        toi.oils_id,
        toi.oil_name,
        tdd.Qty,
        tdd.Price,
        ts.supplier_name,
        tc.car_name,
        tu.username
 FROM   tb_transports tt,
        tb_documents td,
        tb_sales tod,
        tb_oils toi,
        tb_suppliers ts,
        tb_cars tc,
        tb_users tu,
        tb_selldetail tdd
 WHERE  tt.id_documents = td.id_documents
        AND tt.order_id = tod.sales_id
        AND tt.oil_id = toi.oils_id
        AND tt.supplier_id = ts.supplier_id
        AND tt.car_id = tc.car_id
        AND tt.user_id = tu.user_id
        AND tod.sales_id = tdd.sales_id
        AND tt.transport_id = ${transport_id}`;
        return db.execute(sql);
      }

}
module.exports = Transports;
