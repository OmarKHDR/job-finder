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
		try {
			await userController.init();
			const uid = await user.creatUser(data);
			logger.info(`trying signing user ${uid} using jwt`)
			const token = signData({
				id: uid,
				email: data.email,
				role: data.role,
			})
			return res.status(200).send({
				status: "success",
				id: uid,
				jwt: token
			});
		} catch(err) {
			logger.error(`Error creating new user: ${err}`);
			return res.status(500).send({
				status: "failed",
				reason: `an internal error has occured`
			});
		}
	}

	static async getAllUsers(req, res) {
		try {
			if (req.user && req.user.role != "admin") {
				logger.error("error retriving users, role is not admin")
				return res.status(403).send({
					status: "failed",
					reason: "no suffecient authorization"
				})
			}
			await userController.init();
			const users = await user.getAllUsers(req.query || {});
			for (let u of users) {
				delete u["password"]
			}
			logger.info(`got users data`)
			return res.status(200).send({
				status: "success",
				users: users
			})
		} catch (err) {
			logger.error(`error getting all Users: ${err}`)
			return res.status(500).send({
				status: "failed",
				users: []
			})
		}
	}


	static async getMyAccount(req, res) {
		try {
			const u = await user.getUser({id: req.user.id})
			if (!u) {
				logger.error(`couldnt find any user with id ${req.user.id}`)
				return res.status(500).send({
					status: "failed",
					reason: "user doesnt exist"
				})
			}

			delete u["password"];
			return res.status(200).send({
				"status": "success",
				"user": u
			})
		} catch (err) {
			logger.error(`Error getting user: ${err}`);
			return res.status(500).send({
				status: "failed",
				reason: "an internal error has occured"
			})
		}
	}
}

export default userController;
