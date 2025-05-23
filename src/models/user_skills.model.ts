import { DataTypes, Model } from "sequelize";
import { getDB } from "@config/db";
import logger from "@utils/logger";

class SkillUsers extends Model {}

const skillUsersSchema = {
	skill_user_id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true
	},
	years_of_expertise: {
		type: DataTypes.FLOAT,
		allowNull: false
	}
}


async function initSkillUsersModel() {
	try {
		const sequelize = await getDB();
		SkillUsers.init(skillUsersSchema, {sequelize});
		return SkillUsers;
	} catch (error) {
		logger.error('Failed to initialize SkillUsers model:', error);
		throw error;
	}
}

export default initSkillUsersModel;