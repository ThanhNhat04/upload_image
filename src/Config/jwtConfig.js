import jwt from 'jsonwebtoken';

const checkToken = (req, res, next) => {

    try {
        let { token } = req.headers;

        // kiểm tra token hợp lệ
        if (verifyToken(token)) {

            let checkRole = decodeToken(token);
            next()
        }

    } catch (ex) {
        res.status(403).send("Không có quyền truy cập");

    }
}

const taoToken = (data) => {
    return jwt.sign({ data }, "NGOCTRINH", { expiresIn: "5m" })
}

const verifyToken = (token) => {
    return jwt.verify(token, "NGOCTRINH");
}
const decodeToken = (token) => {
    return jwt.decode(token);
}

export { checkToken, taoToken }