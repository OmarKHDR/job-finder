import { DataTypes, Model } from "sequelize";
import { getDB } from "@config/db";
import logger from "@utils/logger";

class JobUsers extends Model {}

const jobUsersSchema = {
	job_user_id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true
	},
	user_id: {
		type: DataTypes.UUID,
	},
	job_id: {
		type: DataTypes.UUID,
	},
	role: {
		type: DataTypes.STRING,
		allowNull: false
	}
}


async function initJobUsersModel() {
	try {
		const sequelize = await getDB();
		JobUsers.init(jobUsersSchema, {
			sequelize,
			modelName: 'JobUsers',
			tableName: 'job_users',
			timestamps: true
		});
		return JobUsers;
	} catch (error) {
		logger.error('Failed to initialize JobUsers model:', error);
		throw error;
	}
}

export default initJobUsersModel;