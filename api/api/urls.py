from django.conf.urls import patterns, url, include

from rest_framework.routers import DefaultRouter

from .views import PDEViewSet

router = DefaultRouter()
router.register(r'pdes', views.PDEViewSet)

urlpatterns = patterns('',
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
)
