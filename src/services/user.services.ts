import { Sequelize } from "sequelize";
import { env } from 'process';
import { getDB } from "@config/db";
import logger from "@utils/logger";


class user {
	private db;
	private User;
	async init() {
		this.db = await getDB();
		this.User = this.db.models.User;
	}

	


}

