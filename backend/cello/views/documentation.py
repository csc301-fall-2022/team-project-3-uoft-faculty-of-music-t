from drf_yasg import openapi

author_list_response = {"200": openapi.Response(
        description='List of all authors (string) is returned.',
        examples = {
            "application/json": {
                "authors": ["Ludwig van Beethoven", "Sergei Rachmaninoff", "Edward Elgar"]
            }
        }
    )
}

# Parameters for searching/filtering exercises
tag_id = openapi.Parameter('tag_id', openapi.IN_QUERY, type=openapi.TYPE_INTEGER)
author = openapi.Parameter('author', openapi.IN_QUERY, type=openapi.TYPE_STRING)
book_id = openapi.Parameter('book_id', openapi.IN_QUERY, type=openapi.TYPE_INTEGER)
side = openapi.Parameter('side', openapi.IN_QUERY, type=openapi.TYPE_STRING, description="The side of the exercises - can be either 'right', 'left', or 'other'")
clef = openapi.Parameter('clef', openapi.IN_QUERY, type=openapi.TYPE_STRING, description="The clef of the exercise - can be either 'treble' or 'tenor'")
search = openapi.Parameter('search', openapi.IN_QUERY, type=openapi.TYPE_STRING, description='A search term that returns all exercises where the search term matches a author, book title, exercise title, or tag name')

exercise_filter_parameters = [tag_id, author, book_id, side, clef, search]