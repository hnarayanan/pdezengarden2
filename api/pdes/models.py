from django.db import models

from model_utils import TimeStampedModel


class PDE(TimeStampedModel):

    name = models.CharField(max_length=255)
    tagline = models.CharField(max_length=500)
    slug = models.SlugField(max_length=255)
    thumbnail = models.ImageField(upload_to='/media')
