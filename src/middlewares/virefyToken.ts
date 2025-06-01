import { verifyToken } from "@auth/jwt";
import logger from "@utils/logger";

export function jwtVerification(req, res, next) {
	const authHeader = req.headers.authorization;
	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		logger.error("user authorization header is miss configured")
		return res.status(401).send({
			status: "failed",
			reason: "Not authenticated: Missing or invalid Authorization header"
		});
	}

	const token = authHeader.split(" ")[1];
	const payload = verifyToken(token);

	if (payload.user) {
		req.user = payload.user
		return next();
	}

	return res.status(401).send({
		status: "failed",
		reason: `Not authenticated: ${payload.reason}`
	});
}
