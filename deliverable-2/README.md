# Cello Exercise Index / TBD

## Links
 * Deployed application: https://cello-exercise-index.herokuapp.com/
 * Link for the recording of demo can be found in iteration.md

## Description 
 * Provide a high-level description of your application and it's value from an end-user's perspective
 * What is the problem you're trying to solve?
 * Is there any context required to understand **why** the application solves this problem?

## Key Features
 * Described the key features in the application that the user can access
 * Provide a breakdown or detail for each feature that is most appropriate for your application
 * This section will be used to assess the value of the features built

The user can search different exercises by filtering through different tags, and navigating through different books. Each book has a link to a page from a different website that provides the full version of the book online. The details for the books and the exercises are present in their pages.

Some features built in backend are not reachable from the frontend. For example, filtering tags by level and exercise id's, and filtering exercises by authors, books, and tags combined. 
## Instructions
 * Clear instructions for how to use the application from the end-user's perspective
 * How do you access it? Are accounts pre-created or does a user register? Where do you start? etc. 
 * Provide clear steps for using each feature described above
 * This section is critical to testing your application and must be done carefully and thoughtfully
 
 # Development requirements
You will need to have Node, npm and `python3` installed on your machine in order to run this project.

Installation links:
* Node/npm: https://nodejs.org/en/download/
* Python: https://www.python.org/downloads/

## NOTE: 
- Will test this again after structure (possibly) changes for deployment and modify accordingly

## Cloning the repository
Clone the project from GitHub 
```
git clone https://github.com/csc301-fall-2022/team-project-3-uoft-faculty-of-music-t.git
 ```
`cd` into the project root directory
```
cd team-project-3-uoft-faculty-of-music-t
```

## Running the Django project
Add the Django dependencies:
```
pip install django django-cors-headers djangorestframework djangorestframework-simplejwt
```
Migrate the database and run the server:
```
python backend/manage.py migrate
python backend/manage.py runserver
```
 
## Running the React project
`cd` into the `frontend` directory:
```
cd frontend
```
Start the React project:
```
npm install
npm start
```

 ## Deployment and Github Workflow

We split into two teams - frontend and backend. We have a backend branch and a frontend branch. Each team member branches off their respective section (backend or frontend) and creates a branch for the feature that they are implementing. Upon completion of the feature, they create a pull request to merge it to the backend/frontend branch (whichever is applicable). After writing tests to ensure features are working properly, a pull request is then created to merge to main. Pull requests can be reviewed by any other team member - before merging, at least one team member must approve the commits before it is merged.

To avoid conflicts, roles were divided between team members as to ensure everyone has a separate role and will not be working on the same files. 

We chose this workflow in order to ensure that conflicts did not occur with people working on the same parts of the project, and so that someone is able to test and look over the code before it merges with our main/frontend/backend branches.

Python naming conventions were used for the backend side. On the frontend side, components are named using PascalCase (which is standard for React).
Otherwise, for variables, camelCase is used (as is the convention for JavaScript).

Currently, we have pushed our production branch to Heroku. As of yet, we are not using any deployment tools, however for the next deliverable we are planning to use Github Actions for continuous deployment to deploy automatically to Heroku whenever we push to the main branch.

 ## Licenses 

 * We will apply the MIT license to our codebase.
 * The MIT license permits both commercial and private uses, distribution, and modification of our codebase as long as the original license is included. It only requires the preservation of copyright and license notices. There is also a limitation of liability and has no warranty provided.
 * We proposed three choices (MIT, Apache 2.0, GPLv3) to the partner during our meeting. Since the partner wants the project to accessible as possible and open to future expansions, we dicide to use the MIT license, which is the most permissive one among the three options.
