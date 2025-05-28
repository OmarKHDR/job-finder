import { Sequelize } from "sequelize";
import { env } from 'process';
import { getDB } from "@config/db";
import Crypto from "@utils/hashing";
import logger from "@utils/logger";

//crud
class user {
	private static db;
	private static User;
	static async init() {
		user.db = await getDB();
		user.User = user.db.models.User;
		
	}

	static async creatUser(data) {
		const neededData = {
			"email": true, "password": true, "firstname":true,
			"lastname":true, "role":true, "specialization":true, 
			"age":false, "experience": false, "interests": false,
		}
		try {
			for (let key in neededData) {
				if (neededData[key] && !data[key]) {
					throw Error(`no sufficient data: key ${key} is missing`)
				}
			}
			const passwordhash = await Crypto.getHash(data.password);
			data.password = passwordhash;
			await user.User.create(data);
			logger.info(`new user created: ${data.email}`)
		} catch(err) {
			logger.error(`error occured while creating the user ${data.email}: ${err}`);
			throw new Error(`${err}`)
		}
	}

	static async getAllUsers() {
		try {
			const users = await user.User.findAll();
			const payload = []
			for (let u of users){
				payload.push({
					id: u.id,
					firstname: u.firstname,
					lastname: u.lastname,
					password: u.password,
					email: u.email,
					age: u.age,
					role: u.role,
					specialization: u.specialization,
					experience: u.experience,
					interests: u.interests
				})
			}
			return payload;
		} catch(err) {
			logger.error(`error ocurred while loading users: ${err}`);
			throw new Error(`error getting all users: ${err}`)
		}
	}

	static async getUser(data) {
		try {
			const u = await user.User.findOne({where: data})
				return {
					id: u.id,
					firstname: u.firstname,
					lastname: u.lastname,
					password: u.password,
					email: u.email,
					age: u.age,
					role: u.role,
					specialization: u.specialization,
					experience: u.experience,
					interests: u.interests
				}
		} catch(err) {
			logger.error(`error ocurred while loading user: ${err}`);
			throw new Error(`Error: getting user: ${err}`)
		}
	}

	static async deleteUser(user) {
		try {
			const email = user.email;
			await user.distroy();
			logger.info(`deleted user: ${email}`);
		} catch(err) {
			logger.error(`error while deleting user`)
			throw new Error(`Error: deleting account: ${err}`)
		}
	}

	static async updateUser(user, data) {
		try{
			user.update(data);
		} catch(err) {
			logger.error(`error while updating data of user: ${user.email}`);
			throw new Error(`Error: updating user account`)
		}
	}
}

export default user;