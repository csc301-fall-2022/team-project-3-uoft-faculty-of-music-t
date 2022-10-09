-- We should only run this once, but in the case we run it again, we don't want repeat
-- information added to our database.
DROP TABLE IF EXISTS Exercise;
DROP TABLE IF EXISTS Tag;
DROP TABLE IF EXISTS ExerciseInfo;
DROP TABLE IF EXISTS Book;

CREATE TABLE Book
    (book_id INT PRIMARY KEY,
    author VARCHAR(100),
    publish_date VARCHAR(10),
    title VARCHAR(300),
    link VARCHAR(2048));

CREATE TABLE ExerciseInfo 
    (exercise_id INT PRIMARY KEY,
    side VARCHAR(15),
    page_and_exercise VARCHAR(300),
    tenor BOOLEAN,
    treble BOOLEAN,
    book_id INT REFERENCES Book);

CREATE TABLE Tag 
    (tag_id INT PRIMARY KEY,
    tag_level INT,
    tag_name VARCHAR(100));

CREATE TABLE Exercise
    (exercise_id INT REFERENCES ExerciseInfo,
    tag_id INT REFERENCES Tag,
    PRIMARY KEY (exercise_id, tag_id));

-- Load data from .csv files
\COPY book FROM 'new_csv/book.csv' DELIMITER ',' CSV header;
\COPY exerciseinfo FROM 'new_csv/exerciseinfo.csv' DELIMITER ',' CSV header;
\COPY tag FROM 'new_csv/tag.csv' DELIMITER ',' CSV header;
\COPY exercise FROM 'new_csv/exercise.csv' DELIMITER ',' CSV header;

