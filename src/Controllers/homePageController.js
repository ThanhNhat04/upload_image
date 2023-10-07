import sequelize from "../Models/index.js";
import initModels from '../Models/init-models.js';

const model = initModels(sequelize);


export const getImage = async (req, res) => {
    const images = await model.hinh_anh.findAll();
    res.send(images)
}


export const getimgByUser = async (req, res) => {
    let { id } = req.params;

    try {
        let images = await model.hinh_anh.findAll({
            where: { hinh_id: id }
        });

        res.status(200).send(images);
    } catch (error) {
        console.error(error);
        res.status(500).send('Lỗi BE');
    }
};
