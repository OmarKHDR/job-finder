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

getDB().then(sequelize => {
	User.init(userSchema, {sequelize})
})

export default User;
