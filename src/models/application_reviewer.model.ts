import { DataTypes, Model } from "sequelize";
import { getDB } from "@config/db";
import logger from "@utils/logger";

class ApplicationReviewers extends Model {}

const applicationReviewersSchema = {
	application_reviewer_id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true
	},
	user_id: {
		type: DataTypes.UUID,
	},
	application_id: {
		type: DataTypes.UUID,
	}
}

async function initApplicationReviewersModel() {
	try {
		const sequelize = await getDB();
		ApplicationReviewers.init(applicationReviewersSchema, {
			sequelize,
			modelName: 'ApplicationReviewers',
			tableName: 'application_reviewers',
			timestamps: true
		});
		return ApplicationReviewers;
	} catch (error) {
		logger.error('Failed to initialize ApplicationReviewers model:', error);
		throw error;
	}
}

export default initApplicationReviewersModel;