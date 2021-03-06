# CSCI3230U-FinalProject
## Tic Tac Toe

## Group Members
| Group Member Name | GitHub Username (GitHub URL)|
| :------------------------:|:--------------------------------------:|
| Shayne Lewis | [shayne-lewis](https://github.com/shayne-lewis) |
| Ricky Tham | [ricky-tham](https://github.com/ricky-tham) |
| David Mongeon | [davidmon-exe](https://github.com/davidmon-exe) |
| Nicholas Coles | [nick-coles](https://github.com/nick-coles) |
| Abdulwasay Mansoor | [wasayMansoor](https://github.com/wasayMansoor) |

## Contributions
Contributions to this project were done by all members on all different components on the project.
Commits to the github were done by only a couple accounts but each commit message states that each 
group member contributed equally to each part along with what the commit was for. A live share extension
was used to do this by one member allowing the others to join their code session and multiple people to work 
online on the hosts code editor without having to share the code files back and forth.

## Independent Study Topic and Integration
The topic we chose to integrate was an API by Google called the Maps JavaScript API.
This API allows display of Google Maps and its tools on a website in an embeded form.
We chose to use this API to display our companies headquarters which we chose to be the school.
The map should display below our game with a red marker to show the school. It can be utilized the same 
way Google Maps can with moving around the world and zooming in and out.
### Presentation Link
https://docs.google.com/presentation/d/1pvSF0IXR_g6r96Zy_5RMUGZRjZLmLNL2ujuhpyx9ZBc/edit?usp=sharing

## Description of backend
The backend of this project is designed as a node.js server that runs on the local machine, seperate from running the vue client.
MongoDB is used to store the data of the users and the scores of each user. The design of the backend was inspired by the following tutorial: https://youtu.be/2jqok-WgelI. This tutorial provided the an easy-to-use structure to build with, and allowed for effortless connection to MongoDB. 
The database is held on a cluster in MongoDB Atlas, and access should be available everywhere. 
The portion for user authentication is fully available, and api calls made from postman were successful. The scores portions is partially functional; new users can be added to the database, but the scores are not being updated or cannot be checked as a 400 error occurs upon request.
If access to the database is needed to look at data, please contact David Mongeon as he is the admin of the database.

There is a user entry with username: username and password: password. This can be used in conjunction with Postman to make calls to the api.
## Issues
During the end of our project we ran into troubles connecting the backend commands with the frontend components.
The code and files are still included in the project to show proof of work on it but we could not get it to be fully functional with our webpage.
We have a working database that can store the information for login information, but were just unable to get the functions to carry this information to our frontend.
The two form compnents for login and registration are still included, however these will not work as the login view that has both of these is not enabled in the router.
We hope you can see the proof of work in our backend and auth.js files!


## Project Setup
```
npm install
```
Running frontend and backend is done in two seperate shell prompts, make sure to npm install the frontend and backend before running them.
### Running backend
```
npm start
```

### Running frontend
```
npm run serve
```
