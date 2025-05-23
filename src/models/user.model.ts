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
		unique: true
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
	const sequelize = await getDB();
	User.init(userSchema, {sequelize});
	return User;
}


export default initUserModel;
