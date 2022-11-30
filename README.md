# Cello Exercise Index

The code for the Cello Exercise Index website. Located at http://cello-exercise-index.herokuapp.com/ 

It contains the code for the backend and frontend.

# Tech stack
Django (with Django REST Framework) is used for the backend and React (with Axios) is used for the frontend.

# Development requirements
You will need to have Node, npm and `python3` installed on your machine in order to run this project.

Installation links:
* Node/npm: https://nodejs.org/en/download/
* Python: https://www.python.org/downloads/

# Setup
Clone the project from GitHub 
```
git clone https://github.com/csc301-fall-2022/team-project-3-uoft-faculty-of-music-t.git
 ```
`cd` into the project root directory
```
cd team-project-3-uoft-faculty-of-music-t
```

Add the Django dependencies:
```
pip install -r requirements.txt
```

Install the required node packages and build the project:
```
npm install
npm run build
```

Migrate the Django database and run the server:
```
python backend/manage.py migrate
```

# Usage
Run the Django server:
```
python backend/manage.py runserver
```

You should be able to access the local server at http://127.0.0.1:8000/

# Contributors

Past contributors: rebplane, junseomoon9, eun-chae-s, hMarc16, FrayeY, 20leebe, erenfn

# Documentation

Documentation for the backend API endpoints can be found here: https://cello-exercise-index.herokuapp.com/swagger/

# Code Structure

The code for the backend is located in the `backend` directory. The main app is `cello`. It follows standard Django project structure. The views are located in `backend/cello/views` and have separate files per model. When adding dependencies to the backend, make sure to add it to `requirements.txt`.

The code for the frontend is located in the `src` directory. React Router is used to serve the endpoints and additional endpoints can be added in `App.js`. The frontend is sorted into `api`, `pages`, and `components` directories. 

# Database

To get a local copy of the database, you can import the Postgres dump https://github.com/csc301-fall-2022/team-project-3-uoft-faculty-of-music-t/blob/database-conversion/database_conversion/dbexport.pgsql located in the `database-conversion` branch to your local Postgres server.


