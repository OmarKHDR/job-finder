import { Sequelize } from "sequelize";
import { env } from 'process';
import { getDB } from "@config/db";
import logger from "@utils/logger";


class user {
	private db!: Sequelize;
	async init() {
		this.db = await getDB();
	}

	


}

