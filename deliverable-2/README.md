# Cello Exercise Index / TBD

## Links
 * Deployed application: https://cello-exercise-index.herokuapp.com/
 * Link for the recording of demo can be found in iteration.md

## Description 

According to the partner, “methods for teaching and learning cello techniques are still an extremely archaic form of apprenticeship”. This means that students need to find an experienced teacher in a 1-on-1 setting, where a teacher would pass on the exercise materials they have. What the partner wants to do is reduce the bias in lessons a teacher would give and allow students to look for exercises freely on their own, rather than through a teacher which would be more expensive as they have to pay to learn from a teacher. For individual exercises, the intention behind it and what it is supposed to practice is usually only in the mind of a teacher as many exercises lack labels as to what they are for. 

For self-motivated Cello students, having the ability to discover exercise books conveniently from online means that they do not have to access a Cello teacher in order to know what exercise books to get, saving them money. Even if they do have teachers, they will always be able to find new resources quickly and easily if they are looking for more ways to improve their playing.

Even though people can google exercises to help practice specific techniques, the exercises they may get may be for a specific level of musicians or it may be difficult to look for a variety of exercises. There are also websites like https://imslp.org/, which is a large digital music library containing public domain music scores, works and recordings but navigating can be difficult and confusing. It also does not have any methods to filter and students have to know what exercises they’re looking for, which is not always the case. The partner wants the website to be like google or duolingo, but tailored to cellists.

To solve this situation, we are planning to create a website called, “Cello Exercise Index”, in which anyone who plays cello can easily find exercises that are suitable for their levels and interests. There will be tags which allow cello players to search for exercises that fit their needs, tags that are broad, which allows users to explore different types of exercises, and find what kind of exercises they should look for as a beginner. The website will contain a collection of Cello technical books and their corresponding exercises, which will have tags such as “trills” or “scales”, etc. and page numbers associated with each exercise. Cellists will be able to filter and search for specific types of exercises quickly.

The partner has provided a copy of exercises and the intention behind them which they want us to categorize and make a website out of.  Our product collects known exercises that teach a specific technique and allow students to search for exercises that would help develop their skills in specific areas. 


## Key Features

In this application, there are four main different features. The user can search for different exercises by filtering through different tags, and navigating through different books. Each book has a link to a page from a different website that provides the full version of the book online. The details for the books and the exercises are present in their pages. Furthermore, we are going to have a feature of displaying random exercises and sending a request to edit the particular exercise for the high interactivity from the users.

In this deliverable, we've implemented features for searching and displaying list of books/exercises and the corresponding detail pages. Some features built in backend are not reachable from the frontend yet. For example, filtering tags by level and exercise id's, and filtering exercises by authors, books, and tags combined. 

## Instructions
Anyone can access the deployed web app at https://cello-exercise-index.herokuapp.com

An account is not required to access the information on the Index. On the homepage, the user is greeted with a list of exercise books, as well as a list of specific topics and techniques to practice.

Upon clicking on each book, the user will be taken to a separate page that contains more information about the book, including a link to an external website, imslp.org, where the user can access a pdf of the book. Under the book details are a list of exercises in the book, shown with page and exercise numbers.

Clicking on each exercise shows a separate page with details for the exercise and a link to access the pdf of the book.
 
 # Development requirements
You will need to have Node, npm and `python3` installed on your machine in order to run this project.

Installation links:
* Node/npm: https://nodejs.org/en/download/
* Python: https://www.python.org/downloads/

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
pip install -r requirements.txt
```
 
## Setting up the React project
In another terminal, `cd` into the `frontend` directory:
```
cd frontend
```
Install the required node packages and build the project:
```
npm install
npm run build
```

Migrate the database and run the server:
```
python backend/manage.py migrate
python backend/manage.py runserver
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
