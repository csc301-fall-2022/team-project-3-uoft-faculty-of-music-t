# What is this?
Converts the old .csv files provided by partner into new .csv files representing our database classes. Each file is what we'll make a new table for, and the columns are the data columns. Each exercise is also now linked to it's respective book. This will make it easier to convert the .csv to whatever database we use. 

A picture of what our database schema looks like is in schema.png (subject to change).

The python file has already been run and the generated files are now in new_csv.

# Deployment
On deployment, follow the steps in cellodb.sql

# Using data locally
You can import the dbexport.pgsql file to your local Postgres: https://www.a2hosting.ca/kb/developer-corner/postgresql/import-and-export-a-postgresql-database#Importing-a-PostgreSQL-database
