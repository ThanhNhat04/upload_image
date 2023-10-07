import sequelize from "../Models/index.js";
import initModels from '../Models/init-models.js';

const model = initModels(sequelize);

export const getCommentById = async (req, res) => {
    try {
        const { id } = req.params;
        const binhLuan = await model.binh_luan.findAll({
            where: {
                hinh_id: id,
            },
        });
        res.send(binhLuan);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Lỗi server' });
    }
};

export const getImgByID = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await model.hinh_anh.findOne({
            where: {
                hinh_id: id,
            },
            include: ['nguoi_dung_id_nguoi_dungs'],
        });
        res.status(404).send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send("Lỗi BE");
    }
};

export const commnentImg = async (req, res) => {
    try {
        let { binh_luan_id, noi_dung_id, hinh_id, ngay_binh_luan, noi_dung } = req.body;

        const data = await model.binh_luan.create(
            { binh_luan_id, noi_dung_id, hinh_id, ngay_binh_luan, noi_dung }, {
        });
        res.status(404).send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send("Lỗi BE");
    }
};

export const getImageStatus = async (req, res) => {
    const { id } = req.params;
  
    try {
      const image = await Image.findByPk(id);
  
      if (!image) {
        return res.status(404).send("error");
      }
  
      return res.status(202).send("lưu hình ảnh thành công");
    } catch (error) {
      console.error(error);
      return res.status(500).send("Lỗi BE");
    }
  };