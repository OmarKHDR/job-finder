import {Request, Response, Router} from "express";
// import {userController} from "@controllers/user";
// import {authenticate} from "@services/authenticator";

const router = Router()

router.get("/user/:id", (req: Request, res:Response) => {
	res.send(`hello world${req.params.id}`);
});
router.get("/", (req: Request, res:Response) => {
	res.send(`hello world6`);
});



export default router;