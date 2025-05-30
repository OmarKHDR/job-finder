import user from '@services/user.services';
import { signData } from '@auth/jwt';
import logger from '@utils/logger';


class userController {
	private static isInitialized = false;
	private static async init() {
		if(!userController.isInitialized) {
			await user.init();
			userController.isInitialized = true;
		}
	}

	static async createUser(req, res) {
		const data = {
			firstname: req.body? req.body.firstname:null,
			lastname: req.body? req.body.lastname:null,
			age: req.body? req.body.age:null,
			email: req.body? req.body.email:null,
			password: req.body? req.body.password:null,
			role: req.body? req.body.role:null,
			interests: req.body? req.body.interests:null,
			experience: req.body? req.body.experience:null,
			specialization: req.body? req.body.specialization:null
		}
		console.log(data);
		try {
			await userController.init();
			await user.creatUser(data);
			const token = signData({
				email: data.email,
				role: data.role,
			})
			res.status(200).send({
				status: "success",
				jwt: token
			});
		} catch(err) {
			logger.error(`Error inside the user Controller: ${err}`);
			res.status(500).send({
				status: "failed",
				reason: `${err}`
			});
		}
	}

	static async getAllUsers(req, res) {
		try {
			await userController.init();
			const users = await user.getAllUsers();
			for (let u of users) {
				delete u["password"]
			}
			res.status(200).send({
				status: "success",
				users: users
			})
		} catch (err) {
			logger.error(`error inside User controller: ${err}`)
			res.status(500).send({
				status: "failed",
				users: []
			})
		}
	}

	static async getUser(req, res) {
		let u;
		if (req.params.id) {
			u = await user.getUser({id: req.params.id})
		} else if (req.query.email) {
			u = await user.getUser({email: req.query.email});
		}
		delete u["password"];
		res.status(200).send({
			"status": "success",
			"user": u
		})
	}
}

export default userController;
