import { DataTypes, Model } from "sequelize";
import { getDB } from "@config/db";
import logger from "@utils/logger";


class Company extends Model {}

const companySchema = {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	field: {
		type: DataTypes.STRING,
		allowNull: false
	},
	description: {
		type: DataTypes.TEXT,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
		validate: {
			isEmail: true
		}
	},
	website: {
		type: DataTypes.STRING,
	}
}

async function initCompanyModel() {
	try {
		const sequelize = await getDB();
		Company.init(companySchema, { 
			sequelize,
			modelName: 'Company',
			tableName: 'companies',
			timestamps: true
		});
		return Company;
	} catch (error) {
		logger.error('Failed to initialize Company model:', error);
		throw error;
	}
}

export default initCompanyModel;