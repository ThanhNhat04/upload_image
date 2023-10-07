import sequelize from "../Models/index.js";
import initModels from '../Models/init-models.js';

const model = initModels(sequelize);

export const informationUser = async (req, res) => {
    let { id } = req.params;

    try {
        let data = await model.nguoi_dung.findAll({
            where: { nguoi_dung_id: id }
        });
        res.status(200).send(data)
    } catch (error) {
        console.error(error);
        res.status(500).send('Lỗi BE');
    }
}

export const deleteImgById = async (req, res) => {
    let { id } = req.params;
    try {
        let data = model.hinh_anh.destroy({
            where: { hinh_anh_id: id }
        });
        res.status(202).send("Xóa thành công")
    } catch (error) {
        console.error(error);
        res.status(500).send('Lỗi BE');
    }
}

export const getimgCreateByUserId = async (req, res) => {
    try {
        const id = req.params;
        model.luu_anh.findAll({
            where: { nguoi_dung_id: id },
        })

    } catch (err) {
        console.error(err);
        res.status(500).send("Lỗi Be");
    }
};

export const getimgByUserId = async (req, res) => {
    try {
        const id = req.params;
        model.hinh_anh.findAll({
            where: { nguoi_dung_id: id },
        })
    } catch (err) {
        console.error(err);
        res.status(500).send("Lỗi Be");
    }
};

