# sharedspace
A real-time web-app for friends to join a 'room' together and enjoy different activities including:
* Jamming on different instruments, including piano, guitar and drums
* Chat via a chat box
* Share YouTube videos and watch together.
Multiple rooms can be set up by room number.
The app includes full user login and validation.  Usernames and passwords are validated at creation.
The app uses JSON Web Tokens for login persistance between sessions.

The frontend is built on React.
The backend is built on Node.js
Login and user creation comms are handled via fetch requests
Real-time comms for music, chat, and YouTube are handled via WebSockets

For a short video demo visit:
https://www.youtube.com/watch?v=nEqshMHKoH8&feature=youtu.be

#Install Instructions
1. Download the app
2. Navigate to the frontend folder and run 'npm start'
3. Navigate to the backend folder and run 'node app'

#Contributors
This web app was written by Mark Pothecary and Adam Moran, students at the Flatiron School

# Licence
Software licence in lib/LICENSE.md
