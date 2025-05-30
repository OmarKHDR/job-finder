import jwt from 'jsonwebtoken';


const jwt_secret = process.env.JWT_SECRET;
const revokedTokens = new Set();


export function signData(payload) {
    payload["jti"] = generateId()
	return jwt.sign(payload, jwt_secret, {expiresIn: '1h'});
}

export function verifyToken(token) {
    try {
        const payload = jwt.verify(token, jwt_secret);
        if (revokedTokens.has(payload.jti)) {
            return {
                user:null,
                reason: "token is revoked"
            }
        }
        return {
            user: payload
        };
    } catch (err) {
        return {
            user: null,
            reason: `${err}`
        };
    }
}


export function revokeToken(tokenId){ 
    revokedTokens.add(tokenId);
}

function generateId() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
}