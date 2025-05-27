import {Request, Response, Router} from "express";
import userRouter from "@routes/userRoutes"
// import {userController} from "@controllers/user";
// import {authenticate} from "@services/authenticator";


function routerFactory(app) {
	app.use("/user/", userRouter);
	//all other routers
}

export default routerFactory;