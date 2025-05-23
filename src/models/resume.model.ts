import { DataTypes, Model } from "sequelize";
import { getDB } from "@config/db";
import logger from "@utils/logger";

class Resume extends Model {}

const resumeSchema = {
	resume_id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true
	},
	resume_file: {
		type: DataTypes.BLOB,
		allowNull: false
	}
}


async function initResumeModel() {
	try {
		const sequelize = await getDB();
		Resume.init(resumeSchema, { sequelize });
		return Resume;
	} catch (error) {
		logger.error('Failed to initialize Resume model:', error);
		throw error;
	}
}

export default initResumeModel;