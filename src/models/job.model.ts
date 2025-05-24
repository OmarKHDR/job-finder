import { DataTypes, FLOAT, Model } from "sequelize";
import { getDB } from "@config/db";
import logger from "@utils/logger";

class Job extends Model {}

const jobSchema = {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	location: {
		type: DataTypes.STRING,
	},
	location_type: {
		type: DataTypes.STRING,
		allowNull: false
	},
	description: {
		type: DataTypes.TEXT,
	},
	salary: {
		type: DataTypes.FLOAT
	},
	employement_type: {
		type: DataTypes.STRING,
		allowNull: false
	},
	field: {
		type: DataTypes.STRING,
		allowNull: false
	},
	company_id: {
		type: DataTypes.UUID,
	}
}


async function initJobModel() {
	try {
		const sequelize = await getDB();
		Job.init(jobSchema, { 
			sequelize,
			modelName: 'Job',
			tableName: 'jobs',
			timestamps: true
		});
		return Job;
	} catch (error) {
		logger.error('Failed to initialize Job model:', error);
		throw error;
	}
}

export default initJobModel;