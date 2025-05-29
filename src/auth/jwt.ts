import jwt from 'jsonwebtoken';

const jwt_secret = process.env.JWT_SECRET;

export function signData(payload) {
	return jwt.sign(payload, jwt_secret, {expiresIn: '1h'});
}

export function verifyToken(token) {
    try {
        const payload = jwt.verify(token, jwt_secret);
        return payload;
    } catch (err) {
        return null;
    }
}
