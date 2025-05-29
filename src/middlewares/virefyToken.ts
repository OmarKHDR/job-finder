import { verifyToken } from "@auth/jwt";
import { Request, Response, NextFunction } from "express";

export function jwtVerification(req: Request, res: Response, next: NextFunction) {
	const authHeader = req.headers.authorization;
	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		return res.status(401).send({
			status: "failed",
			reason: "Not authenticated: Missing or invalid Authorization header"
		});
	}

	const token = authHeader.split(" ")[1];
	const user = verifyToken(token);

	if (user) {
		req["user"] = user;
		return next();
	}

	return res.status(401).send({
		status: "failed",
		reason: "Not authenticated: Invalid token"
	});
}
