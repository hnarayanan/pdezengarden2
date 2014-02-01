from django.contrib import admin

from .models import PDE


class PDEAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("name",)}


admin.site.register(PDE, PDEAdmin)
