import { verifyToken, revokeToken, signData } from "@auth/jwt";
import user from "@services/user.services"


export default class authController {
	static async refreshToken(req, res) {
		try {
			const payload = {}
			if (req && req.user) {
				payload["email"] = req.user.email
				payload["role"] = req.user.role
				payload["id"] = req.user.id
				revokeToken(req.user.jti)
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

	static async createToken(req, res) {
		try {
			const payload = {}
			if (req && req.user) {
				payload["email"] = req.user.email
				payload["role"] = req.user.role
				payload["id"] = req.user.id
				const token = signData(payload);
				return res.status(200).send({
					status: "success", 
					token: token
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


	static async logout(req, res) {
		try {
			if (req && req.user) {
				revokeToken(req.user.jti)
				return res.status(200).send({
					status: "success",
					reason: "logged out successfully"
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
				reason: `internal error occured`
			})
		}
	}
}


