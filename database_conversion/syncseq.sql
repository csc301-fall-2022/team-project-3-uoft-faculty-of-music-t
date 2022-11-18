-- TO BE RUN AFTER THE MIGRATION AND INSERTION OF VALUES TO HEROKU POSTGRES

SELECT setval('cello_book_id_seq', max(id)) FROM cello_book;
SELECT setval('cello_exercise_id_seq', max(id)) FROM cello_exercise;
SELECT setval('cello_exerciseinfo_id_seq', max(id)) FROM cello_exerciseinfo;
SELECT setval('cello_tag_id_seq', max(id)) FROM cello_tag;
SELECT setval('cello_subtag_id_seq', max(id)) FROM cello_subtag;