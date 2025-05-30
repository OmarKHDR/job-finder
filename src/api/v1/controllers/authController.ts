import { verifyToken, revokeToken, signData } from "@auth/jwt";
import user from "@services/user.services"


export default class authController {
	static async refreshToken(req, res) {
		try {
			const authHeader = req.headers.authorization;
			const token = authHeader.split(" ")[1];
			const u = verifyToken(token)
			const payload = {}
			if (req && req.user) {
				payload["email"] = u.user.email
				payload["role"] = u.user.role
				revokeToken(u.user.jti)
				const newToken = signData(payload);
				return res.status(200).send({
					status: "success", 
					token: newToken
				});
			} else {
				return res.status(401).send({
					status: "failed", 
					reason: "no token or token incorrect"
				})
			}
		} catch (err) {
			return res.status(500).send({
				status: "failed",
				reason: `${err}`
			})
		}
	}

	static async createNewToken(req, res) {
		try {
			const email = req.body.email;
			const u = await user.getUser({email: email})
			const payload = {}
			if (req && req.body) {
				payload["email"] = u.email
				payload["role"] = u.role
				const newToken = signData(payload);
				return res.status(200).send({
					status: "success", 
					token: newToken
				});
			} else {
				return res.status(401).send({
					status: "failed", 
					reason: "no email or passsword provided"
				})
			}
		} catch (err) {
			return res.status(500).send({
				status: "failed",
				reason: `${err}`
			})
		}
	}
}


