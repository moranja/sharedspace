# sharedspace
A real-time web-app for friends to join a 'room' together and enjoy different activities including:
* Jamming on different instruments, including piano, guitar and drums
* Chat via a chat box
* Share YouTube videos and watch together.

Shared Space includes full user authentication, and usernames and passwords are validated at creation. The app uses JSON Web Tokens for login persistance between sessions. Rooms can be dynamically created and joined by any user, and all music, video, or chat is only broadcast to others in your room.

The frontend is built on React, and the backend is built on Node.js. Login and user creation are handled via fetch requests, while WebSockets are used for all other real-time communication (music, chat, and YouTube).

For a short video demo visit:
https://www.youtube.com/watch?v=nEqshMHKoH8&feature=youtu.be

# Install Instructions
1. Download the app
2. Navigate to the frontend folder and run 'npm start'
3. Navigate to the backend folder and run 'node app'

# Contributors
This web app was written by Mark Pothecary and Adam Moran, students at the Flatiron School

# License
Software licence in lib/LICENSE.md
