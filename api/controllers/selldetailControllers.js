const Selldetail = require("../models/selldetail");
const UpdateOil = require("../models/updateOil");
const { SUCCESS, INPUT_NULL } = require("../config/errorCode");
const { MS_SUCCESS, MS_INPUT_NULL } = require("../config/message");


exports.reqSaveSellDetail = async (req, res, next) => {
    try {
        let { listData } = req.body;
        let data = listData
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                let selldetail = new Selldetail(data[i].sales_id, data[i].Qty, data[i].Price, data[i].oil_id, data[i].total, data[i].cus_id, data[i].user_id)
                selldetail = await selldetail.save();

                let updataOil = new UpdateOil(data[i].Qty ,data[i].oil_id);
                updataOil = await updataOil.update();

            }
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
