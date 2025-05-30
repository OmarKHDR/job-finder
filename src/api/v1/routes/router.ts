import {Request, Response, Router} from "express";
import userRouter from "@routes/userRoutes"
import authRouter from "@routes/authRoutes";
// import {userController} from "@controllers/user";
// import {authenticate} from "@services/authenticator";


function routerInjector(app) {
	app.use("/users/", userRouter);
	app.use("/auth/", authRouter)
	//all other routers
}

export default routerInjector;