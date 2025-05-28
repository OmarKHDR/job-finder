import {Request, Response, Router} from "express";
import userRouter from "@routes/userRoutes"
// import {userController} from "@controllers/user";
// import {authenticate} from "@services/authenticator";


function routerInjector(app) {
	app.use("/users/", userRouter);
	//all other routers
}

export default routerInjector;