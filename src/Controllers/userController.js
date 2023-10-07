import sequelize from "../Models/index.js";
import initModels from '../Models/init-models.js';

const model = initModels(sequelize);

export const updateUser = async (req, res) => {
    try {
        let { id } = req.params;
        let { email, mat_khau, ho_ten, tuoi, anh_dai_dien } = req.body;

        await model.nguoi_dung.update(
            { email, mat_khau, ho_ten, tuoi, anh_dai_dien },
            { where: { nguoi_dung_id: id } }
        );
        res.status(200).send("Cập nhật thành công");
    } catch (err) {
        console.error(err);
        res.status(500).send("Có lỗi xảy ra trong quá trình cập nhật");
    }
};

import bcrypt from "bcrypt";

export const signUp = async (req, res) => {
    try {
        let { ho_ten, email, mat_khau } = req.body;
        let checkEmail = await model.nguoi_dung.findAll({
            where: {
                email
            }
        });
        if (checkEmail.length > 0) {
            res.send("email đã tồn tại")
            return
        }
        let newData = {
            ho_ten,
            email,
            mat_khau : bcrypt.hashSync(mat_khau,10)
        }
        await model.nguoi_dung.create(newData);
        res.send("Thêm mới thành công")
    } catch (err) {
        console.log(err)
        res.status(500).send("Lỗi BE")
    }
}


// export const login = async (req, res) => {
//     try {
//         let { email, mat_khau } = req.body;
//         let checkEmail = await model.nguoi_dung.findOne({
//             where: {
//                 email,
//                 mat_khau
//             }
//         })
//         if (checkEmail) {
//             if (checkEmail.mat_khau == mat_khau) {
//                 res.status(202).send("token")
//             } else {
//                 res.send.status(505).send("mat khau không đúng")
//             }
//         } else {
//             res.status(505).send("email không đúng")
//         }
//         res.send(data)

//     } catch (error) {
//         console.login(error);
//         res.status(500).send("Lỗi BE")

//     }
// }


import jwt from 'jsonwebtoken';
import { taoToken } from '../Config/jwtConfig.js';

export const login = async (req, res) => {
    try {
        let { email, pass_word } = req.body;

        // kiểm tra sự tồn tại của user
        let checkEmail = await model.user.findOne({
            where: {
                email
            }
        });

        if (checkEmail) {

            let checkPass = bcrypt.compareSync(pass_word, checkEmail.pass_word);
            if (checkPass == true) {
                let token = taoToken(checkEmail);

                res.status(200).send(token);
            } else {
                res.status(400).send("Mật khẩu không đúng");
            }
        }
        else {
            res.status(400).send("Email không đúng");
        }
    }
    catch {
        res.status(500).send("Lỗi BE");
    }
}