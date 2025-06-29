import { DataTypes, Model } from "sequelize";
import { getDB } from "@config/db";
import logger from "@utils/logger";


class User extends Model {}
const userSchema = {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true,
	},
	firstname: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	lastname: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	age: {
		type: DataTypes.INTEGER
	},
	email: {
		type: DataTypes.STRING,
		unique: true,
		validate: {
			isEmail: true
		},
		allowNull: false
	},
	password: {
		type: DataTypes.TEXT,
		allowNull: false
	},
	role: {
		type: DataTypes.STRING,
		allowNull: false
	},
	specialization: {
		type: DataTypes.STRING,
		allowNull: false
	},
	experience: {
		type: DataTypes.TEXT,
	},
	interests: {
		type: DataTypes.TEXT,
	},
}

async function initUserModel() {
	try {
		const sequelize = await getDB();
		User.init(userSchema, {
			sequelize,
			modelName: 'User',
			tableName: 'users',
			timestamps: true
		});
		return User;
	} catch (error) {
		logger.error('Failed to initialize User model:', error);
		throw error;
	}
}


export default initUserModel;
