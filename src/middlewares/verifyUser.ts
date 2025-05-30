import user from "@services/user.services";
import Crypto from "@utils/hashing";
import logger from "@utils/logger";

export default async function userVerification(req, res, next) {
	if (req.body) {
		try {
			const email = req.body.email;
			const password = req.body.password;
			const u = await user.getUser({email: email})
			const isUser =  await Crypto.verifyPassword(password, u.password);
			if (isUser) {
				return next()
			}
			return res.status(401).send({
				status: "failed",
				reason: "wrong password or email"
			})
		} catch(err) {
			return res.status(500).send({
				status: "failed",
				reason: `an error occured ${err}`
			})
		}
	}
}