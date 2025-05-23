import { DataTypes, Model } from "sequelize";
import { getDB } from "@config/db";


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
		}
	},
	role: {
		type: DataTypes.STRING,
		allowNull: false
	},
	specialization: {
		type: DataTypes.STRING,
		allowNull: false
	},
}

async function initUserModel() {
	try {
		const sequelize = await getDB();
		User.init(userSchema, {sequelize});
		return User;
	} catch (error) {
		console.error('Failed to initialize User model:', error);
		throw error;
	}
}


export default initUserModel;
