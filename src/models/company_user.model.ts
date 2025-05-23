import { DataTypes, Model } from "sequelize";
import { getDB } from "@config/db";
import logger from "@utils/logger";

class CompanyUsers extends Model {}

const companyUsersSchema = {
	company_user_id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true
	}
}


async function initCompanyUsersModel() {
	try {
		const sequelize = await getDB();
		CompanyUsers.init(companyUsersSchema, {sequelize});
		return CompanyUsers;
	} catch (error) {
		logger.error('Failed to initialize CompanyUsers model:', error);
		throw error;
	}
}

export default initCompanyUsersModel;