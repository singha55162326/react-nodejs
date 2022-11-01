const db = require('../config/db');
class Import {
    constructor(ImpID, Qty, Price, ImpDate, Orders_id, supplier_id) {
        this.ImpID = ImpID;
        this.Qty = Qty;
        this.Price = Price;
        this.ImpDate = ImpDate;
        this.Orders_id = Orders_id;
        this.supplier_id = supplier_id;
    }
    save() {
        let sql = `INSERT INTO tb_import(ImpID,Qty,Price,ImpDate,Orders_id,supplier_id)
    VALUES(NULL,'${this.Qty}','${this.Price}','${this.ImpDate}','${this.Orders_id}','${this.supplier_id}')`;
        console.log('sql:', sql)
        return db.execute(sql);
    }

    //   static findAll() {
    //     let sql = "SELECT * from v_order";
    //     return db.execute(sql);
    //   }

      static findMaxId() {
        let sql = "SELECT MAX(`ImpID`) as ImpID FROM `tb_import`";
        return db.execute(sql);
      }


    // static findById(ImpID) {
    //   let sql = `SELECT * FROM v_order_search WHERE ImpID='${ImpID}'`;
    //   return db.execute(sql);
    // }

    static importById(ImpID) {
      let sql = `SELECT tp.ImpID, tpd.Qty,tpd.Price,tp.ImpDate,ts.supplier_name,tod.orders_id,tod.company,tos.oil_name FROM tb_import tp, tb_import_detail tpd, tb_suppliers ts, tb_orders tod, tb_oils tos
      WHERE tp.ImpID = tpd.ImpID
      AND tpd.oils_id = tos.oils_id
      AND tp.supplier_id = ts.supplier_id
      AND tp.Orders_id = tod.orders_id 
      AND tp.ImpID = ${ImpID}`;
      return db.execute(sql);
    }

}
module.exports = Import;