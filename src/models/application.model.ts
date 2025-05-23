import { DataTypes, Model } from "sequelize";
import { getDB } from "@config/db";
import logger from "@utils/logger";

class Application extends Model {}

const applicationSchema = {
	application_id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true
	},
	status: {
		type: DataTypes.STRING,
		allowNull: false
	}
}


async function initApplicationModel() {
	try {
		const sequelize = await getDB();
		Application.init(applicationSchema, { sequelize });
		return Application;
	} catch (error) {
		logger.error('Failed to initialize Application model:', error);
		throw error;
	}
}

export default initApplicationModel;