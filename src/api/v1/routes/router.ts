import {Request, Response, Router} from "express";
import userRouter from "@routes/userRoutes"
import authRouter from "@routes/authRoutes";
// import {userController} from "@controllers/user";
// import {authenticate} from "@services/authenticator";


function routerInjector(app) {
	app.use("/api/v1/users/", userRouter);
	app.use("/api/v1/auth/", authRouter)
	//all other routers
}

export default routerInjector;