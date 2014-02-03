from rest_framework import serializers

from .models import PDE


class PDESerializer(serializers.HyperlinkedModelSerializer):

    thumbnail = serializers.CharField(source='thumbnail_url')

    class Meta:
        model = PDE
        fields = ('created', 'modified', 'id', 'name', 'tagline', 'slug', 'thumbnail')
