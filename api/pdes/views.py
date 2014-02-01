from rest_framework import permissions, renderers, viewsets
from rest_framework.response import Response
from rest_framework.decorators import link

from .models import PDE
from .serializers import PDESerializer


class PDEViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """

    queryset = PDE.objects.all()
    serializer_class = PDESerializer
    filter_fields = ('name', 'tagline')
