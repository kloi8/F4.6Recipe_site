from django.contrib import admin
from django.urls import path, include
from rest_framework.schemas import get_schema_view
from django.views.generic import TemplateView
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions

# from django.conf.urls import url
# from recipeapp import views

schema_view = get_schema_view(
   openapi.Info(
      title="Recipe API",
      default_version='v1',
      description="API for managing recipes",
      contact=openapi.Contact(email="pak@mail.com"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('recipeapp.urls')),
    path("swagger-ui/",
        schema_view.with_ui
        ('swagger', cache_timeout=0), name='schema-swagger-ui'),
    ]
