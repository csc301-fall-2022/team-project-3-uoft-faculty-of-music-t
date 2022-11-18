# Converts the old .csv files (original_exercises.csv, original_books.csv) into 4 new CSV files with modified columns.
# original_exercises.csv: the file with all the exercises
# original_books.csv: the file with all the books

# Creates 4 new csv files (see schema.png for database schema diagram)

import csv
from Book import Book
from ExerciseInfo import ExerciseInfo
from Tag import Tag
from Exercise import Exercise
from Subtag import Subtag


# Reads the books from the original_books.csv file and returns a list of books
def extract_books():
    books = []
    with open('old_csv/original_books.csv', encoding='utf-8') as f:
        reader = csv.reader(f, delimiter=',')
        book_id = 1
        for row in reader:
            books.append(Book(book_id, row[0], row[1], row[2], row[3]))
            book_id += 1
    return books


# Creates book.csv with columns book_id, author, date, title, link
def create_book_csv(books):
    with open('new_csv/book.csv', 'w', encoding='utf-8', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(['id', 'author', 'date', 'title', 'link'])
        for book in books:
            writer.writerow([book.book_id, book.author, book.date, book.title, book.link])


# Reads the books from the original_exercises.csv file and returns a list of exercise information
# The extracted list of books is used to compare authors and get the book ID to link to the exercise information
# Returns a list of exercises and their information
def extract_exercise_info(books):
    exercise_info_list = []
    with open('old_csv/original_exercises.csv', encoding='utf-8') as f:
        reader = csv.reader(f, delimiter=',')
        exercise_id = 1
        for row in reader:
            # If the row is empty, skip the line
            if row[0] == '':
                continue
            # Grab the information from the rows
            side = row[0]
            page_and_exercise = row[5]
            tenor = True if row[6] == "x" else False
            treble = True if row[7] == "x" else False
            book_id = 0
            # Get the book ID from the author and the date
            author_and_date = row[4]
            author = author_and_date.split("(")[0].split("[")[0].split("/")[0].strip(" ")
            if "(" in author_and_date:
                date = author_and_date.split("(")[1].split(")")[0]
            else:
                date = author_and_date.split("[")[1].split("]")[0]
            # Loop through the extracted books to find the exercise's book ID
            for book in books:
                # If the book contains the author and same date, it's a matching book
                if author in book.author and date == book.date:
                    book_id = book.book_id
                    break
            exercise_info_list.append(ExerciseInfo(exercise_id, side, page_and_exercise, tenor, treble, book_id))
            exercise_id += 1
    return exercise_info_list


# Creates the exerciseinfo.csv file
def create_exercise_info_csv(exercises):
    with open('new_csv/exerciseinfo.csv', 'w', encoding='utf-8', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(['id', 'side', 'page_and_exercise', 'tenor', 'treble', 'book_id'])
        for ex in exercises:
            writer.writerow([ex.exercise_id, ex.side, ex.page_and_exercise, ex.tenor, ex.treble, ex.book_id])


# Reads the original_exercises.csv and returns a list of tags and exercises with their respective tag ids
def extract_tags_and_exercises():
    with open('old_csv/original_exercises.csv', encoding='utf-8') as f:
        reader = csv.reader(f, delimiter=',')
        tags_list = []
        tags_objects = []  # A list of Tag objects
        tag_id = 1
        exercise_id = 1
        exercise_with_tags = []  # A list of Exercise objects

        for row in reader:
            # If the row is empty, skip the line
            if row[0] == '':
                continue

            level1_name = row[1]
            level2_name = row[2]
            level3_name = row[3]

            levels = [level1_name, level2_name, level3_name]

            # For each level specificity, adds the tag name and its specificity level if it's not already in
            # the tags list to the tags_objects list. The exercise is also added with the tag to the
            # exercise_with_tags list
            for i in range(0, 3):
                if levels[i] != "":
                    if levels[i] not in tags_list:
                        tags_list.append(levels[i])
                        tags_objects.append(Tag(tag_id, i + 1, levels[i]))
                        exercise_with_tags.append(Exercise(exercise_id, tag_id))
                        tag_id += 1
                    else:
                        for tag in tags_objects:
                            if levels[i] == tag.tag_name:
                                exercise_with_tags.append(Exercise(exercise_id, tag.tag_id))
                                break
            exercise_id += 1

    return tags_objects, exercise_with_tags


def extract_subtags():
    with open('old_csv/original_exercises.csv', encoding='utf-8') as f:
        reader = csv.reader(f, delimiter=',')
        tags_list = []
        tags_objects = []  # A list of Tag objects
        subtag_list = []
        subtag_objects = [] # A list of Subtag objects
        tag_id = 1 # Initialize tag id
        subtag_id = 1 # Initialize subtag ID

        for row in reader:
            # If the row is empty, skip the line
            if row[0] == '':
                continue

            level1_name = row[1]
            level2_name = row[2]
            level3_name = row[3]

            levels = [level1_name, level2_name, level3_name]

            # For each level specificity, adds the tag name and its specificity level if it's not already in
            # the tags list to the tags_objects list. The exercise is also added with the tag to the
            # exercise_with_tags list
            for i in range(0, 3):
                # Create the Tags
                if levels[i] != "" and levels[i] not in tags_list:
                    tags_list.append(levels[i])
                    tags_objects.append(Tag(tag_id, i + 1, levels[i]))
                    tag_id += 1
                else:
                    for tag in tags_objects:
                        if levels[i] == tag.tag_name:
                            break

                # Create the Subtags
                if i != 0 and levels[i] != "":
                    parent_tag = levels[i-1]
                    child_tag = levels[i]
                    if (parent_tag, child_tag) not in subtag_list:
                        subtag_list.append((parent_tag, child_tag))
                        # Get parent_tag id and child_tag id
                        parent_tag_id = [tag.tag_id for tag in tags_objects if tag.tag_name == parent_tag][0]
                        child_tag_id = [tag.tag_id for tag in tags_objects if tag.tag_name == child_tag][0]
                        subtag_objects.append(Subtag(subtag_id, parent_tag_id, child_tag_id))
                        subtag_id += 1
    return subtag_objects


# Creates the tag.csv file
def create_tags(tags):
    with open('new_csv/tag.csv', 'w', encoding='utf-8', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(['id', 'level', 'tag_name'])
        for tag in tags:
            writer.writerow([tag.tag_id, tag.level, tag.tag_name])


# Creates the exercise.csv file
def create_exercise(exercises):
    count = 1
    with open('new_csv/exercise.csv', 'w', encoding='utf-8', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(['id', 'exercise_id','tag_id'])
        for ex in exercises:
            writer.writerow([count, ex.exercise_id, ex.tag_id])
            count += 1

def create_subtag_csv(subtags):
    with open('new_csv/subtag.csv', 'w', encoding='utf-8', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(['id', 'parent_id', 'child_id'])
        for tag in subtags:
            writer.writerow([tag.id, tag.parent_id, tag.child_id])

def old_models():
    # Extract and create books csv
    extracted_books = extract_books()
    create_book_csv(extracted_books)
    # Extract exercise csv
    extracted_exercise_info = extract_exercise_info(extracted_books)
    # If the book ID is 0, we don't have a valid book matching, so remove it
    invalid_exercise_data = []
    for i in range(len(extracted_exercise_info)-1, 0, -1):
        if extracted_exercise_info[i].book_id == 0:
            invalid_exercise_data.append(extracted_exercise_info[i].exercise_id)
            extracted_exercise_info.remove(extracted_exercise_info[i])
    # Create new exercise csv
    create_exercise_info_csv(extracted_exercise_info)
    # Extract and create tag csv and exercise csv 
    extracted_tags_and_exercises = extract_tags_and_exercises()
    # If the book ID is 0, we don't have a valid book matching, so remove it
    for i in range(len(extracted_tags_and_exercises[1])-1, 0, -1):
        if extracted_tags_and_exercises[1][i].exercise_id in invalid_exercise_data:
            extracted_tags_and_exercises[1].remove(extracted_tags_and_exercises[1][i])
    # Extract and create tag csv
    create_tags(extracted_tags_and_exercises[0])
    # Create exercise list pairing each exercise with its tags
    create_exercise(extracted_tags_and_exercises[1])

if __name__ == "__main__":
    # Extract subtags and create subtag csv
    extracted_subtags = extract_subtags()
    create_subtag_csv(extracted_subtags)
    
