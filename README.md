#URL Shortener

This is a full-stack URL shortener web application built with React.js (front-end) and Node.js/Express (back-end).

You can use it to quickly convert long URLs into short ones, manage custom aliases, and track click analytics.
The back-end exposes a REST API for link creation and resolution, the front-end allows intuitive user interaction.

Features

Generate short links for any long URL.

Custom alias support for memorable links.

Click analytics (how many times a link was used).

Back-end coded in Node.js/Express, front-end in React.js.

Ready for deployment (Docker/Heroku etc.).

Tech Stack

Front-end: React.js

Back-end: Node.js, Express.js

Database: MongoDB 

Getting Started

Clone this repo: git clone …

Install dependencies in /client and /server: npm install

Create a .env file with your config (e.g., DB-URI, secret key).

Start the back-end: npm run start

Start the front-end: npm run dev

Navigate to http://localhost:3000 (or as configured)

Usage

– Enter a long URL and click “Shorten”.
– Copy the generated short link and share it.
– Visit the analytics dashboard to see link stats.

Future Improvements

User authentication & link ownership.

Link expiration and auto-deletion.

Custom branding/themes for links.

Contributing

Contributions are welcome! Please fork the project, create a new feature branch, then submit a pull request.
