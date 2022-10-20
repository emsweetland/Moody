# Moody

Moody is meant to simplify the reflection process and take a look at how the choices you make during the day may impact your overall mood. There are no quantities, each user reflects on their choices such as if they got enough sleep, or drank enough water. They can respond by saying they either did or didn’t, or that they tried their best. After a series of questions, the user is asked to pick a mood for the day. This is something that shouldn’t take more than a minute each day, but after some time you will have many reflections to look back on and find correlations between the choices you may have made on good or bad days. My app is designed to make the reflection process simple and easy, allowing you to keep logs that you can look back on days or weeks later.

### Prerequisites

- [Node.js](https://nodejs.org/en/)

## Installation

### Database Setup
1. Create your database and tables using the provided data.sql file. Start the server.

### Install Dependencies 
2. Open up your editor of choice and run the folloring:
3. `npm install`
6. Run `npm run server` in your terminal
7. Run `npm run client` in your terminal, this will open up a new browser tab for you!


## Usage

- Feedback will be collected over 4 views. 
1. Did you get enough sleep?
2. Did you get enough to eat?
3. Did you drink enough water?
4. Did you talk to a friend today?
5. The user will then be prompted to select an image that fits their mood for the day.
- In a separate review page, display the current feedback values and a submit button. 
- When all steps are complete,the app will save the feedback in the database.
- Users are able to look back on their reflection history, and determine how their choices may have impacted thier mood.

## Built With

HTML, CSS, Material UI, React, Redux-Sagas

##Deployment
View the deployed version here: https://dry-bayou-45188.herokuapp.com/#/user

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.

