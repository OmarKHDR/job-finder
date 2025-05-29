import jwt from 'jsonwebtoken';

const jwt_secret = process.env.JWT_SECRET;

export function signToken(payload) {
	return jwt.sign(payload, jwt_secret, {expiresIn: '1h'});
}

export function verifyToken(token) {
    try {
        const payload = jwt.verify(token, jwt_secret);
        return { user: payload };
    } catch (err) {
        return { user: null };
    }
}
