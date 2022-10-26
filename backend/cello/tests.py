from rest_framework.test import APITestCase
from django.urls import reverse
from django.contrib.auth.models import User
import json

from cello.models import Book, Exercise, ExerciseInfo, Tag

# Create your tests here.
class CelloTest(APITestCase):

    def setUp(self):
        self.user_data = {
            "username": "admin",
            "password": "password"
        }
        self.user = User.objects.create_user(username="admin", password="password")
        self.book = Book.objects.create(title="Book 1", author="Author 1", date="2019", link="www.book.com")
        self.tag = Tag.objects.create(level=1, tag_name="Spicatto")
        self.exerciseinfo = ExerciseInfo.objects.create(side="Right Side", page_and_exercise="pg. 10 Exercise 1", tenor=True, treble=False, book_id=self.book)
        self.exercise = Exercise(exercise_id=self.exerciseinfo, tag_id=self.tag)

    def test_unauthenticated_post(self):
        """
        Testing that an unauthenticated user can not make a post request
        """
        new_book = {
            "title": "Book 2",
            "author": "Author 2",
            "date": "1990",
            "link": "https://www.book.com"
        }
        response = self.client.post('/api/book/', new_book)
        self.assertEqual(response.status_code, 401)

    def test_authenticated_post(self):
        """
        Testing that an authenticated user can make a post request
        """
        access_token = self.client.post('/api/token/', self.user_data).data['access']
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + access_token)
        new_book = {
            "title": "Book 2",
            "author": "Author 2",
            "date": "1990",
            "link": "https://www.book.com"
        }
        response = self.client.post('/api/book/', new_book)
        print(response)
        self.assertEqual(response.status_code, 201)

    def test_book_view(self):
        """
        Tests that we can retrieve a book with an unauthenticated user
        """
        response = self.client.get('/api/book/')
        json_response = json.loads(json.dumps(response.data))[0]['id']
        self.assertEqual(response.status_code, 200)
        self.assertEqual(json_response, self.book.id)