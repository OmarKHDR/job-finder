import { verifyToken } from "@auth/jwt";


export function jwtVerification(req, res, next) {
	const authHeader = req.headers.authorization;
	if (!authHeader || !authHeader.startsWith("Bearer ")) {
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
