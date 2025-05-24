import { DataTypes, Model } from "sequelize";
import { getDB } from "@config/db";
import logger from "@utils/logger";

class Resume extends Model {}

const resumeSchema = {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true
	},
	resume_file: {
		type: DataTypes.STRING,
		allowNull: false
	},
	profile_id: {
		type: DataTypes.UUID,
	}
}


async function initResumeModel() {
	try {
		const sequelize = await getDB();
		Resume.init(resumeSchema, {
			sequelize,
			modelName: 'Resume',
			tableName: 'resumes',
			timestamps: true
		});
		return Resume;
	} catch (error) {
		logger.error('Failed to initialize Resume model:', error);
		throw error;
	}
}

export default initResumeModel;