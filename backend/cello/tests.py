from rest_framework.test import APITestCase
from django.urls import reverse
from django.contrib.auth.models import User
import json

from cello.models import Book, Exercise, ExerciseInfo, Tag

class CelloTest(APITestCase):
    """
    This test suite tests that:
    - Users (non-authenticated) only have read only permissions
    - Users (authenticated) have write permissions
    - The API endpoints are functional and return the requested resources with no errors
    """

    def setUp(self):
        self.user_data = {
            "username": "admin",
            "password": "password"
        }
        self.user = User.objects.create_user(username="admin", password="password")
        self.book = Book.objects.create(title="Book 1", author="Author 1", date="2019", link="www.book.com")
        self.tag1 = Tag.objects.create(level=1, tag_name="Spicatto")
        self.tag2 = Tag.objects.create(level=1, tag_name="Stacatto")
        self.tag3 = Tag.objects.create(level=2, tag_name="Articulation")
        self.exerciseinfo = ExerciseInfo.objects.create(side="Right Side", page_and_exercise="pg. 10 Exercise 1", tenor=True, treble=False, book_id=self.book)
        self.exercise1 = Exercise.objects.create(exercise_id=self.exerciseinfo, tag_id=self.tag1)
        self.exercise2 = Exercise.objects.create(exercise_id=self.exerciseinfo, tag_id=self.tag3)

    def test_unauthenticated_post(self):
        """
        Testing that an unauthenticated user can not make a post request - this should return status code 401
        """
        new_book = {
            "title": "Book 2",
            "author": "Author 2",
            "date": "1990",
            "link": "https://www.book.com"
        }
        response = self.client.post(reverse("api:book-list"), new_book)
        self.assertEqual(response.status_code, 401)

    def test_authenticated_post(self):
        """
        Testing that an authenticated user can make a post request - this should return status code 201 CREATED
        """
        access_token = self.client.post(reverse("api:token_obtain_pair"), self.user_data).data['access']
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + access_token)
        new_book = {
            "title": "Book 2",
            "author": "Author 2",
            "date": "1990",
            "link": "https://www.book.com"
        }
        response = self.client.post(reverse("api:book-list"), new_book)
        self.assertEqual(response.status_code, 201)

    def test_book_view(self):
        """
        Tests that we can retrieve a book with an unauthenticated user

        Endpoint: GET /api/book/
        """
        response = self.client.get(reverse("api:book-list"))
        json_response = json.loads(json.dumps(response.data))['results'][0]
        self.assertEqual(response.status_code, 200)
        self.assertEqual(json_response['id'], self.book.id)

    def test_single_book_view(self):
        """
        Tests that dynamic URL routing works to get a single object

        Endpoint: GET /api/book/<book_id>
        """
        response = self.client.get(reverse("api:book-detail", kwargs={'pk': self.book.id}))
        json_response = json.loads(json.dumps(response.data))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(json_response['id'], self.book.id)
        self.assertEqual(json_response['title'], self.book.title)
        self.assertEqual(json_response['author'], self.book.author)
        self.assertEqual(json_response['date'], self.book.date)

    def test_tag_by_exercise(self):
        """
        Tests that we can retrieve the tags based on exercises

        Endpoint: GET /api/tag/exercise/<exercise_id>
        """
        response = self.client.get(reverse("api:tag-by-exercise", kwargs={'exercise_id': self.exerciseinfo.id}))
        json_response = json.loads(json.dumps(response.data))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(json_response[0]['id'], self.tag1.id)
        self.assertEqual(json_response[1]['id'], self.tag3.id)
        self.assertEqual(len(json_response), 2)

    
    def test_tag_by_level(self):
        """
        Tests that we can retrieve tags based on level

        Endpoint: GET /api/tag/level/<level_num>
        """
        response = self.client.get(reverse("api:tag-by-level", kwargs={'level_num': 1}))
        json_response = json.loads(json.dumps(response.data))['results']
        self.assertEqual(response.status_code, 200)
        self.assertEqual(json_response[0]['id'], self.tag1.id)
        self.assertEqual(json_response[1]['id'], self.tag2.id)
        self.assertEqual(len(json_response), 2)