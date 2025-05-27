import { getDB } from "@config/db";
import logger from "@utils/logger";
import initUserModel from "@models/user.model";
import initCompanyModel from "@models/company.model";
import initJobModel from "@models/job.model";
import initApplicationModel from "@models/application.model";
import initApplicationReviewersModel from "@models/application_reviewer.model";
import initCompanyUsersModel from "@models/company_user.model";
import initJobUsersModel from "@models/job_user.model";
import initResumeModel from "@models/resume.model";
import initSkillModel from "@models/skill.model";
import initSkillUsersModel from "@models/user_skills.model";

async function initModels() {
    try {
        const sequelize = await getDB();
        
        // Initialize all models
        const User = await initUserModel();
        const Company = await initCompanyModel();
        const Skill = await initSkillModel();

        const Job = await initJobModel();
        const Application = await initApplicationModel();
        const Resume = await initResumeModel();

        const CompanyUsers = await initCompanyUsersModel();
        const JobUsers = await initJobUsersModel();
        const ApplicationReviewers = await initApplicationReviewersModel();
        const SkillUsers = await initSkillUsersModel();

        // User and Company many-to-many relationship
        User.belongsToMany(Company, {
            through: CompanyUsers,
            foreignKey: "user_id",
            otherKey: "company_id"
        });
        Company.belongsToMany(User, {
            through: CompanyUsers,
            foreignKey: "company_id",
            otherKey: "user_id"
        });

        // Company and Job one-to-many relationship
        Company.hasMany(Job, { foreignKey: "company_id" })
        Job.belongsTo(Company, {foreignKey: "company_id"})

        // User and Job many-to-many relationship
        User.belongsToMany(Job, {
            through: JobUsers,
            foreignKey: "user_id",
            otherKey: "job_id"
        });
        Job.belongsToMany(User, {
            through: JobUsers,
            foreignKey: "job_id",
            otherKey: "user_id"
        });

        //job and application --> one to many
        Job.hasMany(Application, { foreignKey: "job_id" })
        Application.belongsTo(Job, {foreignKey: "job_id"})
        
        //job seekers and applications: one -> many
        User.hasMany(Application, { foreignKey: "user_id"})
        Application.belongsTo(User, { foreignKey: "user_id"})

        // User and Application many-to-many relationship (reviewers)
        User.belongsToMany(Application, {
            through: ApplicationReviewers,
            foreignKey: "user_id",
            otherKey: "application_id"
        });
        Application.belongsToMany(User, {
            through: ApplicationReviewers,
            foreignKey: "application_id",
            otherKey: "user_id"
        });


        // user has resume ----> one to many
        User.hasMany(Resume, { foreignKey: "user_id" })
        Resume.belongsTo(User, {foreignKey: "user_id"})

        // User and Skill many-to-many relationship
        User.belongsToMany(Skill, {
            through: SkillUsers,
            foreignKey: "user_id",
            otherKey: "skill_id"
        });
        Skill.belongsToMany(User, {
            through: SkillUsers,
            foreignKey: "skill_id",
            otherKey: "user_id"
        });

        return {
            User,
            Company,
            Job,
            Application,
            ApplicationReviewers,
            CompanyUsers,
            JobUsers,
            Resume,
            Skill,
            SkillUsers
        };
    } catch (error) {
        logger.error('Failed to initialize models:', error);
        throw error;
    }
}

export default initModels;

