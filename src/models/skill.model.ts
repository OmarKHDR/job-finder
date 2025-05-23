import { DataTypes, FLOAT, Model } from "sequelize";
import { getDB } from "@config/db";
import logger from "@utils/logger";

class Skill extends Model {}

const skillSchema = {
	skill_id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true
	},
	skill: {
		type: DataTypes.STRING,
		allowNull: false
	},
	description: {
		type: DataTypes.TEXT,
	}
}


async function initSkillModel() {
	try {
		const sequelize = await getDB();
		Skill.init(skillSchema, { sequelize });
		return Skill;
	} catch (error) {
		logger.error('Failed to initialize Skill model:', error);
		throw error;
	}
}

export default initSkillModel;