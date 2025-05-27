// import { DataTypes, Model, UUID } from "sequelize";
// import { getDB } from "@config/db";
// import logger from "@utils/logger";

// class Profile extends Model {}

// const profileSchema = {
// 	id: {
// 		type: DataTypes.UUID,
// 		defaultValue: DataTypes.UUIDV4,
// 		primaryKey: true
// 	},
// 	experience: {
// 		type: DataTypes.TEXT,
// 	},
// 	interests: {
// 		type: DataTypes.TEXT,
// 	},
// 	user_id: {
// 		type: DataTypes.UUID,
// 	}
// }


// async function initProfileModel() {
// 	try {
// 		const sequelize = await getDB();
// 		Profile.init(profileSchema, {
// 			sequelize,
// 			modelName: 'Profile',
// 			tableName: 'profiles',
// 			timestamps: true
// 		});
// 		return Profile;
// 	} catch (error) {
// 		logger.error('Failed to initialize Profile model:', error);
// 		throw error;
// 	}
// }

// export default initProfileModel;