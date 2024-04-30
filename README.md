README.md for Link Tracker Application
Overview
The Link Tracker is a web application built with NestJS, a progressive Node.js framework for building efficient and scalable server-side applications. The application allows users to create shortened, masked versions of URLs, track their redirections, and manage their validity through expiration and manual invalidation.

Features
Create Link: Users can create a new link, optionally adding a password and expiration date. The system will generate a masked URL.

Redirection: When accessing a masked URL, users will be redirected to the original URL if the link is valid, not expired, and if provided, the correct password is used.

Get Statistics: Users can retrieve statistics on how many times a link has been redirected.

Invalidate Link: Links can be manually invalidated, which will prevent any further redirections.

Built With
NestJS: The framework used for the backend.
TypeORM: ORM used for database interactions.
MySQL: The database used to store link data.

Getting Started

Prerequisites
Node.js
NestJS CLI
MySQL

Installation

Clone the repository:
bash
Copy code
git clone https://yourrepository.com/link-tracker.git
cd link-tracker

Install dependencies:
bash
Copy code
npm install

Set up the database:
Ensure MySQL is running on your machine.
Create a database named link_tracker.
Configure database connection settings in app.module.ts or a separate config file/module.

Run the application:
bash
Copy code
npm run start

Usage

Creating a Link

Send a POST request to /links:
http
Copy code
POST /links
Content-Type: application/json
{
  "url": "https://example.com",
  "expirationDate": "2024-12-31T23:59:59",
  "password": "optional-password"
}
url: The original URL you want to mask.
expirationDate: Optional. The date after which the link should be considered invalid.
password: Optional. A password required to access the redirected URL.

Redirection

Access a masked URL:
Navigate to http://localhost:3000/l/{maskedUrl}?password=your-password (if a password was set).
Get Statistics
Send a GET request to /links/{id}/stats:
http
Copy code
GET /links/1/stats
This retrieves how many times the link with ID 1 has been accessed.

Invalidate a Link

Send a PUT request to /links/{id}/invalidate:
http
Copy code
PUT /links/1/invalidate
This invalidates the link with ID 1, making it no longer redirect to the original URL.
API Documentation
For full API documentation, please refer to the Postman collection or Swagger documentation provided as part of the project resources.

Contributing
Contributions to the Link Tracker project are welcome. Please fork the repository and submit a pull request with your features or fixes.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
For support or contributions, please contact the repository owner.