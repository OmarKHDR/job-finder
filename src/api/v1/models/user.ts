import { Sequelize } from "sequelize";
import { env } from 'process';


class user {
	constructor() {
		try {
			this.sequelize = new Sequelize(
			process.env.DATABASE_NAME,
			process.env.DATABASE_USERNAME,
			process.env.DATABASE_PASSWORD,
			{
				host: process.env.DATABASE_HOST,
				dialect: 'mysql'
			}
			);
		} catch (err) {
			
		}
	}
}

