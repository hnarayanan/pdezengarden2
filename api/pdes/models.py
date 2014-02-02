from django.db import models
from django.utils.text import slugify

from model_utils.models import TimeStampedModel


class PDE(TimeStampedModel):

    name = models.CharField(max_length=255)
    tagline = models.CharField(max_length=500)
    slug = models.SlugField(max_length=255)
    thumbnail = models.ImageField(upload_to='thumbnails/')

    def thumbnail_url(self):
        return 'http://localhost:8000' + self.thumbnail.url

    def __unicode__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super(PDE, self).save(*args, **kwargs)
