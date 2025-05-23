// src/config/db.ts
import { Sequelize } from 'sequelize';
import logger from '@utils/logger';

let sequelize: Sequelize | null = null;
let connecting: Promise<Sequelize> | null = null;

//singleton
export async function getDB(): Promise<Sequelize> {
	if (sequelize) return sequelize; 

	if (!connecting) {
		connecting = (async () => {
			const instance = new Sequelize(
				process.env.DATABASE_NAME!,
				process.env.DATABASE_USERNAME!,
				process.env.DATABASE_PASSWORD!,
				{
					host: process.env.DATABASE_HOST,
					dialect: 'mysql',
					logging: false,
				}
			);

			try {
				await instance.authenticate();
				logger.info('Database connected');
				sequelize = instance; // cache the connected instance
				return sequelize;
			} catch (err) {
				logger.error(`Database connection failed: ${err}`);
				connecting = null;
				throw err;
			}
		})();
	}

	return connecting;
}
