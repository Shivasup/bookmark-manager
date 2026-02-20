from rest_framework.viewsets import ModelViewSet
from .models import Bookmark
from .serializers import BookmarkSerializer

class BookmarkViewSet(ModelViewSet):
    queryset = Bookmark.objects.all()
    serializer_class = BookmarkSerializer