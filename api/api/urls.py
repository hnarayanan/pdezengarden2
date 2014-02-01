from django.conf import settings
from django.contrib import admin
from django.conf.urls import patterns, url, include

from rest_framework.routers import DefaultRouter

from pdes.views import PDEViewSet


admin.autodiscover()

router = DefaultRouter()
router.register(r'pdes', PDEViewSet)

urlpatterns = patterns('',
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^admin/', include(admin.site.urls)),

)

if settings.DEBUG:
    urlpatterns += patterns('',
        url(r'^media/(?P<path>.*)$', 'django.views.static.serve', {
            'document_root': settings.MEDIA_ROOT,
        }),
    )
