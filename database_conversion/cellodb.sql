-- On deployment, follow these steps exactly:
-- 1) DROP the tables cello_book, cello_exerciseinfo, cello_tag, cello_exercise from Heroku Postgres (please make sure they are NOT in Heroku Postgres before we start the next steps or migrations will be painful) or Django won't migrate the id seqs properly
-- 2) Migrate Django tables to Postgres
-- 3) Run this sql file (cellodb.sql) on Heroku to insert the values (do this only ONCE or we'll need to clear the tables)
-- 4) Run syncseq.sql on Heroku to sync the sequences

-- Insert data from .csv files
\COPY cello_book FROM 'new_csv/book.csv' DELIMITER ',' CSV header;
\COPY cello_exerciseinfo FROM 'new_csv/exerciseinfo.csv' DELIMITER ',' CSV header;
\COPY cello_tag FROM 'new_csv/tag.csv' DELIMITER ',' CSV header;
\COPY cello_exercise FROM 'new_csv/exercise.csv' DELIMITER ',' CSV header;

