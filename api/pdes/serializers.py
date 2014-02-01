from rest_framework import serializers

from .models import PDE


class PDESerializer(serializers.HyperLinkedModelSerializer):

    class Meta:
        model = PDE
        fields = ('name', 'tagline', 'slug', 'thumbnail')
