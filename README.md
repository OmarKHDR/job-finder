# Job Finder
## Features of the Job Finder API

- **Job Management**:
	- Publish, update, and delete job postings.
	- Apply to job listings with user profiles.
	- Manage access to job postings (public/private visibility).

- **User Profiles**:
	- Create and manage profiles for both job publishers and applicants.
	- Upload resumes, portfolios, and other relevant documents.
	- View application history and saved job postings.

- **Authentication and Authorization**:
	- Secure user authentication using OAuth or JWT.
	- Role-based access control for publishers, applicants, and administrators.

- **Search and Filtering**:
	- Advanced search functionality for job listings.
	- Filter jobs by location, salary range, job type, and more.

- **Notifications**:
	- Real-time notifications for job applications and updates.
	- Email and in-app notifications for important events.

- **Analytics and Insights**:
	- Track job posting performance with detailed analytics.
	- View application trends and user engagement metrics.

## Out of scope for now
	<!-- - **Third-Party Integrations**:
		- Integration with LinkedIn, GitHub, and other platforms for seamless profile imports.
		- Support for external job boards and recruitment tools.

	- **Responsive Design**:
		- Fully responsive design for optimal use on mobile, tablet, and desktop devices.

	- **Developer-Friendly API**:
		- Comprehensive API documentation with examples.
		- Support for RESTful endpoints and versioning.

	- **Additional Features**:
		- Bookmark and share job postings.
		- Multi-language support for a global audience.
		- Secure payment gateway for premium job postings or subscriptions. -->

## DB Business Requirements
- Enteties: Job searchers (applicants), job publisher (recruiter), companies, ...
- Relationships: {
	each applicant may be working in a company or more
	each company has at least one recruiter
	each company may has many published job offers
	each recruiter may be working in a company
}
- Attributes: 
	- applicants: {
		has current working company,has experience, has cv, 
		has filled job applications, has job offers, has social media accounts
	}
	- recruiters: {
		has published jobs, has working company, has role in company, 
		has social media accounts, has 
	}
	- Companies: {
		has a field of interest, has department, has employees,
		each employee working in a department, has published job offers, 
	}
## Work Flow
- Divide each step of each feature into smaller steps 
- manage feature implementation using trellio
- 