from django.db import models

class Bookmark(models.Model):
    title = models.CharField(max_length=100)
    url = models.URLField()

    def __str__(self):
        return self.title