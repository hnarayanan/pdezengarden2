from rest_framework import serializers

from .models import PDE


class PDESerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = PDE
        fields = ('name', 'tagline', 'slug', 'thumbnail')
