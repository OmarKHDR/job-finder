import user from "@services/user.services";
import Crypto from "@utils/hashing";
import logger from "@utils/logger";

export default async function userVerification(req, res, next) {
	if (req.body) {
		try {
			if (req.user) {
				res.status(401).send({
					status: "failed",
					reason: "trying to be smart"
				})
			}
			const email = req.body.email;
			const password = req.body.password;
			if (!email || !password) {
				return res.status(401).send({
					status: "failed",
					reason: `no email or password was provided provided`
				})
			}
			const u = await user.getUser({email: email})
			if (!u) {
				res.status(401).send({
				status: "failed",
				reason: "wrong password or email"
				})
			}
			const isUser =  await Crypto.verifyPassword(password, u.password);
			if (isUser) {
				req.user = {
					email: u.email,
					role: u.role,
					id: u.id
				}
				return next()
			}
			return res.status(401).send({
				status: "failed",
				reason: "wrong password or email"
			})
		} catch(err) {
			return res.status(500).send({
				status: "failed",
				reason: `an internal error occured`
			})
		}
	}
}