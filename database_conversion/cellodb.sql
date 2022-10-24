-- We should only run this once, but in the case we run it again, we don't want repeat
-- information added to our database.
DROP TABLE IF EXISTS Exercise;
DROP TABLE IF EXISTS Tag;
DROP TABLE IF EXISTS ExerciseInfo;
DROP TABLE IF EXISTS Book;
DROP TABLE IF EXISTS cello_exercise;
DROP TABLE IF EXISTS cello_tag;
DROP TABLE IF EXISTS cello_exerciseinfo;
DROP TABLE IF EXISTS cello_book;

CREATE TABLE cello_book
    (id INT PRIMARY KEY,
    author VARCHAR(100),
    publish_date VARCHAR(10),
    title VARCHAR(300),
    link VARCHAR(2048));

CREATE TABLE cello_exerciseinfo
    (id INT PRIMARY KEY,
    side VARCHAR(15),
    page_and_exercise VARCHAR(300),
    tenor BOOLEAN,
    treble BOOLEAN,
    book_id INT REFERENCES cello_book);

CREATE TABLE cello_tag 
    (id INT PRIMARY KEY,
    tag_level INT,
    tag_name VARCHAR(100));

CREATE TABLE cello_exercise
    (id INT PRIMARY KEY,
    exercise_id INT REFERENCES cello_exerciseinfo,
    tag_id INT REFERENCES cello_tag,
    UNIQUE (exercise_id, tag_id));

-- Load data from .csv files
\COPY cello_book FROM 'new_csv/book.csv' DELIMITER ',' CSV header;
\COPY cello_exerciseinfo FROM 'new_csv/exerciseinfo.csv' DELIMITER ',' CSV header;
\COPY cello_tag FROM 'new_csv/tag.csv' DELIMITER ',' CSV header;
\COPY cello_exercise FROM 'new_csv/exercise.csv' DELIMITER ',' CSV header;

