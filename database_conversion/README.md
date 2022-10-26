# What is this?
Converts the old .csv files provided by partner into new .csv files representing our database classes. Each file is what we'll make a new table for, and the columns are the data columns. Each exercise is also now linked to it's respective book. This will make it easier to convert the .csv to whatever database we use. 

A picture of what our database schema looks like is in schema.png (subject to change).

The python file has already been run and the generated files are now in new_csv.

# Using data locally
To get the data locally, if you want to work with it (use the latest backend commit or it won't work):
1) On branch database_conversion, cd into the database_conversion directory. You will want to have two separate folders for database_conversion and the actual project (that has the lastest backend commit as of the moment I'm typing this), and a terminal for each.
2) Get your postgres server up and running. 
3) (In backend directory) On the backend settings.py, uncomment the DATABASE Postgres section, comment out the sqlite3 one and put your credentials there.
4) (In backend directory) Migrate django tables to postgres. 
```
python manage.py migrate
```
5) (In database_conversion directory) Run the sql file on database to insert the data
```
psql -U <username> celloexercises < cellodb.sql
```
6) (In database_conversion directory) Run the sync sql file on database to sync the django IDs
```
psql -U <username> celloexercises < syncseq.sql
```
